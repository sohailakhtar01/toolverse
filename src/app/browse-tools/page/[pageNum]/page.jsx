// app/browse-tools/page/[pageNum]/page.jsx (Dynamic Pages)
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import BrowseClient from "@/components/BrowseClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const pageNum = parseInt(params.pageNum);
  
  return {
    title: `Browse AI Tools Directory 2025 | Page ${pageNum}`,
    description: `Browse page ${pageNum} of our AI tools directory. Explore 1200+ AI tools filtered by category, pricing, and rating.`,
    openGraph: {
      title: `Browse AI Tools - Page ${pageNum}`,
      url: `https://thetoolsverse.com/browse-tools/page/${pageNum}`,
    },
    alternates: {
      canonical: `https://thetoolsverse.com/browse-tools/page/${pageNum}`,
    },
    robots: {
      index: pageNum <= 50, // Only index first 50 pages
      follow: true,
    },
  };
}

// 🔥 GENERATE STATIC PATHS FOR FIRST 50 PAGES
export async function generateStaticParams() {
  return Array.from({ length: 50 }, (_, i) => ({
    pageNum: String(i + 2), // Pages 2-51
  }));
}

export default async function BrowseToolsPageNum({ params }) {
  const currentPage = parseInt(params.pageNum);
  const limit = 24;
  
  let tools = [];
  let totalCount = 0;
  let totalPages = 1;

  try {
    await connectDB();
    
    const [toolsData, count] = await Promise.all([
      Tool.find({})
        .sort({ rating: -1 })
        .skip((currentPage - 1) * limit)
        .limit(limit)
        .select('displayName name shortDescription description rating categories pricingType tags slug logo image url logoUrl')
        .lean(),
      Tool.countDocuments({})
    ]);
    
    totalCount = count;
    totalPages = Math.ceil(count / limit);
    
    // Check if page number is valid
    if (currentPage < 1 || currentPage > totalPages) {
      notFound();
    }
    
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
    />
  );
}
