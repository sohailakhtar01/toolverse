// app/sitemap.xml/route.js
import toolsData from '@/data/tools.js';
import { getAllPosts } from '@/lib/sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

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
  const baseUrl = 'https://www.thetoolsverse.com';
  const now = new Date().toISOString();

  try {
    // 1) HIGH PRIORITY: Homepage & Main Pages (Priority: 1.0)
    const staticRoutes = [
      { url: '', lastmod: now, priority: 1.0, changefreq: 'daily' }, // Homepage
      { url: '/browse-tools', lastmod: now, priority: 0.9, changefreq: 'daily' },
      { url: '/featured', lastmod: now, priority: 0.9, changefreq: 'daily' },
      { url: '/blog', lastmod: now, priority: 0.9, changefreq: 'daily' },
    ];

    // 2) MEDIUM PRIORITY: About & Info Pages (Priority: 0.7)
    const infoPages = [
      { url: '/about', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/how-it-works', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/submit-tool', lastmod: now, priority: 0.7, changefreq: 'monthly' },
      { url: '/pricing', lastmod: now, priority: 0.6, changefreq: 'monthly' },
      { url: '/privacy-policy', lastmod: now, priority: 0.5, changefreq: 'yearly' },
    ];

    // 3) WORKING FREE TOOLS PAGES (Priority: 0.8)
    const freeToolsPages = [
      { url: '/free-ai-tools/business', lastmod: now, priority: 0.8, changefreq: 'weekly' },
      { url: '/free-ai-tools/students', lastmod: now, priority: 0.8, changefreq: 'weekly' },
    ];

    // 4) Dynamic: Tools (Priority: 0.8)
    const toolRoutes = getToolRoutes();

    // 5) Dynamic: Blog Posts (Priority: 0.8)
    const blogRoutes = await getBlogRoutes();

    // 6) Dynamic: Categories (Priority: 0.7)
    const categoryRoutes = getCategoryRoutes(toolRoutes);

    // 7) Compare Pages (Priority: 0.6) - ONLY if implemented
    const compareRoutes = getCompareRoutes();

    // Merge all routes
    const all = dedupe([
      ...staticRoutes,
      ...infoPages,
      ...freeToolsPages,
      ...categoryRoutes,
      ...toolRoutes,
      ...blogRoutes,
      ...compareRoutes,
    ]);

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
    console.error('Sitemap generation error:', err);
    
    // Minimal fallback
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${now}</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>`;
    
    return new Response(fallback, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
}

// ---- Helper Functions ----

function getToolRoutes() {
  try {
    if (!Array.isArray(toolsData)) return [];
    
    return toolsData
      .filter((t) => t?.slug)
      .map((tool) => {
        const lastmod = tool?.updatedAt || tool?.publishedAt || new Date();
        
        return {
          url: `/tools/${tool.slug}`,
          lastmod: isValidDate(lastmod) ? toISO(lastmod) : toISO(new Date()),
          priority: 0.8,
          changefreq: 'weekly',
        };
      });
  } catch {
    return [];
  }
}

async function getBlogRoutes() {
  try {
    const posts = await getAllPosts();
    if (!Array.isArray(posts) || posts.length === 0) return [];
    
    return posts
      .map((post) => {
        const slug = typeof post?.slug === 'string' ? post.slug : post?.slug?.current;
        if (!slug) return null;
        
        const lastmod = post?.updatedAt || post?.publishedAt || new Date();
        
        return {
          url: `/blog/${slug}`,
          lastmod: isValidDate(lastmod) ? toISO(lastmod) : toISO(new Date()),
          priority: 0.8,
          changefreq: 'monthly',
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function getCategoryRoutes(toolRoutes) {
  try {
    if (!Array.isArray(toolsData)) return [];
    
    const catMap = new Map();
    
    const catSlug = (txt) =>
      txt
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    for (const tool of toolsData) {
      if (!Array.isArray(tool?.category)) continue;
      
      const tLastmod = tool?.updatedAt || tool?.publishedAt || new Date();
      
      for (const c of tool.category) {
        if (typeof c !== 'string' || !c.trim()) continue;
        const slug = catSlug(c);
        if (!slug) continue;
        
        const current = catMap.get(slug);
        
        if (!current || (isValidDate(tLastmod) && new Date(tLastmod) > new Date(current))) {
          catMap.set(slug, tLastmod);
        }
      }
    }
    
    return Array.from(catMap.entries()).map(([slug, lastmod]) => ({
      url: `/categories/${slug}`,
      lastmod: isValidDate(lastmod) ? toISO(lastmod) : toISO(new Date()),
      priority: 0.7,
      changefreq: 'weekly',
    }));
  } catch {
    return [];
  }
}

function getCompareRoutes() {
  // ONLY include pages that actually exist on your site
  const compareSlugs = [
    'chatgpt-vs-bard',
    'chatgpt-vs-claude',
    'chatgpt-vs-copilot',
    'midjourney-vs-dalle',
    'midjourney-vs-stable-diffusion',
  ];
  
  return compareSlugs.map((slug) => ({
    url: `/compare/${slug}`,
    lastmod: toISO(new Date()),
    priority: 0.6,
    changefreq: 'monthly',
  }));
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
