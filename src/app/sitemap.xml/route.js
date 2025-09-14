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
      { url: "/free-ai-tools/business", lastmod: today, changefreq: "weekly", priority: "0.8" },
      { url: "/free-ai-tools/students", lastmod: today, changefreq: "weekly", priority: "0.8" },
      
      // ✅ NEW: Submit tool page
      { url: "/submit-tool", lastmod: today, changefreq: "monthly", priority: "0.7" },
    ];

    // ✅ Dynamic routes
    const categoryRoutes = getCategoryRoutes(today);
    const toolRoutes = getToolRoutes(today);
    const blogRoutes = await getBlogRoutes();
    const compareRoutes = getCompareRoutes(today);

    const allRoutes = [
      ...staticRoutes,
      ...categoryRoutes,
      ...toolRoutes,
      ...blogRoutes,
      ...compareRoutes,
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

    // ✅ Enhanced XML with structured data hints
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${routesXml}
</urlset>`;

    // ✅ Enhanced response headers for better SEO
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "X-Robots-Tag": "index, follow",
        "Vary": "Accept-Encoding",
        "Last-Modified": new Date().toUTCString(),
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
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      },
    });
  }
}

// ✅ Enhanced Compare pages function
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

// ✅ Enhanced Category routes with better error handling
function getCategoryRoutes(lastmod) {
  try {
    const categoriesSet = new Set();
    
    if (!toolsData || !Array.isArray(toolsData)) {
      console.warn("⚠️ No tools data available for categories");
      return [];
    }

    toolsData.forEach((tool) => {
      if (tool.category && Array.isArray(tool.category)) {
        tool.category.forEach((cat) => {
          if (typeof cat === 'string' && cat.trim()) {
            const slug = cat
              .toLowerCase()
              .trim()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            
            if (slug.length > 0) {
              categoriesSet.add(slug);
            }
          }
        });
      }
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

// ✅ Enhanced Tool routes with rating-based priority
function getToolRoutes(lastmod) {
  try {
    if (!toolsData || !Array.isArray(toolsData)) {
      console.warn("⚠️ No tools data available");
      return [];
    }

    console.log("🔧 Tools found:", toolsData.length);
    
    return toolsData.map((tool) => {
      // Enhanced priority based on rating and featured status
      let priority = "0.7"; // default
      
      if (tool.isFeatured) priority = "0.9";
      if (tool.rating && tool.rating >= 4.8) priority = "0.9";
      if (tool.rating && tool.rating >= 4.9) priority = "0.95";
      
      return {
        url: `/tools/${tool.slug}`,
        lastmod,
        changefreq: "monthly",
        priority,
      };
    });
  } catch (error) {
    console.error("❌ Error generating tool routes:", error);
    return [];
  }
}

// ✅ Enhanced Blog routes from Sanity
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
