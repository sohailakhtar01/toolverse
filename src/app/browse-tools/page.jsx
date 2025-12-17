// app/browse-tools/page.jsx (Page 1)
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import BrowseClient from "@/components/BrowseClient";

export const revalidate = 60;

export const metadata = {
  title: 'Browse 1200+ Best AI Tools Directory 2025 | Page 1',
  description: 'Browse page 1 of our AI tools directory. Explore 1200+ AI tools filtered by category, pricing, and rating.',
  openGraph: {
    title: 'Browse AI Tools Directory - Page 1',
    url: 'https://thetoolsverse.com/browse-tools',
  },
  alternates: {
    canonical: 'https://thetoolsverse.com/browse-tools',
  },
};

export default async function BrowseToolsPage() {
  let tools = [];
  let totalCount = 0;
  let totalPages = 1;
  const currentPage = 1;
  const limit = 24; // 24 tools per page

let allCategories = [];

try {
  await connectDB();

  // ✅ ADD THIS
  try {
    allCategories = await Tool.distinct("categories");
    allCategories = allCategories.sort();
  } catch (err) {
    console.error("❌ Category fetch failed:", err.message);
  }

  const [toolsData, count] = await Promise.all([
    Tool.find({})
      .sort({ rating: -1 })
      .limit(limit)
      .select('displayName name shortDescription description rating categories pricingType tags slug logo image url logoUrl')
      .lean(),
    Tool.countDocuments({})
  ]);

  totalCount = count;
  totalPages = Math.ceil(count / limit);

  tools = toolsData.map(tool => ({
    ...tool,
    _id: tool._id.toString(),
    name: tool.displayName || tool.name,
    logo: tool.logo || tool.image || tool.logoUrl || '/default-tool-icon.png',
    shortDescription: tool.shortDescription || tool.description?.substring(0, 120) || 'Explore this amazing AI tool',
    rating: tool.rating || 4.5,
    categories: Array.isArray(tool.categories) ? tool.categories : [],
    pricingType: tool.pricingType || 'freemium',
  }));

} catch (error) {
  console.error("❌ Browse page error:", error.message);
}


  return (
  <BrowseClient 
    tools={tools}
    currentPage={currentPage}
    totalPages={totalPages}
    totalCount={totalCount}
    allCategories={allCategories}
  />
);

}
