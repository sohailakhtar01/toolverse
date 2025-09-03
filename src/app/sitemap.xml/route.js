// app/sitemap.xml/route.js
import toolsData from '@/data/tools.js';
import { getAllPosts } from '@/lib/sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  // ✅ Multiple fallback options for domain
  const baseUrl = 
    process.env.SITE_URL || 
    process.env.NEXT_PUBLIC_SITE_URL || 
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
    "https://www.thetoolsverse.com"; // Your new domain as final fallback

  const today = new Date().toISOString().split('T')[0];

  try {
    // ✅ Static routes
    const staticRoutes = [
      { url: "", lastmod: today, changefreq: "daily", priority: "1.0" },
      { url: "/about", lastmod: today, changefreq: "monthly", priority: "0.8" },
      { url: "/how-it-works", lastmod: today, changefreq: "monthly", priority: "0.7" },
      { url: "/browse-tools", lastmod: today, changefreq: "weekly", priority: "0.9" },
      { url: "/featured", lastmod: today, changefreq: "weekly", priority: "0.8" },
      { url: "/blog", lastmod: today, changefreq: "daily", priority: "0.9" },
    ];

    // ✅ Dynamic routes
    const categoryRoutes = getCategoryRoutes(today);
    const toolRoutes = getToolRoutes(today);
    const blogRoutes = await getBlogRoutes();

    const allRoutes = [
      ...staticRoutes,
      ...categoryRoutes,
      ...toolRoutes,
      ...blogRoutes,
    ];

    // ✅ Build XML
    const routesXml = allRoutes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route.url}</loc>
        <lastmod>${route.lastmod}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
      </url>`
      )
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routesXml}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);

    // ✅ Minimal fallback with correct domain
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    return new Response(fallbackXml, {
      headers: { "Content-Type": "application/xml" },
    });
  }
}

// ✅ Category routes
function getCategoryRoutes(lastmod) {
  try {
    const categoriesSet = new Set();
    toolsData.forEach((tool) => {
      tool.category?.forEach((cat) => {
        const slug = cat
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        categoriesSet.add(slug);
      });
    });

    return Array.from(categoriesSet).map((slug) => ({
      url: `/categories/${slug}`,
      lastmod,
      changefreq: "weekly",
      priority: "0.8",
    }));
  } catch (error) {
    console.error("Error generating category routes:", error);
    return [];
  }
}

// ✅ Tool routes
function getToolRoutes(lastmod) {
  try {
    return toolsData.map((tool) => ({
      url: `/tools/${tool.slug}`,
      lastmod,
      changefreq: "monthly",
      priority: tool.isFeatured ? "0.9" : "0.7",
    }));
  } catch (error) {
    console.error("Error generating tool routes:", error);
    return [];
  }
}

// ✅ Blog routes from Sanity
async function getBlogRoutes() {
  try {
    const posts = await getAllPosts();

    if (!posts || posts.length === 0) {
      console.warn("No blog posts found for sitemap");
      return [];
    }

    return posts.map((post) => {
      const publishDate = post.publishedAt
        ? new Date(post.publishedAt).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      return {
        url: `/blog/${String(post.slug)}`,
        lastmod: publishDate,
        changefreq: "monthly",
        priority: "0.8",
      };
    });
  } catch (error) {
    console.error("Error fetching blog routes:", error);
    return [];
  }
}