// app/sitemap.xml/route.js
import connectDB from '@/lib/mongodb';
import Tool from '@/models/Tool';
import { getAllPosts } from '@/lib/sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Regenerate every hour

// Helper functions
const toISO = (d) => {
  try {
    return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
  } catch {
    return new Date().toISOString();
  }
};

const isValidDate = (v) => {
  if (!v) return false;
  const d = new Date(v);
  return d instanceof Date && !isNaN(d.getTime());
};

const norm = (p) => {
  if (!p || p === '/' || p === '') return '';
  return p.replace(/\/+$/, '');
};

const urlXml = (base, { url, lastmod, priority = 0.5, changefreq = 'weekly' }) => {
  const loc = `${base}${norm(url)}`;
  const validLastmod = isValidDate(lastmod) ? toISO(lastmod) : toISO(new Date());
  
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${validLastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

export async function GET() {
  const baseUrl = 'https://thetoolsverse.com';
  const now = new Date().toISOString();

  try {
    // 🔥 CONNECT TO DATABASE
    await connectDB();

    // 1) ⭐ HIGHEST PRIORITY: Homepage & Core Pages (Priority: 1.0)
    const staticRoutes = [
      { url: '', lastmod: now, priority: 1.0, changefreq: 'daily' }, // Homepage
      { url: '/browse-tools', lastmod: now, priority: 0.95, changefreq: 'daily' },
      { url: '/featured', lastmod: now, priority: 0.9, changefreq: 'daily' },
      { url: '/blog', lastmod: now, priority: 0.85, changefreq: 'daily' },
    ];

    // 2) 🔥 PRICING FILTER PAGES WITH PAGINATION (Priority: 0.9)
    // Pages: /free, /freemium, /paid, /free-trial
    // With pagination: /free?page=2, /free?page=3, etc.
    const pricingRoutes = await getPricingPaginationRoutes();

    // 3) 📄 MEDIUM PRIORITY: Info Pages (Priority: 0.7)
    const infoPages = [
      { url: '/about', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/contact', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/how-it-works', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/submit-tool', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/pricing', lastmod: now, priority: 0.6, changefreq: 'monthly' },
      { url: '/privacy-policy', lastmod: now, priority: 0.4, changefreq: 'yearly' },
      { url: '/terms-of-service', lastmod: now, priority: 0.4, changefreq: 'yearly' },
    ];

    // 4) 🎓 FREE TOOLS LANDING PAGES (Priority: 0.85)
    const freeToolsPages = [
      { url: '/free-ai-tools', lastmod: now, priority: 0.85, changefreq: 'weekly' },
      { url: '/free-ai-tools/business', lastmod: now, priority: 0.85, changefreq: 'weekly' },
      { url: '/free-ai-tools/students', lastmod: now, priority: 0.85, changefreq: 'weekly' },
    ];

    // 5) 🔥 DYNAMIC: Browse Tools Pagination
    // URLs: /browse-tools/page/2, /browse-tools/page/3, etc.
    const browsePaginationRoutes = await getBrowsePaginationRoutes();

    // 6) 🔥 DYNAMIC: All Tools from DB (Priority: 0.8)
    // URLs: /tools/chatgpt, /tools/midjourney, etc.
    const toolRoutes = await getToolRoutesFromDB();

    // 7) 🔥 DYNAMIC: Blog Posts (Priority: 0.8)
    const blogRoutes = await getBlogRoutes();

    // 8) 🔥 DYNAMIC: Categories from DB (Priority: 0.85)
    // URLs: /categories/ai-writing, /categories/design, etc.
    const categoryRoutes = await getCategoryRoutesFromDB();

    // 9) 🔥 DYNAMIC: Categories with Price Filters
    // URLs: /categories/ai-writing/free, /categories/design/paid, etc.
    const categoryPriceRoutes = await getCategoryPriceRoutes();

    // 10) 📊 Compare Pages (Priority: 0.7)
    const compareRoutes = getCompareRoutes();

    // Merge all routes
    const all = dedupe([
      ...staticRoutes,
      ...pricingRoutes,
      ...infoPages,
      ...freeToolsPages,
      ...browsePaginationRoutes,
      ...categoryRoutes,
      ...categoryPriceRoutes,
      ...toolRoutes,
      ...blogRoutes,
      ...compareRoutes,
    ]);

    console.log(`✅ Sitemap generated: ${all.length} URLs`);

    const routesXml = all.map((r) => urlXml(baseUrl, r)).join('\n');

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
        'Last-Modified': new Date().toUTCString(),
      },
    });
  } catch (err) {
    console.error('❌ Sitemap generation error:', err);
    
    // Minimal fallback
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    return new Response(fallback, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  }
}

// ---- 🔥 DYNAMIC HELPER FUNCTIONS ----

// 🔥 Get Pricing Pages with Pagination
// URLs: /free, /free?page=2, /freemium, /freemium?page=2, etc.
async function getPricingPaginationRoutes() {
  const pricingTypes = [
    { path: '/free', query: { pricingType: { $regex: /^free$/i } } },
    { path: '/freemium', query: { pricingType: { $regex: /^freemium$/i } } },
    { path: '/paid', query: { pricingType: { $regex: /^paid$/i } } },
    { path: '/free-trial', query: { pricingType: { $regex: /^free[- ]?trial$/i } } },
  ];

  const routes = [];
  const limit = 12; // Tools per page

  for (const { path, query } of pricingTypes) {
    try {
      const count = await Tool.countDocuments(query);
      const totalPages = Math.ceil(count / limit);
      const maxPages = Math.min(totalPages, 30); // Index first 30 pages

      // Base page (no query param)
      routes.push({
        url: path,
        lastmod: toISO(new Date()),
        priority: 0.9,
        changefreq: 'daily',
      });

      // Paginated pages: /free?page=2, /free?page=3, etc.
      for (let i = 2; i <= maxPages; i++) {
        routes.push({
          url: `${path}?page=${i}`,
          lastmod: toISO(new Date()),
          priority: 0.85 - (i * 0.01), // Decreasing priority
          changefreq: 'weekly',
        });
      }
    } catch (err) {
      console.error(`Error counting ${path}:`, err);
    }
  }

  return routes;
}

// 🔥 Get Browse Tools Pagination
// URLs: /browse-tools/page/2, /browse-tools/page/3, etc.
async function getBrowsePaginationRoutes() {
  try {
    const totalTools = await Tool.countDocuments({});
    const totalPages = Math.ceil(totalTools / 24); // 24 tools per page
    const maxPages = Math.min(totalPages, 50); // Index first 50 pages
    
    const routes = [];
    for (let i = 2; i <= maxPages; i++) {
      routes.push({
        url: `/browse-tools/page/${i}`,
        lastmod: toISO(new Date()),
        priority: 0.8 - (i * 0.01), // Decreasing priority
        changefreq: 'daily',
      });
    }
    
    return routes;
  } catch {
    return [];
  }
}

// 🔥 Get All Tools from MongoDB
// URLs: /tools/chatgpt, /tools/midjourney, etc.
async function getToolRoutesFromDB() {
  try {
    const tools = await Tool.find({})
      .select('slug updatedAt createdAt rating')
      .lean();
    
    if (!Array.isArray(tools)) return [];
    
    return tools
      .filter((t) => t?.slug)
      .map((tool) => {
        const lastmod = tool.updatedAt || tool.createdAt || new Date();
        // Higher priority for highly-rated tools
        const priority = tool.rating >= 4.5 ? 0.85 : 0.8;
        
        return {
          url: `/tools/${tool.slug}`,
          lastmod: toISO(lastmod),
          priority,
          changefreq: 'weekly',
        };
      });
  } catch (err) {
    console.error('Error fetching tool routes:', err);
    return [];
  }
}

// 🔥 Get Blog Posts from Sanity
async function getBlogRoutes() {
  try {
    const posts = await getAllPosts();
    if (!Array.isArray(posts) || posts.length === 0) return [];
    
    return posts
      .map((post) => {
        const slug = typeof post?.slug === 'string' ? post.slug : post?.slug?.current;
        if (!slug) return null;
        
        const lastmod = post.updatedAt || post.publishedAt || new Date();
        
        return {
          url: `/blog/${slug}`,
          lastmod: toISO(lastmod),
          priority: 0.8,
          changefreq: 'monthly',
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

// 🔥 Get Categories from MongoDB
// URLs: /categories/ai-writing, /categories/design, etc.
async function getCategoryRoutesFromDB() {
  try {
    const categories = await Tool.distinct('categories');
    
    if (!Array.isArray(categories)) return [];
    
    const routes = [];
    
    for (const category of categories) {
      if (!category || typeof category !== 'string') continue;
      
      // Get most recent tool in this category
      const latestTool = await Tool.findOne({ categories: category })
        .sort({ updatedAt: -1 })
        .select('updatedAt')
        .lean();
      
      const slug = category
        .toLowerCase()
        .trim()
        .replace(/\s*&\s*/g, '-and-')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      if (!slug) continue;
      
      routes.push({
        url: `/categories/${slug}`,
        lastmod: latestTool?.updatedAt ? toISO(latestTool.updatedAt) : toISO(new Date()),
        priority: 0.85, // Categories are very important!
        changefreq: 'daily',
      });
    }
    
    return routes;
  } catch (err) {
    console.error('Error fetching category routes:', err);
    return [];
  }
}

// 🔥 Get Categories with Price Filters
// URLs: /categories/ai-writing/free, /categories/design/paid, etc.
async function getCategoryPriceRoutes() {
  try {
    const categories = await Tool.distinct('categories');
    const priceFilters = ['free', 'freemium', 'paid', 'free-trial'];
    
    const routes = [];
    
    for (const category of categories) {
      if (!category || typeof category !== 'string') continue;
      
      const slug = category
        .toLowerCase()
        .trim()
        .replace(/\s*&\s*/g, '-and-')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      if (!slug) continue;
      
      // Add price filter combinations
      for (const price of priceFilters) {
        // Check if this combination has tools
        const regex = price === 'free-trial' 
          ? { $regex: /^free[- ]?trial$/i }
          : { $regex: new RegExp(`^${price}$`, 'i') };
        
        const count = await Tool.countDocuments({
          categories: category,
          pricingType: regex,
        });
        
        if (count > 0) {
          routes.push({
            url: `/categories/${slug}/${price}`,
            lastmod: toISO(new Date()),
            priority: 0.75,
            changefreq: 'weekly',
          });
        }
      }
    }
    
    return routes;
  } catch (err) {
    console.error('Error fetching category price routes:', err);
    return [];
  }
}

// 🔥 Compare Pages (Static for now)
function getCompareRoutes() {
  const compareSlugs = [
    'chatgpt-vs-claude',
    'chatgpt-vs-bard',
    'midjourney-vs-dalle',
    'midjourney-vs-stable-diffusion',
    'chatgpt-vs-copilot',
  ];
  
  return compareSlugs.map((slug) => ({
    url: `/compare/${slug}`,
    lastmod: toISO(new Date()),
    priority: 0.7,
    changefreq: 'monthly',
  }));
}

// 🔥 Remove Duplicates
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
