import connectDB from '@/lib/mongodb';
import Tool from '@/models/Tool';
import { getAllPosts } from '@/lib/sanity';

// ⚡️ PERFORMANCE CONFIG
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour
export const maxDuration = 60;  // Allow up to 60s (Vercel Pro)

// ---------------------------------------------------------
// 🛠️ HELPER FUNCTIONS
// ---------------------------------------------------------
const toISO = (d) => {
  try {
    return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
  } catch {
    return new Date().toISOString();
  }
};

const norm = (p) => {
  if (!p || p === '/' || p === '') return '';
  return p.replace(/\/+$/, '');
};

const urlXml = (base, { url, lastmod, priority = 0.5, changefreq = 'weekly' }) => {
  const loc = `${base}${norm(url)}`;
  const validLastmod = lastmod ? toISO(lastmod) : toISO(new Date());

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${validLastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

function cleanSlug(str) {
  if (!str) return null;
  return str.toLowerCase().trim()
    .replace(/\s*&\s*/g, '-and-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizePrice(type) {
  if (!type) return null;
  const t = type.toLowerCase();
  if (t === 'free') return 'free';
  if (t === 'freemium') return 'freemium';
  if (t === 'paid') return 'paid';
  if (t.includes('trial')) return 'free-trial';
  return null;
}

function dedupe(routes) {
  const out = [];
  const seen = new Set();

  for (const r of routes) {
    const key = norm(r.url || '');
    if (!seen.has(key)) {
      seen.add(key);
      out.push(r);
    }
  }
  return out;
}

// ---------------------------------------------------------
// 🚀 MAIN SITEMAP GENERATOR
// ---------------------------------------------------------
export async function GET() {
  const baseUrl = 'https://thetoolsverse.com';
  const now = new Date();

  try {
    console.log("🚀 Starting Sitemap Generation...");
    const startTime = Date.now();

    await connectDB();

    // 🔥 SINGLE DATABASE QUERY - Fetches ALL data at once
    // This prevents 400+ separate queries that cause timeouts
    const allTools = await Tool.find({})
      .select('slug categories pricingType updatedAt createdAt rating')
      .lean();

    console.log(`📊 Fetched ${allTools.length} tools in ${Date.now() - startTime}ms`);

    // 1) ⭐ HIGHEST PRIORITY: Static Core Pages
    const staticRoutes = [
      { url: '', lastmod: now, priority: 1.0, changefreq: 'daily' },
      { url: '/browse-tools', lastmod: now, priority: 0.95, changefreq: 'daily' },
      { url: '/blog', lastmod: now, priority: 0.85, changefreq: 'daily' },
      { url: '/about', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/contact', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/how-it-works', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/submit-tool', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/pricing', lastmod: now, priority: 0.6, changefreq: 'monthly' },
      { url: '/privacy-policy', lastmod: now, priority: 0.4, changefreq: 'yearly' },
      { url: '/terms', lastmod: now, priority: 0.4, changefreq: 'yearly' },
    ];

    // 2) 🛠️ TOOL DETAIL ROUTES (Processed in Memory)
    const toolRoutes = allTools
      .filter(t => t.slug)
      .map(tool => ({
        url: `/tools/${tool.slug}`,
        lastmod: tool.updatedAt || tool.createdAt || now,
        priority: (tool.rating || 0) >= 4.5 ? 0.9 : 0.8,
        changefreq: 'weekly',
      }));

    // 3) 📂 CATEGORY ROUTES (Calculated in Memory - NO DB CALLS)
    const categoriesMap = new Map();

    allTools.forEach(tool => {
      if (Array.isArray(tool.categories)) {
        tool.categories.forEach(cat => {
          const slug = cleanSlug(cat);
          if (!slug) return;

          const existingDate = categoriesMap.get(slug);
          const toolDate = new Date(tool.updatedAt || tool.createdAt || 0);

          if (!existingDate || toolDate > existingDate) {
            categoriesMap.set(slug, toolDate);
          }
        });
      }
    });

    const categoryRoutes = Array.from(categoriesMap.entries()).map(([slug, date]) => ({
      url: `/categories/${slug}`,
      lastmod: date,
      priority: 0.85,
      changefreq: 'daily',
    }));

    // 4) 🏷️ CATEGORY + PRICE ROUTES (Calculated in Memory - NO DB CALLS)
    const catPriceSet = new Set();

    allTools.forEach(tool => {
      if (tool.categories && tool.pricingType) {
        const priceSlug = normalizePrice(tool.pricingType);
        if (!priceSlug) return;

        tool.categories.forEach(cat => {
          const catSlug = cleanSlug(cat);
          if (catSlug) {
            catPriceSet.add(`${catSlug}/${priceSlug}`);
          }
        });
      }
    });

    const categoryPriceRoutes = Array.from(catPriceSet).map(path => ({
      url: `/categories/${path}`,
      lastmod: now,
      priority: 0.75,
      changefreq: 'weekly',
    }));

    // 5) 💰 PRICING PAGINATION ROUTES (Minimal DB calls - only 4 queries)
    const pricingRoutes = await getPricingPaginationRoutes();

    // 6) 📰 BLOG ROUTES
    const blogRoutes = await getBlogRoutes();

    // 7) 📄 BROWSE PAGINATION (Calculated from tool count)
    const totalPages = Math.ceil(allTools.length / 24);
    const browseRoutes = [];
    for (let i = 2; i <= Math.min(totalPages, 50); i++) {
      browseRoutes.push({
        url: `/browse-tools/page/${i}`,
        lastmod: now,
        priority: Math.max(0.5, 0.8 - (i * 0.01)),
        changefreq: 'daily',
      });
    }

    // 8) 🎯 LANDING PAGES
    const freeToolsPages = [
      { url: '/free-ai-tools', lastmod: now, priority: 0.85, changefreq: 'weekly' },
      { url: '/free-ai-tools/business', lastmod: now, priority: 0.85, changefreq: 'weekly' },
      { url: '/free-ai-tools/students', lastmod: now, priority: 0.85, changefreq: 'weekly' },
    ];

    // 9) 🆚 COMPARE PAGES
    const compareRoutes = [
      'chatgpt-vs-claude',
      'chatgpt-vs-bard',
      'midjourney-vs-dalle',
      'midjourney-vs-stable-diffusion',
      'chatgpt-vs-copilot'
    ].map(slug => ({
      url: `/compare/${slug}`,
      lastmod: now,
      priority: 0.7,
      changefreq: 'monthly',
    }));

    // --- MERGE & DEDUPLICATE ALL ROUTES ---
    const allRoutes = dedupe([
      ...staticRoutes,
      ...toolRoutes,
      ...categoryRoutes,
      ...categoryPriceRoutes,
      ...pricingRoutes,
      ...blogRoutes,
      ...browseRoutes,
      ...freeToolsPages,
      ...compareRoutes
    ]);

    const totalTime = Date.now() - startTime;
    console.log(`✅ Sitemap generated: ${allRoutes.length} URLs in ${totalTime}ms`);

    // Generate XML
    const routesXml = allRoutes.map(r => urlXml(baseUrl, r)).join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routesXml}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        'X-Robots-Tag': 'index, follow',
        'Vary': 'Accept-Encoding',
        'Last-Modified': now.toUTCString(),
      },
    });

  } catch (err) {
    console.error('❌ Sitemap Error:', err);

    // Fallback to prevent 500 error
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
}

// ---------------------------------------------------------
// 📊 HELPER FUNCTIONS (Minimal DB Queries)
// ---------------------------------------------------------

// Only 4 DB queries total for pricing pagination
async function getPricingPaginationRoutes() {
  const routes = [];
  const types = [
    { path: '/free', regex: /^free$/i },
    { path: '/freemium', regex: /^freemium$/i },
    { path: '/paid', regex: /^paid$/i },
    { path: '/free-trial', regex: /^free[- ]?trial$/i }
  ];

  for (const t of types) {
    try {
      const count = await Tool.countDocuments({ pricingType: { $regex: t.regex } });
      const pages = Math.min(Math.ceil(count / 12), 30);

      routes.push({
        url: t.path,
        priority: 0.9,
        changefreq: 'daily',
        lastmod: new Date()
      });

      for (let i = 2; i <= pages; i++) {
        routes.push({
          url: `${t.path}?page=${i}`,
          priority: Math.max(0.5, 0.85 - (i * 0.01)),
          changefreq: 'weekly',
          lastmod: new Date()
        });
      }
    } catch (e) {
      console.error(`Pricing route error for ${t.path}:`, e);
    }
  }
  return routes;
}

async function getBlogRoutes() {
  try {
    const posts = await getAllPosts();
    if (!Array.isArray(posts)) return [];

    return posts
      .map(p => {
        const slug = typeof p?.slug === 'string' ? p.slug : p?.slug?.current;
        if (!slug) return null;

        return {
          url: `/blog/${slug}`,
          lastmod: p.updatedAt || p.publishedAt || new Date(),
          priority: 0.8,
          changefreq: 'monthly'
        };
      })
      .filter(Boolean);
  } catch (e) {
    console.error('Blog routes error:', e);
    return [];
  }
}