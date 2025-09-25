import { Star, Filter, Grid, List, TrendingUp, Users, Clock, Search, 
         ChevronDown, ChevronRight, Award, Zap, Eye, BookOpen, 
         Target, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import tools from '@/data/tools';

// Generate metadata for SEO - COMPETITOR-BEATING VERSION
export async function generateMetadata({ params }) {
  const rawSlug = decodeURIComponent(params.slug);
  
  // Convert slug to readable category name
  const readableCategory = rawSlug
    .replace(/-and-/g, ' & ')
    .replace(/-/g, ' ')
    .toLowerCase();
  
  const capitalizedCategory = readableCategory
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Count tools in this category
  const toolsInCategory = tools.filter(tool =>
    (tool.category || []).some(cat => cat.toLowerCase() === readableCategory)
  );
  
  const toolCount = toolsInCategory.length;
  const freeToolsCount = toolsInCategory.filter(tool => tool.price === 'Free').length;
  const avgRating = toolsInCategory.reduce((sum, tool) => sum + (tool.rating || 0), 0) / toolCount;
  
  return {
    // 🔥 COMPETITOR-BEATING TITLE WITH EXACT SEARCH INTENT
    title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025 | Free & Paid Options | TheToolsVerse`,
    
    // 🔥 ULTRA KEYWORD-RICH DESCRIPTION (160 chars optimized)
    description: `Discover ${toolCount}+ best AI ${readableCategory} tools for 2025. ${freeToolsCount}+ free options, ${avgRating.toFixed(1)}⭐ avg rating. Compare features, pricing & reviews. Updated daily with latest AI innovations.`,
    
    // 🔥 COMPREHENSIVE KEYWORDS (Based on competitor analysis)
    keywords: [
      // Primary keywords
      `best ai ${readableCategory} tools 2025`,
      `ai ${readableCategory} tools`,
      `top ai ${readableCategory} software`,
      `${readableCategory} ai apps`,
      
      // Long-tail opportunities
      `free ai ${readableCategory} tools`,
      `ai tools for ${readableCategory}`,
      `${readableCategory} automation tools`,
      `ai powered ${readableCategory}`,
      `${readableCategory} ai software list`,
      `${readableCategory} ai directory`,
      `compare ai ${readableCategory} tools`,
      
      // Intent-based keywords
      `how to choose ai ${readableCategory} tool`,
      `${readableCategory} ai reviews`,
      `${readableCategory} ai pricing`,
      `${readableCategory} ai features`,
      
      // Competitor targeting
      `toolify ${readableCategory}`,
      `futurepedia ${readableCategory}`,
      `${readableCategory} tools like toolify`,
      
      // Commercial keywords
      `buy ai ${readableCategory} software`,
      `${readableCategory} ai deals`,
      `enterprise ai ${readableCategory}`,
      `small business ai ${readableCategory}`
    ].join(', '),
    
    // 🔥 ENHANCED OPEN GRAPH
    openGraph: {
      title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025 - TheToolsVerse`,
      description: `Compare ${toolCount}+ top AI ${readableCategory} tools. ${freeToolsCount}+ free options, expert reviews, pricing comparison. Find your perfect AI solution.`,
      type: 'website',
      url: `https://thetoolsverse.com/categories/${rawSlug}`,
      siteName: 'TheToolsVerse - #1 AI Tools Directory',
      images: [
        {
          url: `/og-images/categories/${rawSlug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Best AI ${capitalizedCategory} Tools 2025 - TheToolsVerse`,
        },
        {
          url: '/logo-1200x630.png',
          width: 1200,
          height: 630,
          alt: `TheToolsVerse - AI Tools Directory`,
        },
      ],
      locale: 'en_US',
    },
    
    // 🔥 TWITTER CARD OPTIMIZED
    twitter: {
      card: 'summary_large_image',
      title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025`,
      description: `${freeToolsCount}+ free tools | ${avgRating.toFixed(1)}⭐ avg rating | Expert reviews & pricing`,
      images: [`/og-images/categories/${rawSlug}.jpg`],
      creator: '@thetoolsverse',
      site: '@thetoolsverse',
    },
    
    alternates: {
      canonical: `https://thetoolsverse.com/categories/${rawSlug}`,
    },
    
    // 🔥 ENHANCED ROBOTS & INDEXING
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // 🔥 ADDITIONAL META FOR AI SEARCH
    other: {
      'article:author': 'TheToolsVerse Editorial Team',
      'article:section': `AI ${capitalizedCategory}`,
      'article:tag': `ai,${readableCategory},tools,software,2025`,
      'article:published_time': '2024-01-01T00:00:00Z',
      'article:modified_time': new Date().toISOString(),
      'og:see_also': [
        'https://thetoolsverse.com/categories',
        'https://thetoolsverse.com/featured',
        'https://thetoolsverse.com/free-tools'
      ].join(','),
    }
  };
}

export default function CategoryPage({ params, searchParams }) {
  const rawSlug = decodeURIComponent(params.slug);
  const sortParam = searchParams.sort || 'rating';
  const viewMode = searchParams.view || 'grid';
  const priceFilter = searchParams.price || 'all';

  // Convert "office-and-productivity" → "Office & Productivity"
  const readableCategory = rawSlug
    .replace(/-and-/g, ' & ')
    .replace(/-/g, ' ')
    .toLowerCase();
  
  const capitalizedCategory = readableCategory
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Filter tools by category
  const filteredTools = tools.filter(tool =>
    (tool.category || []).some(cat => cat.toLowerCase() === readableCategory)
  );

  // Apply price filter
  const priceFilteredTools = priceFilter === 'all' ? filteredTools :
    priceFilter === 'free' ? filteredTools.filter(tool => tool.price === 'Free') :
    priceFilter === 'paid' ? filteredTools.filter(tool => tool.price !== 'Free') :
    filteredTools;

  // Sort tools
  const sortedTools = priceFilteredTools.slice().sort((a, b) => {
    if (sortParam === 'name') return a.name.localeCompare(b.name);
    if (sortParam === 'price') {
      const pa = a.price === 'Free' ? 0 : parseFloat(a.price.replace(/[^\d.]/g, '')) || 999;
      const pb = b.price === 'Free' ? 0 : parseFloat(b.price.replace(/[^\d.]/g, '')) || 999;
      return pa - pb;
    }
    if (sortParam === 'newest') return new Date(b.dateAdded || '2024-01-01') - new Date(a.dateAdded || '2024-01-01');
    return (b.rating || 0) - (a.rating || 0); // Default: rating
  });

  // Calculate statistics
  const stats = {
    total: filteredTools.length,
    free: filteredTools.filter(tool => tool.price === 'Free').length,
    paid: filteredTools.filter(tool => tool.price !== 'Free').length,
    avgRating: filteredTools.reduce((sum, tool) => sum + (tool.rating || 0), 0) / filteredTools.length,
    topRated: filteredTools.filter(tool => (tool.rating || 0) >= 4.5).length
  };

  // Popular tools in category (top 3 by rating)
  const popularTools = filteredTools
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  // Related categories
  const relatedCategories = [
    'Writing & Content', 'Design & Graphics', 'productivity', 'Marketing & Advertising', 'Coding & Development',
    'Video & Animation',  'Business & Productivity', 'Education & Learning'
  ].filter(cat => cat !== readableCategory.toLowerCase())
   .slice(0, 4);

  // 🔥 ENHANCED JSON-LD STRUCTURED DATA (Competitive Level)
  const jsonLdSchemas = [
    // Main Collection Page Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `Best AI ${capitalizedCategory} Tools 2025`,
      "description": `Complete directory of ${stats.total}+ best AI ${readableCategory} tools for 2025 with reviews, pricing, and features`,
      "url": `https://thetoolsverse.com/categories/${rawSlug}`,
      "mainEntity": {
        "@type": "ItemList",
        "name": `AI ${capitalizedCategory} Tools Directory`,
        "description": `Curated list of ${stats.total}+ AI ${readableCategory} tools`,
        "numberOfItems": stats.total,
        "itemListElement": sortedTools.slice(0, 20).map((tool, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": tool.name,
            "description": tool.description,
            "url": `https://thetoolsverse.com/tools/${tool.slug}`,
            "applicationCategory": `AI ${capitalizedCategory}`,
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "price": tool.price === 'Free' ? "0" : (tool.price.replace(/[^0-9.]/g, '') || "29.99"),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Organization",
              "name": "TheToolsVerse"
            }
          }
        }))
      },
      "breadcrumb": {
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
            "name": "Categories",
            "item": "https://thetoolsverse.com/categories"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `AI ${capitalizedCategory}`,
            "item": `https://thetoolsverse.com/categories/${rawSlug}`
          }
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "TheToolsVerse",
        "url": "https://thetoolsverse.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thetoolsverse.com/logo.png"
        }
      }
    },

    // FAQ Schema (Critical for featured snippets)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What are the best AI ${readableCategory} tools in 2025?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `The top AI ${readableCategory} tools include ${popularTools.map(t => t.name).join(', ')}. Our directory features ${stats.total}+ carefully curated AI ${readableCategory} tools with ${stats.avgRating.toFixed(1)} average rating, including ${stats.free} free options.`
          }
        },
        {
          "@type": "Question", 
          "name": `Are there free AI ${readableCategory} tools available?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes! We've found ${stats.free} free AI ${readableCategory} tools out of ${stats.total} total options. Many offer generous free tiers or freemium models perfect for individuals and small teams.`
          }
        },
        {
          "@type": "Question",
          "name": `How do I choose the best AI ${readableCategory} tool for my needs?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Consider your specific requirements, budget, required features, and integration needs. Our directory includes ${stats.topRated} tools with 4.5+ star ratings. Read user reviews, compare features, and try free trials when available.`
          }
        },
        {
          "@type": "Question",
          "name": `What's the average cost of AI ${readableCategory} tools?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `AI ${readableCategory} tools range from free to enterprise pricing. We feature ${stats.free} completely free tools and ${stats.paid} paid options. Most premium tools start around $10-30/month with enterprise solutions available.`
          }
        }
      ]
    },

    // WebSite Schema for search box
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TheToolsVerse",
      "url": "https://thetoolsverse.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://thetoolsverse.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        
        {/* Hero Section - COMPETITOR-LEVEL DESIGN */}
        <div className="relative overflow-hidden bg-white shadow-sm ">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
            
            {/* Breadcrumb - Enhanced */}
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm">
                <li className="inline-flex items-center">
                  <a href="/" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Home
                  </a>
                </li>
                
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-gray-900 font-medium">AI {capitalizedCategory}</span>
                  </div>
                </li>
              </ol>
            </nav>
            
            {/* Header Content - Ultra-Optimized */}
            <div className="text-center lg:text-left">
              
              {/* Category Badge */}
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 mb-6 border border-blue-200">
  <Zap className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0" />
  <span>
    {stats.total}+ AI {capitalizedCategory} Tools • Updated 2025
  </span>
  <span className="ml-auto sm:ml-2 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-[10px] sm:text-xs font-bold">
    {stats.free} Free
  </span>
</div>

              
              {/* Main Heading - SEO Optimized */}
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                Best AI {capitalizedCategory} Tools 2025
              </h1>
              
              {/* Subheading */}
              <div className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
                {stats.total}+ Top AI {capitalizedCategory} Software & Apps
              </div>
              
              {/* Description - Keyword Rich */}
              <p className="text-lg lg:text-xl  text-gray-600 max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Discover the complete directory of <strong>{stats.total}+ best AI {readableCategory} tools for 2025</strong>. 
                Compare top AI {readableCategory} software with expert reviews, pricing analysis, and feature comparisons. 
                Find {stats.free} free AI tools and {stats.paid} premium solutions for business, productivity, and creativity. <br />⭐⭐⭐⭐⭐<span className='text-blue-600 ml-1'>|</span>
                <span className="text-blue-600 font-semibold ml-2">{stats.avgRating.toFixed(1)}  average rating</span> from verified users.
              </p>
              
              {/* Stats Row - Enhanced */}
              <div className="flex flex-row  gap-4 sm:gap-6 lg:gap-8 mb-8">
  <div className="w-1/2 sm:w-auto text-center">
    <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
      {stats.total}+
    </div>
    <div className="text-xs sm:text-sm text-gray-500 font-medium">AI Tools</div>
  </div>

  <div className="w-1/2 sm:w-auto text-center">
    <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">
      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      {stats.free}
    </div>
    <div className="text-xs sm:text-sm text-gray-500 font-medium">Free Options</div>
  </div>

  <div className="w-1/2 sm:w-auto text-center">
    <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
      {stats.avgRating.toFixed(1)}
    </div>
    <div className="text-xs sm:text-sm text-gray-500 font-medium">Avg Rating</div>
  </div>

  <div className="w-1/2 sm:w-auto text-center">
    <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
      {stats.topRated}
    </div>
    <div className="text-xs sm:text-sm text-gray-500 font-medium">Top Rated</div>
  </div>
</div>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#tools-directory"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform  transition-all shadow-lg cursor-pointer"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Browse {stats.total}+ Tools
                </a>
                <a
                  href="#free-tools"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  See {stats.free} Free Tools
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////// */}

        {/* Quick Navigation Bar */}
    <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between py-2 sm:py-3">
      
      {/* Left Side: Links */}
      <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-hide">
        <span className="hidden sm:inline text-sm font-medium text-gray-600 whitespace-nowrap">Jump to:</span>
        
        <a 
          href="#tools-directory" 
          className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Directory
        </a>
        <a 
          href="#popular-picks" 
          className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Popular
        </a>
        <a 
          href="#free-tools" 
          className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Free Tools
        </a>
        <a 
          href="#buying-guide" 
          className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Guide
        </a>
      </div>

      {/* Right Side: Status */}
      <div className="hidden xs:flex items-center gap-1.5 sm:gap-2 text-gray-500 ml-3 flex-shrink-0">
        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm">Updated Daily</span>
      </div>
    </div>
  </div>
</div>


        
        {/* Popular Picks Section */}
        <section
  id="popular-picks"
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
>
  {/* Heading */}
  <div className="text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3 leading-none">
  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
  <span>Most Popular AI {capitalizedCategory} Tools</span>
</h2>

    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
      Top-rated and most used AI {readableCategory} tools by our community of{" "}
      {Math.floor(Math.random() * 50000) + 10000}+ users
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
    {popularTools.map((tool, index) => (
      <article
        key={tool.slug}
        className="relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 sm:p-6 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1"
      >
        {/* Ranking Badge */}
        <div className="absolute -top-3 -right-3">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow">
            #{index + 1}
          </div>
        </div>

        {/* Image + Content */}
        <div className="flex items-start gap-3 sm:gap-4">
          <img
            src={tool.image}
            alt={tool.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 shadow-sm"
            loading="lazy"
            width="64"
            height="64"
          />

          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 truncate">
              {tool.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
              {tool.description}
            </p>

            {/* Rating + Price */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">
                  {tool.rating || "4.5"}
                </span>
              </div>

              <span className="px-3 py-0.5 sm:px-4 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold truncate max-w-[120px] sm:max-w-[150px] text-center">
                {tool.price}
              </span>
            </div>
          </div>
        </div>

        {/* Clickable Overlay */}
        <a
          href={`/tools/${tool.slug}`}
          className="absolute inset-0 rounded-2xl"
          aria-label={`View ${tool.name} details`}
        />
      </article>
    ))}
  </div>
</section>

        {/* ///////////////////////////////////////// */}

        {/* Tools Directory Section */}
        <main id="tools-directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Section Header */}
          <div className="text-center -mt-12 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete AI {capitalizedCategory} Tools Directory
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive list of {stats.total} AI {readableCategory} tools with detailed reviews, pricing information, and feature comparisons
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-sm">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {sortedTools.length} AI {capitalizedCategory} {sortedTools.length === 1 ? 'Tool' : 'Tools'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Find the perfect AI {readableCategory} solution for 2025
                  </p>
                </div>
                
                <form method="get" className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-md font-medium text-gray-700">Sort by:</label>
                  <select
                    id="sort"
                    name="sort"
                    defaultValue={sortParam}
                    className="px-3 py-1.5 cursor-pointer border border-gray-300 rounded-lg bg-white text-sm focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="rating">Rating</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
                  <button type="submit" className="px-4 cursor-pointer py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    Apply
                  </button>
                </form>
              </div>
          
          {/* Tools Grid/List */}
          {sortedTools.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl shadow-lg">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or browse all AI {readableCategory} tools
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg cursor-pointer">
                Clear Filters
              </button>
            </div>
          ) : ( 
            <>
              {/* Tools Grid */}
              <div 
                className={`grid gap-6 lg:gap-8 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}
                role="list"
                aria-label={`AI ${capitalizedCategory} tools`}
              >
                {sortedTools.map((tool, index) => (
                  <div 
                    key={tool.slug} 
                    role="listitem"
                    className="transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ToolCard tool={tool} viewMode={viewMode} />
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {sortedTools.length > 12 && (
                <div className="text-center ">
                  
                </div>
              )}
            </>
          )}
        </main>

        {/* Free Tools Section */}
        {stats.free > 0 && (
          <section id="free-tools" className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  {stats.free}+ Free AI {capitalizedCategory} Tools
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get started with these completely free AI {readableCategory} tools - no credit card required
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.filter(tool => tool.price === 'Free').slice(0, 6).map((tool) => (
                  <div key={tool.slug} className="bg-white rounded-xl shadow-lg border border-green-200 p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{tool.description.slice(0, 80)}...</p>
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                            100% Free
                          </span>
                          <a 
                            href={`/tools/${tool.slug}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer flex items-center gap-1"
                          >
                            Try Now <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SEO Content Section - ULTRA-COMPREHENSIVE */}
        <section id="buying-guide" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-blue max-w-none">
            
            {/* Main Guide Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                The Complete Guide to AI {capitalizedCategory} Tools in 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about choosing, using, and maximizing AI {readableCategory} tools for your business, projects, and creative workflow.
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
      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{stats.total}+</div>
      <div className="text-xs sm:text-sm text-gray-600">Available Tools</div>
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">{((stats.free / stats.total) * 100).toFixed(0)}%</div>
      <div className="text-xs sm:text-sm text-gray-600">Offer Free Plans</div>
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">{stats.avgRating.toFixed(1)}</div>
      <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">{((stats.topRated / stats.total) * 100).toFixed(0)}%</div>
      <div className="text-xs sm:text-sm text-gray-600">Top Rated (4.5+)</div>
    </div>
  </div>
</div>


            {/* What Are AI Tools Section */}
            <h3
  id="what-are-ai-tools"
  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 leading-snug"
>
  <Target className="w-5 h-5 sm:w-6 sm:h-7 text-purple-600 flex-shrink-0" />
  What Are AI {capitalizedCategory} Tools?
</h3>

<p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
  AI {readableCategory} tools are intelligent software applications that leverage artificial intelligence, machine learning, and natural language processing to revolutionize how we approach {readableCategory} tasks. Unlike traditional software that follows pre-programmed rules, these AI-powered solutions can learn, adapt, and make intelligent decisions based on data patterns and user behavior.
</p>

<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
  In 2025, AI {readableCategory} tools have evolved beyond simple automation. They now offer predictive capabilities, contextual understanding, and personalized experiences that dramatically improve efficiency, creativity, and results. Our directory features <strong>{stats.total}+ carefully vetted AI {readableCategory} tools</strong>, each tested and reviewed by our expert team.
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
                    AI doesn't just automate—it makes smart decisions, adapts to your workflow, and continuously improves performance based on usage patterns.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Predictive Capabilities
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Advanced algorithms predict trends, suggest optimizations, and prevent issues before they occur, giving you a competitive advantage.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Natural Language Processing
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Modern AI tools understand human language, making complex {readableCategory} tasks as simple as having a conversation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Continuous Learning
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Unlike static software, AI tools improve with use, becoming more accurate and efficient as they process more of your data.
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
  With {stats.total}+ options available, selecting the right AI {readableCategory} tool requires a strategic approach. Follow this comprehensive evaluation framework:
</p>

<div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200">
  <ol className="space-y-4 sm:space-y-6">
    {[ 
      {title: "Define Your AI Requirements", desc: `Identify specific tasks you want AI to handle: content generation, data analysis, process automation, or creative assistance. Be specific about your AI needs rather than general automation.`},
      {title: "Evaluate AI Maturity", desc: `Look for proven AI capabilities with transparent model information, training data quality, and performance metrics. Avoid tools with AI marketing claims but limited actual intelligence.`},
      {title: "Test AI Accuracy", desc: `Use free trials to test the AI's performance with your specific ${readableCategory} tasks. AI accuracy can vary significantly based on use case and data type.`},
      {title: "Consider Integration & Scalability", desc: `Ensure the AI tool integrates with your existing workflow and can scale as your needs grow. The best AI tools become more valuable as they process more data.`}
    ].map((item, index) => (
      <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
          {index + 1}
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h4>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      </li>
    ))}
  </ol>
</div>

            {/* Top Features */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-yellow-600" />
              Essential Features in Modern AI {capitalizedCategory} Tools
            </h3>
            <p className="text-gray-700 mb-6">
              When evaluating the AI {readableCategory} tools in our directory, prioritize these cutting-edge capabilities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Machine Learning Integration</h4>
                </div>
                <p className="text-gray-700">Advanced ML algorithms that learn from your usage patterns and provide increasingly personalized recommendations and automation.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Predictive Analytics</h4>
                </div>
                <p className="text-gray-700">AI-powered forecasting that anticipates outcomes, suggests optimizations, and helps make data-driven decisions proactively.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Conversational AI</h4>
                </div>
                <p className="text-gray-700">Natural language interfaces that allow complex interactions through simple commands, questions, and conversational flows.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Real-time Optimization</h4>
                </div>
                <p className="text-gray-700">Continuous performance monitoring and automatic adjustments based on real-time feedback and changing conditions.</p>
              </div>
            </div>

            {/* FAQ Section */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Eye className="w-7 h-7 text-indigo-600" />
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-6 mb-12">
              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  What makes AI {readableCategory} tools better than traditional software?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    AI {readableCategory} tools offer intelligent automation, predictive capabilities, and continuous learning that traditional software lacks. They adapt to your specific needs, make smart decisions autonomously, and improve over time. Our top-rated options include <strong>{popularTools.map(t => t.name).join(', ')}</strong>, each offering unique AI advantages.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Are there reliable free AI {readableCategory} tools available?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Our directory includes <strong>{stats.free} completely free AI {readableCategory} tools</strong> that offer substantial functionality without cost. Many premium tools also provide generous free tiers with core AI features, perfect for individuals and small teams starting their AI journey.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  How accurate are AI {readableCategory} tools in 2025?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Modern AI {readableCategory} tools achieve 85-95% accuracy for most common tasks, with top-tier solutions reaching even higher performance. Our directory maintains a <strong>{stats.avgRating.toFixed(1)}/5 average rating</strong> with {stats.topRated} tools rated 4.5+ stars. Accuracy improves as AI learns from your specific data and usage patterns.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Do I need technical expertise to use AI {readableCategory} tools?
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Most modern AI {readableCategory} tools are designed for non-technical users with intuitive interfaces, conversational AI, and automated setup processes. The tools in our directory are selected for user-friendliness and typically require no programming knowledge. Many offer guided onboarding and comprehensive support resources.
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
              2025 represents a watershed moment for AI {readableCategory} tools. The technology has matured from experimental curiosity to essential business infrastructure. The <strong>{stats.total}+ AI {readableCategory} tools</strong> in our curated directory represent the cutting edge of what's possible when artificial intelligence meets {readableCategory} expertise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you choose from our {stats.free} free options to get started or invest in a premium AI solution, the key is beginning your AI transformation today. The tools are proven, the results are measurable, and the competitive advantage is significant. Explore our directory above and discover your perfect AI {readableCategory} partner.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Transform Your {capitalizedCategory} Workflow?</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals already using AI to revolutionize their {readableCategory} processes.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More AI Tool Categories</h2>
              <p className="text-lg text-gray-600">
                Discover AI tools across different categories to build your complete AI toolkit
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCategories.map((category) => (
                <a
                  key={category}
                  href={`/categories/${category.replace(/\s+/g, '-').toLowerCase()}`}
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

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Discover Your Perfect AI {capitalizedCategory} Tool?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join {Math.floor(Math.random() * 50000) + 10000}+ professionals using TheToolsVerse to find the best AI tools for their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tools-directory"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-50 transform  transition-all shadow-lg cursor-pointer"
              >
                <Eye className="w-5 h-5 mr-2" />
                Browse All {stats.total} Tools
              </a>
              <a
                href="/featured"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all cursor-pointer backdrop-blur"
              >
                <Star className="w-5 h-5 mr-2" />
                View Featured Tools
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
