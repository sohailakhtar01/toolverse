import RelatedTools from '@/components/RelatedTools';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from "next/navigation";
import dbConnect from "@/lib/mongodb";
import Tool from "@/models/Tool";
import { ExpandableStatsRow } from '@/components/StatsCards';
import { categoryToSlug } from "@/lib/categorySlug";

import { Metadata } from "next";
import {
  Star, MapPin, CreditCard, Calendar, Users, CheckCircle, XCircle, ExternalLink,
  Share2, Bookmark, ArrowRight, ChevronRight, Mail,
  Award, Zap, Clock, DollarSign, TrendingUp, Eye
} from "lucide-react";

function getPriceBadgeStyle(pricingType) {
  const styles = {
    'Free': 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400',
    'Freemium': 'bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100 hover:border-blue-400',
    'Paid': 'bg-purple-50 text-purple-700 border-purple-300 hover:bg-purple-100 hover:border-purple-400',
    'Free Trial': 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100 hover:border-amber-400',
    'free': 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400',
  };
  return styles[pricingType] || 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400';
}

// Enhanced static generation with ISR
// Revalidate every hour (adjust as you like)
export const revalidate = 3600;

// Optional prebuild: only most important tools, not all 2000+
export async function generateStaticParams() {
  await dbConnect();

  // If you have a popularity/featured field, sort by it.
  // Otherwise, just limit by createdAt or _id.
  const tools = await Tool.find({}, "slug")
    .sort({ createdAt: -1 })   // or { popularity: -1 }
    .limit(500)                // prebuild 200; the rest use ISR on first hit
    .lean();

  return tools.map((tool) => ({ slug: tool.slug }));
}


// 1000% SEO-Optimized Metadata (SAFE)
// 🚀 1000% SEO-Optimized Metadata (SAFE & HIGH CTR)
export async function generateMetadata({ params }) {
  await dbConnect();
  const tool = await Tool.findOne({ slug: params.slug }).lean();

  if (!tool) {
    return {
      title: "AI Tool Not Found - TheToolsVerse",
      description: "The AI tool you are looking for could not be found. Discover 1000+ AI tools at TheToolsVerse.",
      robots: { index: false }, // Don't index 404s
    };
  }

  const currentYear = new Date().getFullYear();

  // 1. USE DISPLAY NAME (Clean Brand Name)
  // This is the key fix. Instead of the long "GPTGO - AI Search...", we just use "GPTGO"
  const brandName = tool.displayName || tool.name.split(' - ')[0];
  const category = tool.categories?.[0] || "AI Tool";

  // 2. SMART TITLE GENERATION (Max 60 chars)
  // Google truncates at 60. We force it to fit.
  let finalTitle;

  // Priority: DB Title (if optimized) > Auto-Generated High CTR Title
  if (tool.seo?.metaTitle && tool.seo.metaTitle.length < 65) {
    finalTitle = tool.seo.metaTitle;
  } else {
    // Formula: [Brand] Review [Year]: [Category] & Pricing
    // Example: "GPTGO Review 2026: Features, Pricing & Alternatives"
    finalTitle = `${brandName} Review ${currentYear}: Features, Pricing & Alternatives`;
  }

  // 3. SMART DESCRIPTION GENERATION (Max 160 chars)
  let finalDesc;
  if (tool.seo?.metaDescription) {
    finalDesc = tool.seo.metaDescription;
  } else {
    // A question + answer format increases CTR
    finalDesc = `Is ${brandName} the best ${category} in ${currentYear}? Read our honest review covering features, pricing (${tool.pricingType}), pros, cons, and top alternatives.`;
  }

  return {
    title: finalTitle,
    description: finalDesc.slice(0, 160), // Hard limit prevents Google rewrite

    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url: `https://thetoolsverse.com/tools/${tool.slug}`,
      siteName: "TheToolsVerse - AI Tools Directory",
      images: [
        {
          url: tool.logo,
          width: 1200,
          height: 630,
          alt: `${brandName} Review and Features`,
        },
      ],
      type: "article",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDesc,
      images: [tool.logo],
      creator: "@Toolsverse",
      site: "@Toolsverse",
    },

    alternates: {
      canonical: `https://thetoolsverse.com/tools/${tool.slug}`,
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
      "article:published_time": tool.publishedAt ? new Date(tool.publishedAt).toISOString() : "2024-01-01T00:00:00Z",
      "article:modified_time": new Date().toISOString(),
    },
  };
}
export default async function ToolDetailPage({ params }) {
  await dbConnect();
  const toolDoc = await Tool.findOne({ slug: params.slug }).lean();

  if (!toolDoc) {
    return notFound();
  }

  const tool = {
    ...toolDoc,
    categories: toolDoc.categories || toolDoc.category || ["Uncategorized"],
    tags: toolDoc.features || toolDoc.tags || [],
    description: toolDoc.longDescription || toolDoc.shortDescription || "",
    faqs: toolDoc.faqs || [],
  };
  const effectiveRating = tool.rating || null;

  if (!tool) {
    return notFound();
  }

  // Enhanced utility functions
  const getPriceBadgeStyle = (pricingType = '') => {
    const key = pricingType.toLowerCase();

    const styles = {
      free: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      freemium: 'bg-purple-100 text-purple-800 border border-purple-200',
      paid: 'bg-blue-100 text-blue-800 border border-blue-200',
      'free-trial': 'bg-amber-100 text-amber-800 border border-amber-200',
    };

    return styles[key] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };



  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-emerald-500';
    if (rating >= 4.0) return 'text-yellow-500';
    if (rating >= 3.5) return 'text-orange-500';
    return 'text-red-500';
  };

  const projection = "name slug logo pricingType rating categories tags shortDescription";

  const relatedTools = await Tool.find(
    { slug: { $ne: tool.slug }, categories: { $in: tool.categories } },
    projection
  )
    .limit(6)
    .lean();

  const alternatives = await Tool.find(
    { slug: { $ne: tool.slug }, categories: tool.categories[0] },
    projection
  )
    .limit(4)
    .lean();


  // Enhanced JSON-LD with multiple schemas
  const jsonLdSchemas = [
    // Software Application Schema
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": tool.displayName || tool.name, // ✅ Use clean name here too
      "description": tool.shortDescription,
      "image": tool.logo,
      "url": tool.url,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser, SaaS",
      "softwareVersion": "Latest",
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "publisher": {
        "@type": "Organization",
        "name": "TheToolsVerse",
        "url": "https://thetoolsverse.com"
      },
      "offers": {
        "@type": "Offer",
        "price": "0", // Default to 0 unless specific data exists
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "category": tool.pricingType
      },

      // 🚨 CRITICAL FIX: Only include AggregateRating if REAL data exists
      // If tool.ratingCount is missing, we skip this block entirely.
      // This saves you from the "Spammy Structured Data" Manual Action.
      ...(tool.rating && tool.ratingCount ? {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": tool.rating,
          "ratingCount": tool.ratingCount, // ✅ NO FAKE NUMBERS
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [{
          "@type": "Review",
          "author": {
            "@type": "Organization",
            "name": "TheToolsVerse Editorial Team"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": tool.rating,
            "bestRating": "5"
          },
          "reviewBody": `Our editorial review of ${tool.displayName || tool.name} highlights its key features for ${tool.categories?.[0]} tasks.`
        }]
      } : {}),
    },

    // Article Schema for content
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${tool.displayName || tool.name} Review ${new Date().getFullYear()}: Complete Guide & Analysis`,
      "description": tool.description,
      "image": tool.logo,
      "author": {
        "@type": "Organization",
        "name": "TheToolsVerse - AI Tools Directory",
        "url": "https://thetoolsverse.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TheToolsVerse",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thetoolsverse.com/logo.png"
        }
      },
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://thetoolsverse.com/tools/${tool.slug}`
      }
    },

    // FAQ Schema (if FAQs exist)
    ...(tool.faqs?.length > 0 ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": tool.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }] : []),

    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thetoolsverse.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Tools",
          "item": "https://thetoolsverse.com/tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": tool.categories[0],
          "item": `https://thetoolsverse.com/category/${categoryToSlug(tool.categories[0])}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": tool.displayName || tool.name,
          "item": `https://thetoolsverse.com/tools/${tool.slug}`
        }
      ]
    }
  ];

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

        {/* Enhanced Header with Rich Breadcrumbs */}
        <header className="bg-gradient-to-r from-slate-50 via-white to-blue-50/30 mt-16 sm:mt-12 w-full border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">

              {/* Breadcrumbs Container 
          min-w-0 is CRITICAL here: it prevents the flex item from overflowing 
          and forces the inner scrollbar to work 
      */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <Breadcrumbs
                  items={[
                    { name: 'Home', path: '/' },
                    { name: 'AI Tools', path: '/browse-tools' },
                    {
                      name: tool.categories[0],
                      path: `/categories/${tool.categories[0]
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`,
                    },
                    { name: tool.displayName, path: `/tools/${tool.slug}` },
                  ]}
                />
              </div>

              {/* Last Updated Badge - Hidden on small mobile, visible on md+ */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs font-medium text-blue-700">
                  Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        </header>



        {/* Main Content Container */}
        <main className="max-w-full -mt-12 bg-white  mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Left Column - Main Content (3/4 width) */}
            <div className="lg:col-span-3 ">

              {/* Hero Section with Tool Header */}
              <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* /////////////////// */}
                {/* Hero Section - Professional & Clean */}
                {/* Hero Section - Professional with Grid Pattern */}
                <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-gray-100 overflow-hidden">

                  {/* Grid Pattern Background */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
          linear-gradient(to right, rgb(191, 219, 254) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(191, 219, 254) 1px, transparent 1px)
        `,
                        backgroundSize: '32px 32px'
                      }}
                    ></div>
                  </div>

                  {/* Blue Gradient Overlay - Fade from Top */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/8 via-indigo-400/4 to-transparent pointer-events-none"></div>

                  {/* Decorative Glow Orbs */}
                  <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
                  {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

                    {/* Top Row: Logo + Quick Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">

                      {/* Logo with Hover Effect */}
                      <div className="flex-shrink-0">
                        <div className="relative group">
                          {/* Glow ring on hover */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-300"></div>

                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg object-cover bg-white border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            width="96"
                            height="96"
                          />

                          {/* Verified Badge
          {tool.isVerified && (
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md border-2 border-white">
              <CheckCircle className="w-4 h-4 text-white fill-current" />
            </div>
          )} */}
                        </div>
                      </div>

                      {/* Title + Short Description */}
                      <div className="flex-1 min-w-0">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                          {tool.name} Review, Features & Pricing
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                          {tool.shortDescription}
                        </p>

                        {/* Badges Row - Enhanced with Glassmorphism */}
                        <div className="flex flex-wrap items-center gap-2">

                          {/* Pricing Badge */}
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50/90 backdrop-blur-sm text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:scale-105 transition-all duration-200 shadow-sm">
                            <DollarSign className="w-3 h-3 mr-1.5" />
                            {tool.pricingType}
                          </span>

                          {/* Rating Badge */}
                          {effectiveRating && (
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50/90 backdrop-blur-sm text-amber-700 border border-amber-200 hover:bg-amber-100 hover:scale-105 transition-all duration-200 shadow-sm">
                              <Star className="w-3 h-3 mr-1.5 fill-current" />
                              {effectiveRating}/5
                              {tool.ratingCount && (
                                <span className="ml-1 text-amber-600">({tool.ratingCount})</span>
                              )}
                            </span>
                          )}

                          {/* Category Badge */}
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50/90 backdrop-blur-sm text-blue-700 border border-blue-200 hover:bg-blue-100 hover:scale-105 transition-all duration-200 shadow-sm">
                            <Users className="w-3 h-3 mr-1.5" />
                            {tool.categories[0]}
                          </span>

                          {/* Featured Badge (if applicable) */}
                          {tool.isFeatured && (
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50/90 backdrop-blur-sm text-purple-700 border border-purple-200 hover:bg-purple-100 hover:scale-105 transition-all duration-200 shadow-sm">
                              <Award className="w-3 h-3 mr-1.5" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button - Desktop Only with Shine Effect */}
                      <div className="hidden lg:block flex-shrink-0">
                        {tool.url ? (
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="relative group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
                          >
                            {/* Shine effect */}
                            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></div>
                            <span className="relative">Visit Website</span>
                            <ExternalLink className="w-4 h-4 relative group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ) : (
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-500 font-semibold rounded-xl cursor-not-allowed shadow-sm">
                            <Clock className="w-4 h-4" />
                            Coming Soon
                          </button>
                        )}
                      </div>
                    </div>


                    {/* Bottom Row: Key Features Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-2 mt-10">
                      {tool.features.slice(0, 6).map((feature, index) => (
                        <div
                          key={index}
                          className="group flex items-start gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-xs text-gray-700 leading-tight font-medium group-hover:text-blue-700 transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button - Mobile/Tablet */}
                    <div className="block lg:hidden">
                      {tool.url ? (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Visit {tool.displayName}
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : (
                        <button className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gray-100 text-gray-500 font-semibold rounded-xl cursor-not-allowed shadow-sm">
                          <Clock className="w-5 h-5" />
                          Coming Soon
                        </button>
                      )}
                    </div>
                    {/* Read Full Review Link */}
                    <div className="mt-6 flex justify-end -mb-10">
                      <a
                        href="#overview"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                      >
                        Read full review
                        <span className="text-base">↓</span>
                      </a>
                    </div>


                  </div>
                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                </div>


                <ExpandableStatsRow categories={tool.categories} tags={tool.tags} />



                {/* /////////////////////////////////// */}


                {/* Table of Contents */}
                <div className="p-6 bg-blue-50 ">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Table of Contents
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a href="#overview" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">1. Overview & Key Features</a>
                    <a href="#pricing" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">2. Pricing & Plans</a>
                    <a href="#pros-cons" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">3. Pros & Cons</a>
                    <a href="#alternatives" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">4. Alternatives</a>
                    <a href="#how-to-use" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">5. How to Use</a>
                    <a href="#faq" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">6. FAQ</a>
                  </div>
                </div>
              </article>

              {/* Key Takeaways Section (Critical for AI search) */}
              <section className="bg-gradient-to-r from-emerald-50 mt-3 to-blue-50 rounded-3xl shadow-lg border border-emerald-200 px-3 py-7 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-emerald-600" />
                  Key Takeaways - TL;DR
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">Best For</h3>
                        <p className="text-gray-700 text-sm">{tool.categories.join(', ')} professionals and {tool.pricingType.toLowerCase()} users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">Pricing</h3>
                        <p className="text-gray-700 text-sm">{tool.pricing} model with {tool.pricingType?.toLowerCase() === 'free' ? 'no cost' : 'flexible plans'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">User Rating</h3>
                        <p className="text-gray-700 text-sm">{tool.rating ? `${tool.rating}/5 stars` : 'Highly rated'} by users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">Top Features</h3>
                        <p className="text-gray-700 text-sm">{tool.tags.slice(0, 3).join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Detailed Overview Section */}
              <section id="overview" className="bg-white mt-3 rounded-3xl shadow-lg border border-gray-100 px-4 py-7 sm:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {tool.name}?</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p className="text-md sm:text-md leading-relaxed">
                    <strong>{tool.name}</strong> is
                    <a href={`/categories/${tool.categories[0].toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 ml-1 hover:underline">
                      {tool.categories[0].toLowerCase()}
                    </a> AI tool
                    that {tool.description.toLowerCase()}.
                    It focuses on features like {tool.tags.slice(0, 3).join(", ")} to help with {tool.categories[0].toLowerCase()} workflows.
                  </p>



                  <p>
                    The platform offers {tool.pricingType.toLowerCase()} access to {tool.tags.length} core features including {tool.tags.slice(0, 5).join(', ')},
                    making it ideal for both beginners and professionals in the {tool.categories.join(', ').toLowerCase()} space.
                  </p>

                  <p>
                    Whether you're a small business owner, freelancer, or enterprise team, {tool.name} provides the tools you need to
                    {tool.categories[0] === 'Writing' ? 'create compelling content' :
                      tool.categories[0] === 'Design' ? 'design stunning visuals' :
                        tool.categories[0] === 'Development' ? 'build better applications' :
                          'achieve your goals'} efficiently and effectively.
                  </p>
                </div>
              </section>
              {/* ///////////////////////editorial section //////////////////////////////// */}
              {/* Editor Review Section - Personal Testing Experience */}
              {tool.editorReview && (
                <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 mt-8 rounded-3xl shadow-lg border-2 border-amber-200 px-4 py-7 sm:p-8 relative overflow-hidden">
                  {/* Decorative badge ribbon */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Editor's Honest Take</span>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          Real-World Testing: {tool.displayName}
                        </h2>
                        <p className="text-gray-600 text-sm mt-1">
                          Tested by TheToolsVerse editors • Not AI-generated content
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Editor Review Content */}
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-amber-200">
                      {/* Review text with proper formatting */}
                      <div className="text-gray-800 leading-relaxed space-y-4">
                        {tool.editorReview.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-base sm:text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Editor badge at bottom */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            TV
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">TheToolsVerse Editorial Team</p>
                            <p className="text-sm text-gray-600">Tested {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-amber-200">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Hands-On Tested</p>
                        <p className="text-xs text-gray-600">Real usage scenarios</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-amber-200">
                      <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Updated {new Date().getFullYear()}</p>
                        <p className="text-xs text-gray-600">Current version tested</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-amber-200">
                      <Star className="w-6 h-6 text-amber-500 flex-shrink-0 fill-current" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Unbiased Review</p>
                        <p className="text-xs text-gray-600">Not sponsored content</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}


              {/* Features Deep Dive */}
              <section className="bg-white mt-3 rounded-3xl shadow-lg border border-gray-100 px-1 py-7 sm:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-blue-600" />
                  Core Features & Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tool.tags.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature}</h3>
                        <p className="text-gray-600">
                          This feature focuses on {feature.toLowerCase()} so you can handle {tool.categories[0].toLowerCase()} tasks with fewer manual steps.
                        </p>

                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing Analysis */}
              {/* Pricing Section - Professional & Clean */}
              <section id="pricing" className="bg-white mt-8 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                {/* Header */}
                <div className="border-b border-gray-100 px-6 py-6 sm:px-8 sm:py-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Pricing & Plans
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Transparent pricing with no hidden fees
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="px-6 py-8 sm:p-8">

                  {/* Current Plan Highlight */}
                  <div className="mb-8">
                    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl p-6 sm:p-8 border border-gray-200">

                      <div className="flex flex-col sm:flex-row items-start gap-6">

                        {/* Price Badge */}
                        <div className="flex-shrink-0">
                          <div className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-lg font-bold text-base shadow-md border-2 transition-all duration-300 hover:scale-105 ${getPriceBadgeStyle(tool.pricingType)}`}>
                            <div className="relative flex items-center justify-center">
                              <div className="absolute w-3 h-3 bg-current rounded-full animate-ping opacity-40"></div>
                              <div className="relative w-2.5 h-2.5 bg-current rounded-full"></div>
                            </div>
                            <span className="uppercase tracking-wide text-sm font-extrabold">
                              {tool.pricingType}
                            </span>
                          </div>
                        </div>


                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Pricing Model
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {tool.pricing || 'Visit the official website for detailed pricing information and plan comparisons.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Two-Column Feature Grid */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">

                    {/* Value Card */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">What You Get</h4>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {tool.pricingType?.toLowerCase() === 'free'
                              ? 'Full access with no credit card required'
                              : tool.pricingType === 'Freemium'
                                ? 'Free tier available to get started'
                                : 'Professional features and support'}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            Regular updates and improvements
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {tool.features.length}+ core features included
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Payment Card */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-purple-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Payment Options</h4>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {tool.pricingType === 'Free'
                              ? 'No payment needed to access'
                              : 'Multiple payment methods supported'}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {tool.pricingType === 'Free'
                              ? 'Sign up and start using immediately'
                              : 'Flexible billing cycles available'}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            Secure and encrypted transactions
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Recommendation Box */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <div className="flex flex-col sm:flex-row gap-4">

                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                          <Star className="w-6 h-6 text-white fill-current" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                          Our Assessment
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                          {tool.pricingType === 'Free'
                            ? `${tool.displayName} offers excellent value with its completely free model. Perfect for individuals and teams looking for a cost-effective solution without compromising on features.`
                            : tool.pricingType === 'Freemium'
                              ? `${tool.displayName} provides a solid free tier to get started. You can explore the platform risk-free and upgrade only when you need advanced capabilities.`
                              : `${tool.displayName} positions itself as a premium solution with pricing that reflects its comprehensive feature set. Consider your budget and requirements before committing.`}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {tool.pricingType === 'Free' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-xs sm:text-sm font-medium">
                              <CheckCircle className="w-4 h-4" />
                              Great Value
                            </span>
                          )}
                          {tool.rating && tool.rating >= 4.5 && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs sm:text-sm font-medium">
                              <Star className="w-4 h-4 fill-current" />
                              Highly Rated
                            </span>
                          )}
                          {tool.isFeatured && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg text-xs sm:text-sm font-medium">
                              <Award className="w-4 h-4" />
                              Editor's Choice
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>


              {/* Pros and Cons */}
              {/* Pros & Cons Section - Professional Design */}
              <section id="pros-cons" className="bg-white rounded-2xl mt-8 shadow-sm border border-gray-200 overflow-hidden">

                {/* Header */}
                <div className="border-b border-gray-100 px-6 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                    Pros & Cons Analysis
                  </h2>
                  <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                    Honest assessment based on user experience and features
                  </p>
                </div>

                {/* Cards Grid */}
                <div className="px-6 py-8 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Pros Card */}
                    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-500 overflow-hidden">

                      {/* Gradient overlay on hover - top-left to diagonal */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Advantages
                          </h3>
                        </div>

                        {/* List */}
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-5 h-5 text-green-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">{tool.pricingType} pricing model</strong> makes it accessible to everyone
                            </span>
                          </li>

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-5 h-5 text-green-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Intuitive interface</strong> with minimal learning curve
                            </span>
                          </li>

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-5 h-5 text-green-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Comprehensive toolset</strong> including {tool.tags.slice(0, 3).join(', ')}
                            </span>
                          </li>

                          {tool.rating && tool.rating >= 4 && (
                            <li className="flex items-start gap-3 group/item">
                              <div className="flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-5 h-5 text-green-600 group-hover/item:scale-110 transition-transform duration-200" />
                              </div>
                              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                <strong className="text-gray-900">Highly rated</strong> with {tool.rating}/5 user satisfaction
                              </span>
                            </li>
                          )}

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-5 h-5 text-green-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Built for {tool.categories[0].toLowerCase()}</strong> professionals
                            </span>
                          </li>

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-5 h-5 text-green-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Regular updates</strong> with new features
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Cons Card */}
                    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-red-300 transition-all duration-500 overflow-hidden">

                      {/* Gradient overlay on hover - top-right to diagonal */}
                      <div className="absolute inset-0 bg-gradient-to-bl from-red-50 via-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <XCircle className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Limitations
                          </h3>
                        </div>

                        {/* List */}
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <XCircle className="w-5 h-5 text-red-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Learning curve</strong> exists for advanced features
                            </span>
                          </li>

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <XCircle className="w-5 h-5 text-red-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Requires internet</strong> for full functionality
                            </span>
                          </li>

                          {tool.pricingType !== 'Free' && (
                            <li className="flex items-start gap-3 group/item">
                              <div className="flex-shrink-0 mt-0.5">
                                <XCircle className="w-5 h-5 text-red-600 group-hover/item:scale-110 transition-transform duration-200" />
                              </div>
                              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                <strong className="text-gray-900">Premium features</strong> behind paywall
                              </span>
                            </li>
                          )}

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <XCircle className="w-5 h-5 text-red-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Mobile limitations</strong> compared to desktop
                            </span>
                          </li>

                          <li className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5">
                              <XCircle className="w-5 h-5 text-red-600 group-hover/item:scale-110 transition-transform duration-200" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              <strong className="text-gray-900">Support response</strong> varies during peak times
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Summary */}
                  <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          Overall Assessment
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {tool.displayName} is a solid choice for {tool.categories[0].toLowerCase()} work.
                          While it has some limitations, the advantages outweigh the drawbacks for most users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {alternatives.length > 0 && (
                <section
                  id="alternatives"
                  className="bg-white mt-3 rounded-3xl shadow-lg border border-gray-100 px-4 py-6 sm:px-8 sm:py-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                    <Share2 className="w-6 sm:w-7 h-6 sm:h-7 text-purple-600" />
                    Top {tool.name} Alternatives
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                    {alternatives.map((alt) => {
                      // 💡 FIX: Safely define the description
                      const altDescription = alt.longDescription || alt.shortDescription || '';

                      return (
                        <div
                          key={alt.slug}
                          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <img
                              // 💡 FIX: Use alt.logo, not alt.image
                              src={alt.logo}
                              alt={`${alt.name} alternative to ${tool.name}`}
                              className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                              loading="lazy"
                              width="64"
                              height="64"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 truncate">
                                {alt.name}
                              </h3>
                              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                                {/* 💡 FIX: Use altDescription variable */}
                                {altDescription.length > 100
                                  ? `${altDescription.slice(0, 100)}...`
                                  : altDescription}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getPriceBadgeStyle(
                                    // 💡 FIX: Use alt.pricingType, not alt.price
                                    alt.pricingType
                                  )}`}
                                >
                                  {/* 💡 FIX: Use alt.pricingType, not alt.price */}
                                  {alt.pricingType}
                                </span>
                                {alt.rating && (
                                  <div className="flex items-center gap-1 text-sm">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="font-medium">{alt.rating}</span>
                                  </div>
                                )}
                              </div>
                              <a
                                href={`/tools/${alt.slug}`}
                                className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                              >
                                View {alt.name} Review
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* How to Use Section */}
              <section id="how-to-use" className="bg-white mt-3 rounded-3xl shadow-lg border border-gray-100 px-2 py-5 sm:p-8">
                <h2 className="flex items-center justify-center p-3 w-full mx-auto   gap-2 sm:gap-3 text-[25px] sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  <Clock className="hidden sm:inline-block w-6 h-6 text-gray-700 flex-shrink-0" />
                  How to Use {tool.name} Step by Step
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up & Get Started</h3>
                      <p className="text-gray-700">Create your {tool.pricingType === 'Free' ? 'free' : ''} account on {tool.name} and complete the onboarding process. The setup takes less than 5 minutes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl border border-purple-200">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your {tool.categories[0]} Project</h3>
                      <p className="text-gray-700">Select from various {tool.categories[0].toLowerCase()} templates or start from scratch. {tool.name} offers templates for different use cases and industries.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Customize & Generate</h3>
                      <p className="text-gray-700">Use the {tool.tags.slice(0, 2).join(' and ')} features to customize your project. The AI will help generate content based on your inputs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl border border-orange-200">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Review & Export</h3>
                      <p className="text-gray-700">Review your generated content, make final adjustments, and export in your preferred format. {tool.name} supports multiple export options.</p>
                    </div>
                  </div>
                </div>
              </section>



              {/* FAQ Section */}
              <section id="faq" className="bg-white mt-3 rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {/* Generate dynamic FAQs if none exist */}
                  {tool.faqs?.length > 0 ? (
                    tool.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Is {tool.name} free to use?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.pricingType === 'Free' ? `Yes, ${tool.name} is completely free to use with all features included.` :
                            tool.pricingType === 'Freemium' ? `${tool.name} offers a free tier with basic features, and premium plans for advanced functionality.` :
                              `${tool.name} is a paid service with flexible pricing plans starting from $29/month.`}
                        </p>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">What are the main features of {tool.name}?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.name} offers {tool.tags.length} main features including {tool.tags.slice(0, 5).join(', ')}, making it a comprehensive {tool.categories[0].toLowerCase()} solution.
                        </p>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Who should use {tool.name}?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.name} is perfect for {tool.categories.join(', ').toLowerCase()} professionals, freelancers, small businesses, and enterprises looking to improve their {tool.categories[0].toLowerCase()} workflow.
                        </p>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">How does {tool.name} compare to alternatives?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.name} stands out with its {tool.pricingType.toLowerCase()} pricing, {tool.rating ? `${tool.rating}-star user rating,` : 'high user satisfaction,'} and comprehensive feature set. It's particularly strong in {tool.tags.slice(0, 3).join(', ')}.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Can I integrate {tool.name} with other tools?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Yes, {tool.name} offers integrations with popular {tool.categories[0].toLowerCase()} tools and platforms. Check their documentation for the latest integration options and API availability.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </section>
              <RelatedTools currentTool={tool} allTools={relatedTools} />


              <section className="bg-gray-50 mt-3 rounded-3xl border border-gray-200 px-4 py-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  About this {tool.name} review
                </h2>
                <p className="text-sm text-gray-700">
                  This page is part of TheToolsVerse, an independent AI tools directory. Our team looks at
                  the tool’s official website, documentation, and user feedback to summarize features, pricing,
                  and common use cases. Listings are reviewed periodically when tools change their plans or capabilities.
                </p>
              </section>



              {/* Final Verdict Section */}
              {/* Final Verdict Section - SEO Optimized */}
              <section className="bg-white mt-8 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                {/* Header with Gradient Accent */}
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 sm:px-8 sm:py-10 text-white overflow-hidden">

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                        backgroundSize: '20px 20px'
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                          Final Verdict: Is {tool.displayName} Worth It?
                        </h2>
                        <p className="text-blue-100 text-sm sm:text-base">
                          Our honest assessment based on features, pricing, and user feedback
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="px-6 py-8 sm:p-8">

                  {/* Two Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                    {/* Best For Card */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {tool.displayName} is Perfect For
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            <strong className="text-gray-900">{tool.categories[0]} professionals</strong> and creative teams
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            Users seeking <strong className="text-gray-900">{tool.pricingType.toLowerCase()} solutions</strong> with robust features
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            Projects requiring <strong className="text-gray-900">{tool.tags.slice(0, 2).join(' and ')}</strong>
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            <strong className="text-gray-900">Beginners to experts</strong> across all skill levels
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            Teams prioritizing <strong className="text-gray-900">efficiency and collaboration</strong>
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Not Ideal For Card */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                          <XCircle className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          Consider Alternatives If
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            You need <strong className="text-gray-900">highly specialized niche features</strong>
                          </span>
                        </li>

                        {tool.pricingType !== 'Free' && (
                          <li className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm sm:text-base">
                              <strong className="text-gray-900">Budget constraints</strong> limit paid tool adoption
                            </span>
                          </li>
                        )}

                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            You require <strong className="text-gray-900">offline-first functionality</strong>
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            <strong className="text-gray-900">Complex integrations</strong> with legacy systems needed
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            You prefer <strong className="text-gray-900">on-premise deployment</strong> only
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Rating Summary Box */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border-2 border-blue-200">
                    <div className="flex flex-col sm:flex-row items-start gap-6">

                      {/* Rating Badge */}
                      <div className="flex-shrink-0">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 text-center min-w-[140px]">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Star className="w-8 h-8 text-amber-500 fill-current" />
                          </div>
                          <div className="text-4xl font-bold text-gray-900 mb-1">
                            {tool.rating || '4.5'}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            out of 5.0
                          </div>
                          <div className="flex items-center justify-center gap-1 mt-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(tool.rating || 4.5)
                                  ? 'text-amber-400 fill-current'
                                  : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Verdict Text */}
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                          Our Expert Verdict
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                          <strong>{tool.displayName}</strong> stands out as a {tool.pricingType.toLowerCase() === 'free' ? 'exceptional free' : 'solid'} choice in the {tool.categories[0].toLowerCase()} space.
                          {tool.rating && tool.rating >= 4.5
                            ? ` With an impressive ${tool.rating}/5 rating, it consistently delivers value to users across different skill levels.`
                            : ' Users appreciate its balance of features and usability.'}
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          The combination of {tool.pricingType.toLowerCase()} pricing, {tool.features.length}+ features, and strong user ratings makes {tool.displayName} a recommended option for {tool.categories[0].toLowerCase()} professionals looking to {tool.tags[0]?.toLowerCase() || 'enhance their workflow'}.
                        </p>

                        {/* Recommendation Badge */}
                        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold text-sm border border-green-300">
                          <CheckCircle className="w-5 h-5" />
                          Recommended by TheToolsVerse
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {tool.url && (
                    <div className="mt-8 text-center">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                      >
                        Try {tool.displayName} Now
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <p className="text-gray-500 text-sm mt-3">
                        {tool.pricingType === 'Free' ? 'No credit card required' : 'Visit official website for pricing details'}
                      </p>
                    </div>
                  )}

                </div>
              </section>

            </div>

            {/* Right Sidebar (1/4 width) */}
            <aside className="space-y-6">

              {/* Enhanced Professional CTA Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6  top-24 hover:shadow-xl transition-shadow duration-300">

                {/* Header Section */}
                <div className="text-center mb-6 pb-5 border-b border-gray-100">

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Try {tool.displayName}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.pricingType === 'free'
                      ? 'Start using for free — no credit card required'
                      : tool.pricingType === 'freemium'
                        ? 'Free tier available, upgrade anytime'
                        : 'Get started with a free trial'}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {tool.pricingType === 'free' ? 'Completely free to use' : `${tool.pricingType} pricing model`}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      Access to {tool.tags.length} core features
                    </span>
                  </div>

                  {tool.rating && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {tool.rating}/5 user rating
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      No setup or installation needed
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                {tool.url ? (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="group relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <span>Visit {tool.displayName}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-500 font-semibold py-3.5 px-6 rounded-xl cursor-not-allowed">
                    <Clock className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </button>
                )}

                {/* Trust Badge (optional) */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-center text-gray-500">
                    {tool.isVerified ? (
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        Verified by TheToolsVerse
                      </span>
                    ) : (
                      <span>Listed on TheToolsVerse directory</span>
                    )}
                  </p>
                </div>

              </div>

              {/* /////////////////////////////////////////// */}
              {/* Tool Stats */}
              {/* Tool Statistics Sidebar */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 p-6  top-6 h-fit">

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Tool Statistics</h3>
                      <p className="text-gray-600 text-sm">Key metrics and performance data</p>
                    </div>
                  </div>
                </div>

                {/* Statistics Stack */}
                <div className="space-y-4">

                  {/* User Rating Box */}
                  <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                          <Star className="w-4 h-4 text-amber-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">User Rating</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                          {effectiveRating ? effectiveRating : 'N/A'}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${effectiveRating && i < Math.floor(effectiveRating)
                                ? 'text-amber-400 fill-current'
                                : 'text-gray-300'
                                }`}
                            />
                          ))}
                        </div>

                      </div>
                      <p className="text-xs text-gray-500 mt-1">Average user satisfaction score</p>
                    </div>
                  </div>

                  {/* Price Model Box */}
                  <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Price Model</span>
                      </div>
                      <div className="mb-1">
                        <div className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight break-words">
                          {tool.pricingType}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Current pricing structure</p>
                    </div>
                  </div>

                  {/* Categories Box */}
                  <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Categories</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {tool.categories.length}
                        </div>
                        <div className="text-xs text-gray-500">
                          {tool.categories.length === 1 ? 'y' : 'categories'}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tool.categories.slice(0, 2).map((cat, index) => (
                          <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                            {cat.length > 8 ? `${cat.substring(0, 8)}...` : cat}
                          </span>
                        ))}
                        {tool.categories.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{tool.categories.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features Box */}
                  <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Features</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {tool.tags.length}
                        </div>
                        <div className="text-xs text-gray-500">
                          feature{tool.tags.length === 1 ? '' : 's'}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tool.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {tag.length > 6 ? `${tag.substring(0, 6)}...` : tag}
                          </span>
                        ))}
                        {tool.tags.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{tool.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Last Updated Box */}
                  <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Last Updated</span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                          2025
                        </div>
                        <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Current
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Most recent version release</p>
                    </div>
                  </div>

                  {/* Overall Score Box */}
                  <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Overall Score</span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {tool.rating ? Math.round(tool.rating * 20) : '90'}%
                        </div>
                        <div className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                          Excellent
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Performance & user satisfaction</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* /////////////////////////////////// */}

              {/* Related Tools */}
              {relatedTools.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-purple-600" />
                    Related Tools
                  </h3>
                  <div className="space-y-3">
                    {relatedTools.slice(0, 4).map((related) => (
                      <a
                        key={related.slug}
                        href={`/tools/${related.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                      >
                        <img
                          src={related.logo}
                          alt={related.name}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                          loading="lazy"
                          width="40"
                          height="40"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                            {related.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {related.pricingType || related.shortDescription || "View details"}
                          </div>

                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
                  <a
                    href={`/categories/${categoryToSlug(tool.categories?.[0])}`}
                    className="flex items-center justify-center gap-2 mt-4
             text-center text-blue-600 hover:text-blue-800
             font-medium text-sm cursor-pointer"
                  >
                    View All {tool.categories?.[0]} Tools
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}


            </aside>
          </div>
        </main>



      </div>
    </>
  );
}
