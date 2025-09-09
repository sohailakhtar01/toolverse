// app/sitemap.xml/route.js
import toolsData from '@/data/tools.js';
import { getAllPosts } from '@/lib/sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET() {
  const baseUrl = "https://www.thetoolsverse.com";
  const today = new Date().toISOString().split('T')[0];

  console.log("🚀 Sitemap base URL:", baseUrl);

  try {
    // ✅ Static routes (including your missing pages)
    const staticRoutes = [
      { url: "", lastmod: today, changefreq: "daily", priority: "1.0" },
      { url: "/about", lastmod: today, changefreq: "monthly", priority: "0.8" },
      { url: "/how-it-works", lastmod: today, changefreq: "monthly", priority: "0.7" },
      { url: "/browse-tools", lastmod: today, changefreq: "weekly", priority: "0.9" },
      { url: "/featured", lastmod: today, changefreq: "weekly", priority: "0.8" },
      { url: "/blog", lastmod: today, changefreq: "daily", priority: "0.9" },
      
      // ✅ NEW: Free AI Tools pages
      { url: "/free-ai-tools", lastmod: today, changefreq: "weekly", priority: "0.9" },
      { url: "/free-ai-tools/business", lastmod: today, changefreq: "weekly", priority: "0.8" },
      { url: "/free-ai-tools/students", lastmod: today, changefreq: "weekly", priority: "0.8" },
      
      // ✅ NEW: Submit tool page
      { url: "/submit-tool", lastmod: today, changefreq: "monthly", priority: "0.7" },
    ];

    // ✅ Dynamic routes
    const categoryRoutes = getCategoryRoutes(today);
    const toolRoutes = getToolRoutes(today);
    const blogRoutes = await getBlogRoutes();
    const compareRoutes = getCompareRoutes(today); // ✅ NEW: Compare pages

    const allRoutes = [
      ...staticRoutes,
      ...categoryRoutes,
      ...toolRoutes,
      ...blogRoutes,
      ...compareRoutes, // ✅ Add compare routes
    ];

    console.log("🔍 Total routes:", allRoutes.length);
    
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
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);

    // ✅ Enhanced fallback with all important pages
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
  <url>
    <loc>${baseUrl}/free-ai-tools/business</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/free-ai-tools/students</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/submit-tool</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    return new Response(fallbackXml, {
      headers: { 
        "Content-Type": "application/xml",
        "Cache-Control": "no-cache"
      },
    });
  }
}

// ✅ NEW: Compare pages function
function getCompareRoutes(lastmod) {
  const comparePages = [
    "chatgpt-vs-bard",
    "chatgpt-vs-claude", 
    "chatgpt-vs-copilot",
    "midjourney-vs-dalle",
    "midjourney-vs-stable-diffusion"
  ];

  console.log("⚖️ Compare pages found:", comparePages.length);

  return comparePages.map((slug) => ({
    url: `/compare/${slug}`,
    lastmod,
    changefreq: "monthly",
    priority: "0.8",
  }));
}

// ✅ Category routes (unchanged)
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

    console.log("📂 Categories found:", Array.from(categoriesSet));

    return Array.from(categoriesSet).map((slug) => ({
      url: `/categories/${slug}`,
      lastmod,
      changefreq: "weekly",
      priority: "0.8",
    }));
  } catch (error) {
    console.error("❌ Error generating category routes:", error);
    return [];
  }
}

// ✅ Tool routes (unchanged)
function getToolRoutes(lastmod) {
  try {
    console.log("🔧 Tools found:", toolsData.length);
    
    return toolsData.map((tool) => ({
      url: `/tools/${tool.slug}`,
      lastmod,
      changefreq: "monthly",
      priority: tool.isFeatured ? "0.9" : "0.7",
    }));
  } catch (error) {
    console.error("❌ Error generating tool routes:", error);
    return [];
  }
}

// ✅ Blog routes from Sanity (unchanged)
async function getBlogRoutes() {
  try {
    const posts = await getAllPosts();

    if (!posts || posts.length === 0) {
      console.warn("⚠️ No blog posts found for sitemap");
      return [];
    }

    console.log("📝 Blog posts found:", posts.length);

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
    console.error("❌ Error fetching blog routes:", error);
    return [];
  }
}
