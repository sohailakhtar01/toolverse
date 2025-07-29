export async function GET() {
  const baseUrl = "https://toolverse-brown.vercel.app";
  
  // Static routes
  const staticRoutes = [
    {
      url: "",
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: "daily",
      priority: "1.0"
    },
    {
      url: "/about",
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: "monthly",
      priority: "0.8"
    },
    {
      url: "/how-it-works",
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: "monthly",
      priority: "0.7"
    },
    {
      url: "/browse-tools",
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: "weekly",
      priority: "0.9"
    },
    {
      url: "/featured",
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: "weekly",
      priority: "0.8"
    }
  ];

  // TODO: Replace these with your actual data fetching logic
  // Example dynamic routes - you'll need to fetch these from your database/API
  
  // Categories dynamic routes
  const categoryRoutes = await getCategoryRoutes(); // You need to implement this
  
  // Tools dynamic routes  
  const toolRoutes = await getToolRoutes(); // You need to implement this

  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...categoryRoutes,
    ...toolRoutes
  ];

  const routes = allRoutes.map((route) => {
    return `
    <url>
      <loc>${baseUrl}${route.url}</loc>
      <lastmod>${route.lastmod}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Import your actual data
import toolsData from '../../../src/data/tool.js'; // Adjust path if needed

async function getCategoryRoutes() {
  // Extract unique categories from your tools data
  const categoriesSet = new Set();
  
  toolsData.forEach(tool => {
    tool.category.forEach(cat => {
      // Convert category name to slug format
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
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: "weekly",
    priority: "0.8"
  }));
}

async function getToolRoutes() {
  // Use actual tool slugs from your data
  return toolsData.map(tool => ({
    url: `/tools/${tool.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: "monthly", 
    priority: tool.isFeatured ? "0.9" : "0.7" // Higher priority for featured tools
  }));
}