import toolsData from '@/data/tools.js';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = "https://toolverse-brown.vercel.app";
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: "", lastmod: today, changefreq: "daily", priority: "1.0" },
    { url: "/about", lastmod: today, changefreq: "monthly", priority: "0.8" },
    { url: "/how-it-works", lastmod: today, changefreq: "monthly", priority: "0.7" },
    { url: "/browse-tools", lastmod: today, changefreq: "weekly", priority: "0.9" },
    { url: "/featured", lastmod: today, changefreq: "weekly", priority: "0.8" }
  ];

  const categoryRoutes = getCategoryRoutes(today);
  const toolRoutes = getToolRoutes(today);

  const allRoutes = [...staticRoutes, ...categoryRoutes, ...toolRoutes];

  const routesXml = allRoutes.map((route) => `
    <url>
      <loc>${baseUrl}${route.url}</loc>
      <lastmod>${route.lastmod}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routesXml}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function getCategoryRoutes(lastmod) {
  const categoriesSet = new Set();
  toolsData.forEach(tool => {
    tool.category?.forEach(cat => {
      const slug = cat.toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      categoriesSet.add(slug);
    });
  });

  const categories = Array.from(categoriesSet);
  return categories.map(slug => ({
    url: `/categories/${slug}`,
    lastmod,
    changefreq: "weekly",
    priority: "0.8"
  }));
}

function getToolRoutes(lastmod) {
  return toolsData.map(tool => ({
    url: `/tools/${tool.slug}`,
    lastmod,
    changefreq: "monthly",
    priority: tool.isFeatured ? "0.9" : "0.7"
  }));
}
