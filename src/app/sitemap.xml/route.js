// app/sitemap.xml/route.js
import toolsData from '@/data/tools.js';
import { getAllPosts } from '@/lib/sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

// Toggle to pre-validate a tiny URL subset (e.g., compare pages) during debugging.
// Keep false in production to avoid latency.
const VALIDATE_COMPARE_URLS = false;

// Helpers
const toISO = (d) => (d instanceof Date ? d.toISOString() : new Date(d).toISOString());
const isIso = (v) => typeof v === 'string' && !Number.isNaN(Date.parse(v));

// Normalize a URL path (no trailing slash except root)
const norm = (p) => (p === '/' || p === '' ? '' : p.replace(/\/+$/, ''));

// Build a URL element string with minimal, truthful fields
const urlXml = (base, { url, lastmod }) => {
  const loc = `${base}${norm(url)}`;
  return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
};

// Optional live checker for a tiny set (HEAD with GET fallback)
async function filterLiveRoutes(baseUrl, routes) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const checks = routes.map(async (r) => {
      try {
        let res = await fetch(`${baseUrl}${norm(r.url)}`, { method: 'HEAD', signal: controller.signal });
        if (res.status === 405 || !res.ok) {
          res = await fetch(`${baseUrl}${norm(r.url)}`, { method: 'GET', signal: controller.signal });
        }
        return res.ok ? r : null;
      } catch {
        return null;
      }
    });
    const results = await Promise.allSettled(checks);
    return results.map((x) => (x.status === 'fulfilled' ? x.value : null)).filter(Boolean);
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const baseUrl = 'https://www.thetoolsverse.com';

  try {
    // 1) Static routes (include only live pages; exclude non-working /free-ai-tools root)
    const staticRoutes = [
      { url: '', lastmod: undefined }, // home; optionally stamp separately if homepage content has a tracked updatedAt
      { url: '/about', lastmod: undefined },
      { url: '/how-it-works', lastmod: undefined },
      { url: '/browse-tools', lastmod: undefined },
      { url: '/featured', lastmod: undefined },
      { url: '/blog', lastmod: undefined },
      // Known working free pages (exclude /free-ai-tools if not implemented)
      { url: '/free-ai-tools/business', lastmod: undefined },
      { url: '/free-ai-tools/students', lastmod: undefined },
      { url: '/submit-tool', lastmod: undefined },
    ];

    // 2) Dynamic: Tools
    const toolRoutes = getToolRoutes();

    // 3) Dynamic: Blog
    const blogRoutes = await getBlogRoutes();

    // 4) Dynamic: Categories (lastmod = max child tool updatedAt)
    const categoryRoutes = getCategoryRoutes(toolRoutes);

    // 5) Dynamic: Compare (only implemented pages)
    let compareRoutes = getCompareRoutes();
    if (VALIDATE_COMPARE_URLS) {
      compareRoutes = await filterLiveRoutes(baseUrl, compareRoutes);
    }

    // Merge and de-duplicate
    const all = dedupe([
      ...staticRoutes,
      ...categoryRoutes,
      ...toolRoutes,
      ...blogRoutes,
      ...compareRoutes,
    ]);

    // Convert to XML
    const routesXml = all.map((r) => urlXml(baseUrl, r)).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesXml}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'X-Robots-Tag': 'index, follow',
        'Vary': 'Accept-Encoding',
        'Last-Modified': new Date().toUTCString(),
      },
    });
  } catch (err) {
    // Minimal fallback with only guaranteed pages
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}</loc></url>
  <url><loc>${baseUrl}/blog</loc></url>
</urlset>`;
    return new Response(fallback, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
}

// ---- Builders ----

// Returns: [{ url, lastmod? }]
function getToolRoutes() {
  try {
    if (!Array.isArray(toolsData)) return [];
    return toolsData
      .filter((t) => t?.slug) // must have slug
      .map((tool) => {
        const last =
          tool?.updatedAt ? toISO(tool.updatedAt) :
          tool?.publishedAt ? toISO(tool.publishedAt) :
          undefined;
        return { url: `/tools/${tool.slug}`, lastmod: last && isIso(last) ? last : undefined };
      });
  } catch {
    return [];
  }
}

// Returns: [{ url, lastmod? }]
async function getBlogRoutes() {
  try {
    const posts = await getAllPosts();
    if (!Array.isArray(posts) || posts.length === 0) return [];
    return posts
      .map((post) => {
        const slug = typeof post?.slug === 'string' ? post.slug : post?.slug?.current;
        if (!slug) return null;
        const last =
          post?.updatedAt ? toISO(post.updatedAt) :
          post?.publishedAt ? toISO(post.publishedAt) :
          undefined;
        return { url: `/blog/${slug}`, lastmod: last && isIso(last) ? last : undefined };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

// Category lastmod = max lastmod of its tools
function getCategoryRoutes(toolRoutes) {
  try {
    if (!Array.isArray(toolsData)) return [];
    const catToMaxLast = new Map(); // slug -> ISO string
    const catSlug = (txt) =>
      txt
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    // Build a quick lookup from tool slug -> lastmod
    const toolLastBySlug = new Map(
      toolRoutes.map((t) => [t.url.replace('/tools/', ''), t.lastmod].filter(Boolean))
    );

    for (const tool of toolsData) {
      if (!Array.isArray(tool?.category)) continue;
      const tLast =
        tool?.updatedAt ? toISO(tool.updatedAt) :
        tool?.publishedAt ? toISO(tool.publishedAt) :
        undefined;
      for (const c of tool.category) {
        if (typeof c !== 'string' || !c.trim()) continue;
        const slug = catSlug(c);
        if (!slug) continue;
        const current = catToMaxLast.get(slug);
        const next = tLast && isIso(tLast) ? tLast : current;
        // pick the max timestamp
        if (!current || (next && new Date(next) > new Date(current))) {
          catToMaxLast.set(slug, next);
        }
      }
    }

    return Array.from(catToMaxLast.entries()).map(([slug, last]) => ({
      url: `/categories/${slug}`,
      lastmod: last && isIso(last) ? last : undefined,
    }));
  } catch {
    return [];
  }
}

// Only include compare pages that actually exist in your app
function getCompareRoutes() {
  const compareSlugs = [
    'chatgpt-vs-bard',
    'chatgpt-vs-claude',
    'chatgpt-vs-copilot',
    'midjourney-vs-dalle',
    'midjourney-vs-stable-diffusion',
  ];
  const now = undefined; // only set if you track per-page updatedAt
  return compareSlugs.map((slug) => ({ url: `/compare/${slug}`, lastmod: now }));
}

// De-duplicate by normalized URL
function dedupe(routes) {
  const out = [];
  const seen = new Set();
  for (const r of routes) {
    const key = norm(r.url || '');
    if (!seen.has(key)) {
      seen.add(key);
      out.push({ url: key, lastmod: r.lastmod && isIso(r.lastmod) ? r.lastmod : undefined });
    }
  }
  return out;
}
