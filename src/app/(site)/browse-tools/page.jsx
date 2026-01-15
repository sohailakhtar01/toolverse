// app/browse-tools/page.jsx
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import BrowseClient from "@/components/BrowseClient";

export const revalidate = 60;

export async function generateMetadata({ searchParams }) {
  const page = parseInt(searchParams.page || "1");
  const query = searchParams.q || "";

  let title = "Browse 4000+ AI Tools Directory 2025 | TheToolsVerse";
  let description = "Explore our complete directory of 4000+ AI tools. Filter by category, pricing, and rating. Updated daily.";

  if (query) {
    title = `Search Results for "${query}" - AI Tools Directory`;
    description = `Find AI tools for ${query}. Browse 4000+ verified tools.`;
  } else if (page > 1) {
    title = `Browse AI Tools Directory - Page ${page} | TheToolsVerse`;
    description = `Page ${page} of our comprehensive AI tools directory.`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://thetoolsverse.com/browse-tools`,
      type: 'website',
    },
    alternates: {
      canonical: query || page > 1 ? null : 'https://thetoolsverse.com/browse-tools',
    },
    robots: {
      index: !query && page <= 10, // Don't index search results
      follow: true,
    },
  };
}

export default async function BrowseToolsPage({ searchParams }) {
  let tools = [];
  let totalCount = 0;
  let totalPages = 1;
  let allCategories = [];

  const currentPage = parseInt(searchParams.page || "1");
  const limit = 24;

  try {
    await connectDB();

    // Get all categories
    allCategories = await Tool.distinct("categories");
    allCategories = allCategories.filter(Boolean).sort();

    // 🔥 ADVANCED SEARCH FILTER
    let filter = {};
    let sortObj = { rating: -1, _id: 1 };
    let projection = {};

    if (searchParams.q?.trim()) {
      const searchTerm = searchParams.q.trim();

      // Multi-field MongoDB text search
      filter = {
        $text: { $search: searchTerm }
      };

      // Add text score for relevance sorting
      projection = {
        score: { $meta: "textScore" },
        displayName: 1,
        name: 1,
        shortDescription: 1,
        longDescription: 1,
        description: 1,
        rating: 1,
        categories: 1,
        pricingType: 1,
        tags: 1,
        features: 1,
        slug: 1,
        logo: 1,
        image: 1,
        logoUrl: 1,
        url: 1 // ✅ ADD THIS
      };

      // Sort by text search relevance score first, then rating
      sortObj = {
        score: { $meta: "textScore" },
        rating: -1,
        _id: 1
      };
    }

    // Apply sort from query params (if not searching)
    if (!searchParams.q) {
      switch (searchParams.sort) {
        case "az":
          sortObj = { name: 1, _id: 1 };
          break;
        case "za":
          sortObj = { name: -1, _id: 1 };
          break;
        case "newest":
          sortObj = { createdAt: -1, _id: 1 };
          break;
        case "rating":
        default:
          sortObj = { rating: -1, _id: 1 };
      }
    }

    // Execute query with text search
    const [toolsData, count] = await Promise.all([
      Tool.find(filter, projection)
        .sort(sortObj)
        .skip((currentPage - 1) * limit)
        .limit(limit)
        .lean(),
      Tool.countDocuments(filter)
    ]);

    totalCount = count;
    totalPages = Math.ceil(count / limit);

    tools = toolsData.map(tool => ({
      ...tool,
      _id: tool._id.toString(),
      name: tool.displayName || tool.name || 'Untitled Tool',
      logo: tool.logo || tool.image || tool.logoUrl || '/default-tool-icon.png',
      shortDescription:
        tool.shortDescription ||
        tool.longDescription?.substring(0, 120) ||
        tool.description?.substring(0, 120) ||
        'Explore this amazing AI tool',
      rating: tool.rating || 4.5,
      categories: Array.isArray(tool.categories) ? tool.categories : [],
      pricingType: tool.pricingType || 'freemium',
      slug: tool.slug || tool._id.toString(),
      tags: Array.isArray(tool.tags) ? tool.tags : [],
      features: Array.isArray(tool.features) ? tool.features : [],
      url: tool.url || null, // ✅ THIS IS THE FIX
    }));


    console.log(`✅ Browse Tools: Found ${tools.length}/${totalCount} tools (Page ${currentPage}/${totalPages})${searchParams.q ? ` for query: "${searchParams.q}"` : ''}`);

  } catch (error) {
    console.error("❌ Browse tools error:", error.message);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Tools Directory",
            "description": "Complete directory of 4000+ AI tools",
            "url": "https://thetoolsverse.com/browse-tools",
            "numberOfItems": totalCount,
          })
        }}
      />

      <BrowseClient
        initialTools={tools}
        allCategories={allCategories}
        currentPage={currentPage}
        totalPages={totalPages}
        totalCount={totalCount}
        searchParams={searchParams}
        pageType="browse"
      />
    </>
  );
}
