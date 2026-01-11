import {
  Star,
  Filter,
  Grid,
  List,
  TrendingUp,
  Users,
  Clock,
  Search,
  ChevronDown,
  ChevronRight,
  Award,
  Zap,
  Eye,
  BookOpen,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import ToolCard from "@/components/ToolCard";
import dbConnect from "@/lib/mongodb";
import Tool from "@/models/Tool";
import { categoryToSlug } from "@/lib/categorySlug";
import { notFound } from "next/navigation";

// 🔹 HELPER: Flexible category matching (spaces, hyphens, parentheses)
// 🔹 HELPER: Flexible category matching (spaces, hyphens, parentheses, AND SLASHES)
const createFlexibleRegex = (text) => {
  // 1. Normalize text first (remove special chars usually found in slugs)
  const normalized = text
    .toLowerCase()
    .trim();

  // 2. Escape regex special chars (including parentheses)
  const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // 3. The Logic: Replace any space in the search term with a pattern that matches:
  //    - A space (\s)
  //    - A hyphen (-)
  //    - A slash with optional spaces around it (\s*\/\s*)
  const flexiblePattern = escaped.replace(/\s+/g, "(?:[\\s-]|\\s*\\/\\s*)+");

  // 4. Handle parentheses (existing logic)
  const finalPattern = flexiblePattern
    .replace(/\\\(/g, "[\\s-]*\\(")
    .replace(/\\\)/g, "\\)[\\s-]*");

  return new RegExp(`^${finalPattern}$`, "i");
};


// ---------- SEO METADATA (MONGODB-BASED) ----------
export async function generateMetadata({ params }) {
  await dbConnect();

  const rawSlug = decodeURIComponent(params.slug);

  // slug -> readable category name
  const readableCategory = rawSlug
    .replace(/-and-/g, " & ")
    .replace(/-/g, " ")
    .toLowerCase();

  const capitalizedCategory = readableCategory
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Fetch tools in this category from MongoDB
  const categoryRegex = createFlexibleRegex(readableCategory);


  // 1️⃣ Fetch all tools (or paginated)
  const allTools = await Tool.find({});

  // 2️⃣ Filter by slug-matched category
  const toolsInCategory = allTools.filter((tool) =>
    tool.categories?.some(
      (cat) => categoryToSlug(cat) === rawSlug
    )
  );


  const toolCount = toolsInCategory.length;

  const freeToolsCount = toolsInCategory.filter(
    (tool) => tool.pricingType?.toLowerCase() === "free"
  ).length;

  const avgRating =
    toolCount === 0
      ? 0
      : toolsInCategory.reduce((sum, tool) => sum + (tool.rating || 0), 0) /
      toolCount;

  const safeAvgRating = Number.isFinite(avgRating) ? avgRating : 0;

  return {
    // 🔥 COMPETITOR-BEATING TITLE WITH EXACT SEARCH INTENT
    title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025 | Free & Paid Options | TheToolsVerse`,

    // 🔥 ULTRA KEYWORD-RICH DESCRIPTION
    description: `Discover ${toolCount}+ best AI ${readableCategory} tools for 2025. ${freeToolsCount}+ free options, ${safeAvgRating.toFixed(
      1
    )}⭐ avg rating. Compare features, pricing & reviews. Updated daily with latest AI innovations.`,

    // 🔥 COMPREHENSIVE KEYWORDS
    keywords: [
      `best ai ${readableCategory} tools 2025`,
      `ai ${readableCategory} tools`,
      `top ai ${readableCategory} software`,
      `${readableCategory} ai apps`,
      `free ai ${readableCategory} tools`,
      `ai tools for ${readableCategory}`,
      `${readableCategory} automation tools`,
      `ai powered ${readableCategory}`,
      `${readableCategory} ai software list`,
      `${readableCategory} ai directory`,
      `compare ai ${readableCategory} tools`,
      `how to choose ai ${readableCategory} tool`,
      `${readableCategory} ai reviews`,
      `${readableCategory} ai pricing`,
      `${readableCategory} ai features`,
      `toolify ${readableCategory}`,
      `futurepedia ${readableCategory}`,
      `${readableCategory} tools like toolify`,
      `buy ai ${readableCategory} software`,
      `${readableCategory} ai deals`,
      `enterprise ai ${readableCategory}`,
      `small business ai ${readableCategory}`,
    ].join(", "),

    openGraph: {
      title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025 - TheToolsVerse`,
      description: `Compare ${toolCount}+ top AI ${readableCategory} tools. ${freeToolsCount}+ free options, expert reviews, pricing comparison. Find your perfect AI solution.`,
      type: "website",
      url: `https://thetoolsverse.com/categories/${rawSlug}`,
      siteName: "TheToolsVerse - #1 AI Tools Directory",
      images: [
        {
          url: `/og-images/categories/${rawSlug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Best AI ${capitalizedCategory} Tools 2025 - TheToolsVerse`,
        },
        {
          url: "/logo-1200x630.png",
          width: 1200,
          height: 630,
          alt: "TheToolsVerse - AI Tools Directory",
        },
      ],
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025`,
      description: `${freeToolsCount}+ free tools | ${safeAvgRating.toFixed(
        1
      )}⭐ avg rating | Expert reviews & pricing`,
      images: [`/og-images/categories/${rawSlug}.jpg`],
      creator: "@thetoolsverse",
      site: "@thetoolsverse",
    },

    alternates: {
      canonical: `https://thetoolsverse.com/categories/${rawSlug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    other: {
      "article:author": "TheToolsVerse Editorial Team",
      "article:section": `AI ${capitalizedCategory}`,
      "article:tag": `ai,${readableCategory},tools,software,2025`,
      "article:published_time": "2024-01-01T00:00:00Z",
      "article:modified_time": new Date().toISOString(),
      "og:see_also": [
        "https://thetoolsverse.com/categories",
        "https://thetoolsverse.com/free",
      ].join(","),
    },
  };
}

// ---------- PAGE COMPONENT (MONGODB-BASED) ----------
export default async function CategoryPage({ params, searchParams }) {
  await dbConnect();

  const rawSlug = decodeURIComponent(params.slug);
  const sortParam = searchParams.sort || "rating";
  const viewMode = searchParams.view || "grid";
  const priceSegment = params.price?.[0] || "all";
  const priceFilter = priceSegment.toLowerCase();
  const searchQuery = (searchParams.search || "").trim().toLowerCase();

  // slug -> readable category name
  const readableCategory = rawSlug
    .replace(/-and-/g, " & ")
    .replace(/-/g, " ")
    .toLowerCase();

  const capitalizedCategory = readableCategory
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Fetch tools in this category
  const categoryRegex = createFlexibleRegex(readableCategory);

  const allCategoryTools = await Tool.find({
    $or: [
      { categories: { $elemMatch: { $regex: categoryRegex } } },
      { category: { $elemMatch: { $regex: categoryRegex } } },
    ],
  }).lean();


  // Apply price filter (free, freemium, paid, free trial, all)
  let priceFilteredTools =
    priceFilter === "all"
      ? allCategoryTools
      : allCategoryTools.filter(
        (tool) =>
          tool.pricingType?.toLowerCase() === priceFilter.toLowerCase()
      );

  // Apply search filter (within this category)
  if (searchQuery) {
    priceFilteredTools = priceFilteredTools.filter((tool) => {
      const name = (tool.name || "").toLowerCase();
      const desc = (tool.description || "").toLowerCase();
      return name.includes(searchQuery) || desc.includes(searchQuery);
    });
  }

  // Sort tools
  const sortedTools = priceFilteredTools.slice().sort((a, b) => {
    if (sortParam === "name") return (a.name || "").localeCompare(b.name || "");

    if (sortParam === "price") {
      const getPriceValue = (tool) => {
        const type = tool.pricingType?.toLowerCase() || "";
        if (type === "free") return 0;
        if (type === "freemium") return 10;
        if (type === "free trial") return 15;
        if (type === "paid") return 50;
        const priceText = tool.pricing || "";
        const num = parseFloat(priceText.replace(/[^\d.]/g, ""));
        return Number.isNaN(num) ? 999 : num;
      };
      return getPriceValue(a) - getPriceValue(b);
    }

    if (sortParam === "newest") {
      const da = new Date(a.dateAdded || "2024-01-01");
      const db = new Date(b.dateAdded || "2024-01-01");
      return db - da;
    }

    // default: rating desc
    return (b.rating || 0) - (a.rating || 0);
  });
  const normalizedTools = sortedTools.map(tool => ({
    ...tool,
    name: tool.displayName || tool.name || "Untitled Tool",
  }));


  // Stats for UI + SEO
  const stats = {
    total: allCategoryTools.length,
    free: allCategoryTools.filter(
      (tool) => tool.pricingType?.toLowerCase() === "free"
    ).length,
    freemium: allCategoryTools.filter(
      (tool) => tool.pricingType?.toLowerCase() === "freemium"
    ).length,
    paid: allCategoryTools.filter(
      (tool) => tool.pricingType?.toLowerCase() === "paid"
    ).length,
    freeTrial: allCategoryTools.filter(
      (tool) => tool.pricingType?.toLowerCase() === "free trial"
    ).length,
    avgRating:
      allCategoryTools.reduce(
        (sum, tool) => sum + (tool.rating || 0),
        0
      ) / (allCategoryTools.length || 1),
    topRated: allCategoryTools.filter(
      (tool) => (tool.rating || 0) >= 4.5
    ).length,
  };

  const safeAvg = Number.isFinite(stats.avgRating) ? stats.avgRating : 0;

  // Popular tools in category (top 3 by rating)
  const popularTools = allCategoryTools
    .slice()
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  // Related categories
  const relatedCategories = [
    "Writing & Content",
    "Design & Graphics",
    "productivity",
    "Marketing & Advertising",
    "Coding & Development",
    "Video & Animation",
    "Business & Productivity",
    "Education & Learning",
  ]
    .filter((cat) => cat.toLowerCase() !== readableCategory.toLowerCase())
    .slice(0, 4);

  // 🔥 ENHANCED JSON-LD STRUCTURED DATA
  const jsonLdSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Best AI ${capitalizedCategory} Tools 2025`,
      description: `Complete directory of ${stats.total}+ best AI ${readableCategory} tools for 2025 with reviews, pricing, and features`,
      url: `https://thetoolsverse.com/categories/${rawSlug}`,
      mainEntity: {
        "@type": "ItemList",
        name: `AI ${capitalizedCategory} Tools Directory`,
        description: `Curated list of ${stats.total}+ AI ${readableCategory} tools`,
        numberOfItems: stats.total,
        itemListElement: sortedTools.slice(0, 20).map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: tool.name,
            description: tool.description,
            url: `https://thetoolsverse.com/tools/${tool.slug}`,
            applicationCategory: `AI ${capitalizedCategory}`,
            operatingSystem: "Web-based",
            offers: {
              "@type": "Offer",
              price:
                tool.pricingType?.toLowerCase() === "free"
                  ? "0"
                  : tool.pricing?.match(/\d+(\.\d+)?/)?.[0] || "29.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            author: {
              "@type": "Organization",
              name: "TheToolsVerse",
            },
          },
        })),
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://thetoolsverse.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Categories",
            item: "https://thetoolsverse.com/categories",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `AI ${capitalizedCategory}`,
            item: `https://thetoolsverse.com/categories/${rawSlug}`,
          },
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "TheToolsVerse",
        url: "https://thetoolsverse.com",
        logo: {
          "@type": "ImageObject",
          url: "https://thetoolsverse.com/logo.png",
        },
      },
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What are the best AI ${readableCategory} tools in 2025?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The top AI ${readableCategory} tools include ${popularTools
              .map((t) => t.name)
              .join(", ")}. Our directory features ${stats.total}+ carefully curated AI ${readableCategory} tools with ${safeAvg.toFixed(
                1
              )} average rating, including ${stats.free} free options.`,
          },
        },
        {
          "@type": "Question",
          name: `Are there free AI ${readableCategory} tools available?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes! We've found ${stats.free} free AI ${readableCategory} tools out of ${stats.total} total options. Many offer generous free tiers or freemium models perfect for individuals and small teams.`,
          },
        },
        {
          "@type": "Question",
          name: `How do I choose the best AI ${readableCategory} tool for my needs?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Consider your specific requirements, budget, required features, and integration needs. Our directory includes ${stats.topRated} tools with 4.5+ star ratings. Read user reviews, compare features, and try free trials when available.`,
          },
        },
        {
          "@type": "Question",
          name: `What's the average cost of AI ${readableCategory} tools?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `AI ${readableCategory} tools range from free to enterprise pricing. We feature ${stats.free} completely free tools and ${stats.paid} paid options. Most premium tools start around $10-30/month with enterprise solutions available.`,
          },
        },
      ],
    },

    // WebSite Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "TheToolsVerse",
      url: "https://thetoolsverse.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://thetoolsverse.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen mt-15 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* HERO + BADGE */}
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
          {/* Top Nav + Badge */}
          <div className="absolute top-0 left-0 right-0 z-20 flex flex-col md:flex-row items-start md:items-center justify-between px-4 pt-4 md:px-8 md:pt-8 gap-y-4 md:gap-y-0">

            {/* 1. Home Navigation */}
            <nav className="text-sm z-10">
              <a
                href="/"
                className="text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors bg-white/50 backdrop-blur-sm md:bg-transparent rounded-full px-2 py-1 md:px-0 md:py-0"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Home
              </a>
            </nav>

            {/* 2. Center Badge */}
            <div className="
    relative w-full md:w-auto flex justify-center 
    md:absolute md:left-1/2 md:-translate-x-1/2
  ">
              <div className="
      inline-flex items-center  justify-center gap-2 sm:gap-3 
      px-3 py-1.5 sm:px-4 sm:py-2 
      rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 
      border border-blue-200 shadow-sm
      max-w-full
    ">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700 animate-pulse flex-shrink-0" />

                <span className="text-blue-700 font-medium text-xs sm:text-sm truncate">
                  {stats.total}+ AI {capitalizedCategory} <span className="hidden xs:inline">Tools • 2025</span>
                </span>

                <span className="flex-shrink-0 px-1.5 py-0.5 sm:px-2 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-bold">
                  {stats.free} Free
                </span>
              </div>
            </div>

          </div>

          {/* Center Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 sm:mt-20 mt-30">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-5xl">
              The Best AI{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                {capitalizedCategory}
              </span>{" "}
              Tools of 2025
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-gray-700 font-medium max-w-2xl">
              {stats.total}+ Curated and Verified AI {capitalizedCategory} Software
              Solutions
            </p>

            <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80" />

            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Explore{" "}
              <strong className="text-gray-800">
                {stats.total}+ top-rated AI {readableCategory} tools
              </strong>{" "}
              built for professionals and creators in 2025. Compare reviews, pricing,
              and features — including {stats.free} free and {stats.paid} premium
              options trusted by industry leaders.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 mt-6 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm shadow-sm">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <span>{safeAvg.toFixed(1)} Average Rating from Verified Users</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="w-full flex justify-center mt-8 mb-10 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-4xl">
              {[
                {
                  label: "AI Tools",
                  value: `${stats.total}+`,
                  icon: <BarChart3 className="w-4 h-4 text-blue-600" />,
                },
                {
                  label: "Free Options",
                  value: stats.free,
                  icon: <CheckCircle className="w-4 h-4 text-emerald-600" />,
                },
                {
                  label: "Avg Rating",
                  value: safeAvg.toFixed(1),
                  icon: (
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                  ),
                },
                {
                  label: "Top Rated",
                  value: stats.topRated,
                  icon: <Award className="w-4 h-4 text-purple-600" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg py-3 sm:py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-1.5 text-base sm:text-lg font-semibold text-gray-900">
                    {item.icon}
                    {item.value}
                  </div>
                  <div className="text-[11px] sm:text-sm text-gray-600 font-medium mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Primary CTA - Browse Tools */}
            <a
              href="#tools-directory"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%] before:bg-[position:200%_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0] hover:before:duration-[1500ms]"
            >
              <Eye className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Browse {stats.total}+ Tools</span>
            </a>

            {/* Secondary CTA - Free Tools */}
            <a
              href="#free-tools"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%] before:bg-[position:200%_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0] hover:before:duration-[1500ms]"
            >
              <Zap className="w-5 h-5 relative z-10" />
              <span className="relative z-10">See {stats.free} Free Tools</span>
            </a>
          </div>

        </div>

        {/* Sticky Quick Nav */}
        <div className="sticky top-8 z-30 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 sm:py-3">
              <div className="flex justify-center w-full mx-auto mt-8">
                <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-hide bg-white/70 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-md">
                  <span className="hidden sm:inline text-sm font-medium text-gray-700 whitespace-nowrap">
                    Jump to:
                  </span>

                  {[
                    { href: "#tools-directory", label: "Directory" },
                    { href: "#popular-picks", label: "Popular" },
                    { href: "#free-tools", label: "Free Tools" },
                    { href: "#buying-guide", label: "Guide" },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-blue-50 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-md hover:shadow-blue-100 hover:text-blue-700 transition-all duration-300 whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden xs:flex items-center gap-1.5 sm:gap-2 text-gray-500 ml-3 flex-shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Updated Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Picks Section */}
        <section id="popular-picks" className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-gray-600" />
              <span>Popular {capitalizedCategory} AI Tools</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-lg mx-auto leading-relaxed">
              Real favorites based on ratings, usage, and community feedback.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, i) => (
              <article
                key={tool._id.toString()}
                className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <img
                    src={tool.logo || tool.image}
                    alt={tool.name}
                    className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 p-1 object-contain flex-shrink-0"
                    loading="lazy"
                    width="48"
                    height="48"
                  />

                  {/* Body */}
                  <div className="flex-1 min-w-0">
                    {/* Name */}
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {tool.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed line-clamp-2">
                      {tool.description?.slice(0, 90) || tool.shortDescription}...
                    </p>

                    {/* Rating + Price */}
                    <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                      <div className="inline-flex items-center gap-1 text-sm font-medium text-amber-600">
                        <Star className="w-4 h-4 fill-current text-amber-500" />
                        <span>{tool.rating?.toFixed(1) || "4.5"}</span>
                      </div>
                      <div className="px-3 py-1 bg-gray-50 text-gray-700 border border-gray-200 rounded-full text-xs font-medium">
                        {tool.pricingType || "Free"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rank Badge */}
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                  #{i + 1}
                </div>

                {/* Full link overlay */}
                <a
                  href={`/tools/${tool.slug}`}
                  className="absolute inset-0 rounded-xl cursor-pointer"
                  aria-label={`Visit ${tool.name}`}
                />
              </article>
            ))}
          </div>

          {/* Optional extra link hint */}
          <div className="text-center mt-12">
            <a
              href={`/categories/${rawSlug}`}
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:scale-105 transition-all cursor-pointer"
            >
              View full {capitalizedCategory} directory <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Tools Directory Section */}
        <main
          id="tools-directory"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="text-center -mt-12 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete AI {capitalizedCategory} Tools Directory
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive list of {stats.total} AI {readableCategory} tools with
              detailed reviews, pricing information, and feature comparisons
            </p>
          </div>

          {/* Filters */}
          <div className="relative z-10 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm">
            {/* Search within category */}
            <form
              method="get"
              className="w-full sm:flex-1 min-w-[240px] sm:min-w-[280px] sm:max-w-[420px] relative"
            >
              <input
                type="text"
                name="search"
                placeholder={`Search AI ${capitalizedCategory} tools...`}
                defaultValue={searchParams.search || ""}
                className="w-full pl-11 pr-4 py-3 border border-purple-400 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-700 text-sm sm:text-base bg-white"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>

            {/* Pricing buttons */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 w-full sm:w-auto">
              {["all", "Free", "Freemium", "Paid", "Free Trial"].map((type) => {
                const typeSlug = type.toLowerCase().replace(/\s+/g, "-");
                const isActive = priceFilter === typeSlug;

                return (
                  <a
                    key={type}
                    href={
                      typeSlug === "all"
                        ? `/categories/${rawSlug}`
                        : `/categories/${rawSlug}/${typeSlug}`
                    }
                    className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium border transition-all duration-200 ${isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:shadow-md hover:bg-purple-50"
                      }`}
                  >
                    {type === "all" ? "All" : type}
                  </a>
                );
              })}
            </div>

            {/* Sort */}
            <form method="get" action="#tools-directory" className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-md font-medium text-gray-700"
              >
                Sort:
              </label>

              <select
                id="sort"
                name="sort"
                defaultValue={sortParam}
                className="px-3 py-2 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-purple-500 bg-white text-sm sm:text-base"
              >
                <option value="rating">Rating</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="newest">Newest</option>
              </select>

              <button
                type="submit"
                className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </form>
          </div>

          {/* Tools Grid / Empty State */}
          {sortedTools.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl shadow-lg mt-8">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or browse all AI {readableCategory} tools
              </p>
              <a
                href={`/categories/${rawSlug}`}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-700"
              >
                Clear Filters
              </a>
            </div>
          ) : (
            <>
              <div
                className={`grid gap-6 mt-6 lg:gap-8 ${viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
                  }`}
                role="list"
                aria-label={`AI ${capitalizedCategory} tools`}
              >{normalizedTools.map((tool, index) => (
                <div key={tool._id.toString()} role="listitem">
                  <ToolCard
                    tool={{
                      ...tool,
                      _id: tool._id.toString(),
                    }}
                    viewMode={viewMode}
                  />
                </div>
              ))}


              </div>
            </>
          )}
        </main>

        {/* Free Tools Section */}
        {stats.free > 0 && (
          <section id="free-tools" className="bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Section intro */}
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6 text-green-600" />
                  Free AI Tools for {capitalizedCategory}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
                  Hand-picked tools you can explore without opening your wallet. Great features. No cost barrier.
                </p>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCategoryTools
                  .filter(tool => tool.pricingType?.toLowerCase() === "free")
                  .slice(0, 6)
                  .map((tool, i) => (
                    <div
                      key={tool._id.toString()}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">

                        {/* Tool icon / logo */}
                        <img
                          src={tool.image || tool.logo}
                          alt={tool.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-gray-100"
                          loading="lazy"
                        />

                        {/* Card body */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">
                            {tool.name}
                          </h3>

                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {tool.description?.slice(0, 80) || tool.shortDescription}...
                          </p>

                          {/* Price + CTA */}
                          <div className="flex items-center justify-between mt-4 flex-wrap gap-2">

                            {/* Free cost pill */}
                            <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 border border-green-300 rounded-full text-xs font-semibold">
                              <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                              <span>Free</span>
                              <span className="text-gray-400">|</span>
                              <span>$0</span>
                            </div>

                            {/* CTA */}
                            <a
                              href={`/tools/${tool.slug}`}
                              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                            >
                              Try it now <ArrowRight className="w-4 h-4" />
                            </a>

                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
              </div>

              {/* Mini footer line */}
              <div className="text-center mt-10 text-sm text-gray-500">
                Showing {Math.min(6, stats.free)} of {stats.free} free tools. More are waiting up in the directory.
              </div>

            </div>
          </section>
        )}

        {/* Buying Guide / SEO Content */}
        <section
          id="buying-guide"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="prose prose-lg prose-blue max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                The Complete Guide to AI {capitalizedCategory} Tools in 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about choosing, using, and maximizing AI{" "}
                {readableCategory} tools for your business, projects, and creative
                workflow.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 mb-12 border border-blue-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 sm:gap-3 leading-snug">
                <BarChart3 className="w-6 h-6 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                AI {capitalizedCategory} Market Overview 2025
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                    {stats.total}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Available Tools
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                    {stats.total
                      ? ((stats.free / stats.total) * 100).toFixed(0)
                      : 0}
                    %
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Offer Free Plans
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">
                    {safeAvg.toFixed(1)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Average Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                    {stats.total
                      ? ((stats.topRated / stats.total) * 100).toFixed(0)
                      : 0}
                    %
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Top Rated (4.5+)
                  </div>
                </div>
              </div>
            </div>

            {/* What Are AI Tools */}
            <h3
              id="what-are-ai-tools"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 leading-snug"
            >
              <Target className="w-5 h-5 sm:w-6 sm:h-7 text-purple-600 flex-shrink-0" />
              What Are AI {capitalizedCategory} Tools?
            </h3>

            <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              AI {readableCategory} tools are intelligent software applications that
              leverage artificial intelligence, machine learning, and natural
              language processing to revolutionize how we approach{" "}
              {readableCategory} tasks. Unlike traditional software that follows
              pre-programmed rules, these AI-powered solutions can learn, adapt, and
              make intelligent decisions based on data patterns and user behavior.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              In 2025, AI {readableCategory} tools have evolved beyond simple
              automation. They now offer predictive capabilities, contextual
              understanding, and personalized experiences that dramatically improve
              efficiency, creativity, and results. Our directory features{" "}
              <strong>{stats.total}+ carefully vetted AI {readableCategory} tools</strong>,
              each tested and reviewed by our expert team.
            </p>

            {/* Why Use AI Tools */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7 text-orange-600" />
              Why AI {capitalizedCategory} Tools Are Essential in 2025
            </h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Intelligent Automation
                  </h4>
                  <p className="text-gray-700 mb-4">
                    AI doesn't just automate—it makes smart decisions, adapts to your
                    workflow, and continuously improves performance based on usage
                    patterns.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Predictive Capabilities
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Advanced algorithms predict trends, suggest optimizations, and
                    prevent issues before they occur, giving you a competitive
                    advantage.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Natural Language Processing
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Modern AI tools understand human language, making complex{" "}
                    {readableCategory} tasks as simple as having a conversation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Continuous Learning
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Unlike static software, AI tools improve with use, becoming more
                    accurate and efficient as they process more of your data.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 leading-snug">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-7 text-blue-600 flex-shrink-0" />
              How to Choose the Perfect AI {capitalizedCategory} Tool
            </h3>

            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              With {stats.total}+ options available, selecting the right AI{" "}
              {readableCategory} tool requires a strategic approach. Follow this
              comprehensive evaluation framework:
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200">
              <ol className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Define Your AI Requirements",
                    desc: `Identify specific tasks you want AI to handle: content generation, data analysis, process automation, or creative assistance. Be specific about your AI needs rather than general automation.`,
                  },
                  {
                    title: "Evaluate AI Maturity",
                    desc: `Look for proven AI capabilities with transparent model information, training data quality, and performance metrics. Avoid tools with AI marketing claims but limited actual intelligence.`,
                  },
                  {
                    title: "Test AI Accuracy",
                    desc: `Use free trials to test the AI's performance with your specific ${readableCategory} tasks. AI accuracy can vary significantly based on use case and data type.`,
                  },
                  {
                    title: "Consider Integration & Scalability",
                    desc: `Ensure the AI tool integrates with your existing workflow and can scale as your needs grow. The best AI tools become more valuable as they process more data.`,
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Essential Features */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-yellow-600" />
              Essential Features in Modern AI {capitalizedCategory} Tools
            </h3>
            <p className="text-gray-700 mb-6">
              When evaluating the AI {readableCategory} tools in our directory,
              prioritize these cutting-edge capabilities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Machine Learning Integration
                  </h4>
                </div>
                <p className="text-gray-700">
                  Advanced ML algorithms that learn from your usage patterns and
                  provide increasingly personalized recommendations and automation.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Predictive Analytics
                  </h4>
                </div>
                <p className="text-gray-700">
                  AI-powered forecasting that anticipates outcomes, suggests
                  optimizations, and helps make data-driven decisions proactively.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Conversational AI
                  </h4>
                </div>
                <p className="text-gray-700">
                  Natural language interfaces that allow complex interactions through
                  simple commands, questions, and conversational flows.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Real-time Optimization
                  </h4>
                </div>
                <p className="text-gray-700">
                  Continuous performance monitoring and automatic adjustments based
                  on real-time feedback and changing conditions.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Eye className="w-7 h-7 text-indigo-600" />
              Frequently Asked Questions
            </h3>

            <div className="space-y-6 mb-12">
              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  What makes AI {readableCategory} tools better than traditional
                  software?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    AI {readableCategory} tools offer intelligent automation,
                    predictive capabilities, and continuous learning that traditional
                    software lacks. They adapt to your specific needs, make smart
                    decisions autonomously, and improve over time. Our top-rated
                    options include{" "}
                    <strong>
                      {popularTools.map((t) => t.name).join(", ")}
                    </strong>
                    , each offering unique AI advantages.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Are there reliable free AI {readableCategory} tools available?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Our directory includes{" "}
                    <strong>
                      {stats.free} completely free AI {readableCategory} tools
                    </strong>{" "}
                    that offer substantial functionality without cost. Many premium
                    tools also provide generous free tiers with core AI features,
                    perfect for individuals and small teams starting their AI
                    journey.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  How accurate are AI {readableCategory} tools in 2025?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Modern AI {readableCategory} tools achieve 85-95% accuracy for
                    most common tasks, with top-tier solutions reaching even higher
                    performance. Our directory maintains a{" "}
                    <strong>{safeAvg.toFixed(1)}/5 average rating</strong> with{" "}
                    {stats.topRated} tools rated 4.5+ stars. Accuracy improves as AI
                    learns from your specific data and usage patterns.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Do I need technical expertise to use AI {readableCategory} tools?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Most modern AI {readableCategory} tools are designed for
                    non-technical users with intuitive interfaces, conversational AI,
                    and automated setup processes. The tools in our directory are
                    selected for user-friendliness and typically require no
                    programming knowledge. Many offer guided onboarding and
                    comprehensive support resources.
                  </p>
                </div>
              </details>
            </div>

            {/* Conclusion */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-green-600" />
              Start Your AI {capitalizedCategory} Journey Today
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              2025 represents a watershed moment for AI {readableCategory} tools.
              The technology has matured from experimental curiosity to essential
              business infrastructure. The <strong>{stats.total} AI {readableCategory} tools</strong> in
              our curated directory represent the cutting edge of what's possible
              when artificial intelligence meets {readableCategory} expertise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you choose from our {stats.free} free options to get started
              or invest in a premium AI solution, the key is beginning your AI
              transformation today. The tools are proven, the results are
              measurable, and the competitive advantage is significant. Explore our
              directory above and discover your perfect AI {readableCategory} partner.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Transform Your {capitalizedCategory} Workflow?
              </h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals already using AI to revolutionize
                their {readableCategory} processes.
              </p>
              <a
                href="#tools-directory"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-101 transition-all shadow-lg cursor-pointer"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse {stats.total}+ AI Tools Now
              </a>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore More AI Tool Categories
              </h2>
              <p className="text-lg text-gray-600">
                Discover AI tools across different categories to build your complete
                AI toolkit
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCategories.map((category) => (
                <a
                  key={category}
                  href={`/categories/${category
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 capitalize">
                      AI {category} Tools
                    </h3>
                    <p className="text-sm text-gray-600">
                      Explore {category} AI solutions
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-3 text-blue-600 font-medium text-sm">
                      Browse Tools <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Discover Your Perfect AI {capitalizedCategory} Tool?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals discovering AI tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tools-directory"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-50 transform transition-all shadow-lg cursor-pointer"
              >
                <Eye className="w-5 h-5 mr-2" />
                Browse All {stats.total} Tools
              </a>
              <a
                href="/submit-tool"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all cursor-pointer backdrop-blur"
              >
                <Star className="w-5 h-5 mr-2" />
                Submit Your Tool
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}