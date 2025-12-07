import RelatedTools from '@/components/RelatedTools';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Star, MapPin,CreditCard, Calendar, Users, CheckCircle, XCircle, ExternalLink, 
         Share2, Bookmark, ArrowRight, ChevronRight, Mail, 
         Award, Zap, Clock, DollarSign, TrendingUp, Eye } from "lucide-react";
import tools from "@/data/tools";

// Enhanced static generation with ISR
export async function generateStaticParams() {
  console.log(`Generating static params for ${tools.length} tools`);
  return tools.map(tool => ({ slug: tool.slug }));
}

// 1000% SEO-Optimized Metadata
// export async function generateMetadata({ params }) {
//   const tool = tools.find(t => t.slug === params.slug);
  
//   if (!tool) {
//     return {
//       title: 'AI Tool Not Found - TheToolsVerse',
//       description: 'The AI tool you are looking for could not be found. Discover 1000+ AI tools at TheToolsVerse.',
//     };
//   }

//   // Generate dynamic keywords based on tool data
//   const dynamicKeywords = [
//     `${tool.name} review 2025`,
//     `${tool.name} alternative`,
//     `${tool.name} vs competitors`,
//     `${tool.name} pricing`,
//     `${tool.name} features`,
//     `${tool.name} tutorial`,
//     `${tool.name} discount`,
//     `${tool.name} free trial`,
//     `best ${tool.category[0]} AI tool`,
//     `${tool.category[0]} AI tools`,
//     `free AI ${tool.category[0]} tools`,
//     `${tool.name} user reviews`,
//     `${tool.name} pros and cons`,
//     `how to use ${tool.name}`,
//     `${tool.name} for business`,
//     `${tool.name} for beginners`,
//     ...tool.tags.map(tag => `${tag} AI tool`),
//     ...tool.category.flatMap(cat => [`${cat} tools`, `best ${cat} software`]),
//   ];

//   const title = `${tool.name} Review 2025: Features, Pricing & ${tool.rating ? `${tool.rating}⭐ Rating` : 'User Reviews'} | TheToolsVerse`;
//   const description = `${tool.name} Complete Review ✅ ${tool.description.slice(0, 100)}... ⭐ ${tool.rating || 'User'} Rating 💰 ${tool.price} 🔥 ${tool.category.join(', ')} | Compare features, pricing & alternatives.`;

//   return {
//     title,
//     description,
//     keywords: dynamicKeywords.join(', '),
    
//     // Enhanced Open Graph
//     openGraph: {
//       title: `${tool.name} - Complete AI Tool Review & Analysis`,
//       description: `Discover ${tool.name}: Features, Pricing, Pros & Cons. ${tool.rating ? `${tool.rating}⭐ rated` : 'Highly rated'} ${tool.category[0]} AI tool.`,
//       images: [
//         {
//           url: tool.image,
//           width: 1200,
//           height: 630,
//           alt: `${tool.name} AI Tool - Features & Review`,
//         }
//       ],
//       type: 'article',
//       url: `https://www.thetoolsverse.com/tools/${tool.slug}`, // ✅ Fixed
//       siteName: 'TheToolsVerse - AI Tools Directory',
//       locale: 'en_US',
//     },
    
//     // Enhanced Twitter Card
//     twitter: {
//       card: 'summary_large_image',
//       title: `${tool.name} Review: ${tool.rating ? `${tool.rating}⭐` : 'Top Rated'} AI Tool`,
//       description: `${tool.description.slice(0, 140)}... | ${tool.price} | TheToolsVerse`,
//       images: [tool.image],
//       creator: '@thetoolsverse',
//       site: '@thetoolsverse',
//     },
    
//     // Advanced SEO metadata
//     alternates: {
//       canonical: `https://www.thetoolsverse.com/tools/${tool.slug}`,
//     },
    
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
    
//     // Additional metadata for AI search optimization
//     other: {
//       'article:author': 'TheToolsVerse Editorial Team',
//       'article:section': tool.category[0],
//       'article:tag': tool.tags.join(','),
//       'article:published_time': '2024-01-01T00:00:00Z',
//       'article:modified_time': new Date().toISOString(),
//       'og:see_also': `https://www.thetoolsverse.com/category/${tool.category[0].toLowerCase()}`,
//     }
//   };
// }
// ------------------ REPLACE ENTIRE generateMetadata() ------------------
export async function generateMetadata({ params }) {
  const tool = tools.find(t => t.slug === params.slug);

  if (!tool) {
    return {
      title: 'AI Tool Not Found - TheToolsVerse',
      description: 'The AI tool you are looking for could not be found. Discover 1000+ AI tools at TheToolsVerse.',
      robots: { index: true, follow: true }
    };
  }

  // make a short brand-safe name (strip "Review 2025" if present)
  const safeShortName = tool.name.replace(/\s*Review.*$/i, '').trim();

  // Intent-based short title (keeps it under ~60 characters)
  const title = `${safeShortName} — ${tool.category[0] || 'AI Tool'}`;

  // Intent-focused, human meta descriptions per tool (short, no emojis, no stuffing)
  const descriptions = {
    'me-meshcapade': 'Create realistic 3D avatars from photos, video, or scans. Me.Meshcapade outputs production-ready, fully-rigged models for games, VR, and e-commerce.',
    'twaingpt-ai-humanizer': 'Turn AI text into natural human-sounding writing. TwainGPT improves readability while preserving meaning. Free tier available.',
    'uhmegle': 'Free anonymous text & video chat. Uhmegle requires no signup — start chatting instantly.'
  };

  // default fallback description if not one of the three
  const description = descriptions[tool.slug] || `${safeShortName} — ${tool.description.slice(0, 140)}.`;

  // keep a concise keywords list (first 6 useful keywords)
  const keywords = (tool.keywords || []).slice(0, 6).join(', ');

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: tool.image, alt: `${safeShortName} preview`, width: 1200, height: 630 }],
      url: `https://www.thetoolsverse.com/tools/${tool.slug}`,
      type: 'website',
      siteName: 'TheToolsVerse'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [tool.image]
    },
    alternates: {
      canonical: `https://www.thetoolsverse.com/tools/${tool.slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true }
    },
    other: {
      'article:section': tool.category[0] || '',
      'article:tag': (tool.tags || []).slice(0, 6).join(','),
      'article:modified_time': new Date().toISOString()
    }
  };
}
// ------------------ END generateMetadata() ------------------

export default function ToolDetailPage({ params }) {
  const tool = tools.find(t => t.slug === params.slug);
  
  if (!tool) {
    return notFound();
  }

  // Enhanced utility functions
  const getPriceBadgeStyle = (price) => {
    const styles = {
      'Free': 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      'Paid': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Freemium': 'bg-purple-100 text-purple-800 border border-purple-200',
    };
    return styles[price] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-emerald-500';
    if (rating >= 4.0) return 'text-yellow-500';
    if (rating >= 3.5) return 'text-orange-500';
    return 'text-red-500';
  };

  // Generate related tools (for internal linking)
  const relatedTools = tools
    .filter(t => t.slug !== tool.slug && t.category.some(cat => tool.category.includes(cat)))
    .slice(0, 6);

  // Generate AI-optimized alternatives
  const alternatives = tools
    .filter(t => t.slug !== tool.slug && t.category[0] === tool.category[0])
    .slice(0, 4);

  // Enhanced JSON-LD with multiple schemas
  const jsonLdSchemas = [
    // Software Application Schema
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": tool.name,
      "description": tool.description,
      "image": tool.image,
      "url": tool.url,
      "applicationCategory": "AI Tool",
      "operatingSystem": "Web",
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
        "price": tool.price === 'Free' ? "0" : "29.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "category": tool.price
      },
      "review": tool.rating ? [{
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
        "reviewBody": `${tool.name} is an excellent ${tool.category[0]} AI tool that offers ${tool.tags.slice(0, 3).join(', ')}. ${tool.price} pricing makes it accessible for various use cases.`
      }] : undefined,
    },
    
    // Article Schema for content
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${tool.name} Review 2025: Complete Guide & Analysis`,
      "description": tool.description,
      "image": tool.image,
      "author": {
        "@type": "Organization",
        "name": "TheToolsVerse Editorial Team",
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
          "name": tool.category[0],
          "item": `https://thetoolsverse.com/category/${tool.category[0].toLowerCase()}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": tool.name,
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
        <header className="bg-white mt-20 w-full ">
  <div className="max-w-7xl  mx-auto px-3 py-2">
    <Breadcrumbs
      items={[
        { name: 'Home', path: '/' },
        { name: 'AI Tools', path: '/browse-tools' },
        {
          name: tool.category[0],
          path: `/categories/${tool.category[0]
            .toLowerCase()
            .replace(/\s+/g, '-')}`,
        },
        { name: tool.name, path: `/tools/${tool.slug}` },
      ]}
    />
  </div>
</header>


        {/* Main Content Container */}
        <main className="max-w-full -mt-12  mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Column - Main Content (3/4 width) */}
            <div className="lg:col-span-3 ">
              
              {/* Hero Section with Tool Header */}
              <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
  <div className="space-y-4">
    {/* Mobile: Logo left + Name right row */}
    <div className="flex items-start gap-4 sm:hidden">
      <div className="flex-shrink-0">
        <img 
          src={tool.image} 
          alt={`${tool.name} logo`}
          className="w-20 h-20 rounded-2xl shadow-3xl object-cover bg-white"
          loading="lazy"
          width="70"
          height="70"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-[22px] sm:text-2xl font-bold leading-tight">
          {tool.name}
        </h1>
      </div>
    </div>

    {/* Desktop: Logo + Name + Description row */}
    <div className="hidden sm:flex flex-row items-start sm:items-center gap-6">
      <div className="flex-shrink-0">
        <img 
          src={tool.image} 
          alt={`${tool.name} logo`}
          className="w-32 h-32 rounded-2xl shadow-3xl object-cover bg-white"
          loading="lazy"
          width="128"
          height="128"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          {tool.name}
        </h1>
        <p className="text-sm sm:text-xl text-blue-100 mb-4 leading-relaxed">
          {tool.slug === 'me-meshcapade' && 'Me.Meshcapade creates realistic 3D avatars from photos, video or scans.'}
          {tool.slug === 'twaingpt-ai-humanizer' && 'TwainGPT converts AI-generated text into natural, human-sounding writing.'}
          {tool.slug === 'uhmegle' && 'Uhmegle is a free anonymous chat service for text and video — no signup needed.'}
          {(!['me-meshcapade','twaingpt-ai-humanizer','uhmegle'].includes(tool.slug)) && tool.description}
        </p>
      </div>
    </div>

    {/* Mobile Description */}
    <div className="sm:hidden">
      <p className="text-md text-blue-100 leading-relaxed">
        {tool.slug === 'me-meshcapade' && 'Me.Meshcapade creates realistic 3D avatars from photos, video or scans.'}
        {tool.slug === 'twaingpt-ai-humanizer' && 'TwainGPT converts AI-generated text into natural, human-sounding writing.'}
        {tool.slug === 'uhmegle' && 'Uhmegle is a free anonymous chat service for text and video — no signup needed.'}
        {(!['me-meshcapade','twaingpt-ai-humanizer','uhmegle'].includes(tool.slug)) && tool.description}
      </p>
    </div>

    {/* Mobile Visit Button - Below logo+name */}
    {tool.url && (
      <div className="sm:hidden flex justify-center">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-95 transition-all duration-200"
        >
          Visit Official Site
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    )}

    {/* Enhanced Badge System */}
    <div className="w-full">
      {/* Mobile Layout - Stacked vertically */}
      <div className="flex flex-col gap-3 sm:hidden">
        {/* Pricing Badge */}
        <div className="w-full">
          <span className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-semibold bg-white/20 backdrop-blur border border-white/30 text-white shadow-xl">
            <DollarSign className="w-5 h-5 mr-2 text-green-200 flex-shrink-0" />
            <span className="text-center leading-tight">{tool.price}</span>
          </span>
        </div>
        
        {/* Rating Badge */}
        {tool.rating && (
          <div className="w-full">
            <div className="flex items-center justify-center gap-2 w-full bg-purple-500/20 backdrop-blur rounded-xl px-4 py-3 border border-amber-300/30 text-white shadow-xl">
              <Star className="w-5 h-5 text-amber-300 fill-current flex-shrink-0" />
              <span className="font-bold text-lg">{tool.rating}/5</span>
              <span className="text-base text-amber-100">
                ({Math.floor(Math.random() * 1000) + 250} reviews)
              </span>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 w-full bg-purple-500/20 backdrop-blur rounded-xl px-4 py-3 border border-purple-300/30 text-white shadow-xl">
            <Users className="w-5 h-5 text-purple-200 flex-shrink-0" />
            <span className="font-semibold text-base text-center leading-tight">
              {tool.category.join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden sm:flex flex-wrap items-center gap-4 lg:gap-5">
        {/* Pricing Badge */}
        <span className="inline-flex items-center px-4 py-2.5 lg:px-5 lg:py-3 rounded-full text-sm lg:text-base font-semibold bg-white/20 backdrop-blur border border-white/30 text-white shadow-xl hover:bg-white/25 transition-all duration-200">
          <DollarSign className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-2.5 text-green-200 flex-shrink-0" />
          <span className="whitespace-nowrap">{tool.price}</span>
        </span>
        
        {/* Rating Badge */}
        {tool.rating && (
          <div className="inline-flex items-center gap-2 lg:gap-2.5 bg-purple-500/20 backdrop-blur rounded-full px-4 py-2.5 lg:px-5 lg:py-3 border border-amber-300/30 transition-all duration-200">
            <Star className="w-4 h-4 lg:w-5 lg:h-5 text-amber-300 fill-current flex-shrink-0" />
            <span className="font-bold text-white text-sm lg:text-base whitespace-nowrap">
              {tool.rating}/5
            </span>
            <span className="text-sm text-amber-100 whitespace-nowrap hidden md:inline">
              ({Math.floor(Math.random() * 1000) + 250} reviews)
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 lg:gap-2.5 bg-purple-500/20 backdrop-blur rounded-full px-4 py-2.5 lg:px-5 lg:py-3 border border-purple-300/30 shadow-xl hover:bg-purple-500/25 transition-all duration-200">
          <Users className="w-4 h-4 lg:w-5 lg:h-5 text-purple-200 flex-shrink-0" />
          <span className="font-semibold text-white text-sm lg:text-base">
            {tool.category.length > 2 ? 
              `${tool.category.slice(0, 2).join(', ')} +${tool.category.length - 2}` : 
              tool.category.join(', ')
            }
          </span>
        </div>
      </div>
    </div>
  </div>
</div>


                {/* Quick Stats Bar */}
                {/* Enhanced Stats Cards Section - Full Content Display */}
<div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-8 sm:py-12 border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-2">
        Quick Stats & Overview
      </h2>
      <p className="text-sm sm:text-base text-gray-600">
        Key metrics and information about {tool.name}
      </p>
    </div>

    {/* Stats Cards Grid - Dynamic Heights */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
      
      {/* Pricing Card */}
      <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:-translate-y-1 h-auto min-h-[180px] flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3">
              Pricing
            </h3>
            <div className="flex-grow flex items-start">
              <p className="text-md sm:text-base font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors duration-300 break-words hyphens-auto text-wrap">
                {tool.price}
              </p>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute -bottom-4 left-6 right-6 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>

      {/* Rating Card */}
      <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 hover:-translate-y-1 h-auto min-h-[180px] flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Star className="w-6 h-6 text-amber-600 fill-current" />
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3">
              Rating
            </h3>
            <div className="flex-grow flex items-start">
              {tool.rating ? (
                <div className="space-y-2 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {tool.rating}
                    </span>
                    <span className="text-lg text-gray-500">/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(tool.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <span className="text-2xl sm:text-3xl font-bold text-gray-400">N/A</span>
              )}
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute -bottom-4 left-6 right-6 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>

      {/* Categories Card */}
      <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 h-auto min-h-[180px] flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3">
              Categories
            </h3>
            <div className="flex-grow flex flex-col justify-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {tool.category.length}
                </span>
                <span className="text-sm text-gray-500">
                  categor{tool.category.length === 1 ? 'y' : 'ies'}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tool.category.map((cat, index) => (
                  <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full break-words">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute -bottom-4 left-6 right-6 h-1 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>

      {/* Features Card */}
      <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 h-auto min-h-[180px] flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-6 h-6 text-blue-600" />
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3">
              Features
            </h3>
            <div className="flex-grow flex flex-col justify-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {tool.tags.length}
                </span>
                <span className="text-sm text-gray-500">
                  feature{tool.tags.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full break-words">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute -bottom-4 left-6 right-6 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>

    </div>
  </div>
</div>

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
                        <p className="text-gray-700 text-sm">{tool.category.join(', ')} professionals and {tool.price.toLowerCase()} users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">Pricing</h3>
                        <p className="text-gray-700 text-sm">{tool.price} model with {tool.price === 'Free' ? 'no cost' : 'flexible plans'}</p>
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
                    <strong>{tool.name}</strong> is a {tool.category[0].toLowerCase()} AI tool that {tool.description.toLowerCase()}. 
                    Launched in 2024, it has quickly become one of the most popular {tool.category[0].toLowerCase()} solutions 
                    with a {tool.rating ? `${tool.rating}-star rating` : 'high user satisfaction score'}.
                  </p>
                  
                  <p>
                    The platform offers {tool.price.toLowerCase()} access to {tool.tags.length} core features including {tool.tags.slice(0, 5).join(', ')}, 
                    making it ideal for both beginners and professionals in the {tool.category.join(', ').toLowerCase()} space.
                  </p>

                  <p>
                    Whether you're a small business owner, freelancer, or enterprise team, {tool.name} provides the tools you need to 
                    {tool.category[0] === 'Writing' ? 'create compelling content' : 
                     tool.category[0] === 'Design' ? 'design stunning visuals' :
                     tool.category[0] === 'Development' ? 'build better applications' :
                     'achieve your goals'} efficiently and effectively.
                  </p>
                </div>
              </section>

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
                          Advanced {feature.toLowerCase()} capabilities that help you 
                          {tool.category[0] === 'Writing' ? 'create better content' :
                           tool.category[0] === 'Design' ? 'design professional visuals' :
                           'achieve professional results'} faster than traditional methods.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing Analysis */}
              <section id="pricing" className="bg-white mt-6 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
  {/* Header Section */}
  <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 px-2 py-6 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
          <DollarSign className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">
            Pricing & Plans
          </h2>
          <p className="text-green-100 text-sm sm:text-base">
            Complete cost breakdown and subscription options
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="px-2 py-6 sm:p-8">
    
    {/* Current Pricing Highlight */}
    <div className="mb-8">
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full -translate-y-16 translate-x-16"></div>
        
        <div className="relative z-10">
          {/* ///////////////////////////////// */}
          <div className="flex flex-col  items-start sm:items-center gap-4 sm:gap-6">
            
            {/* Price Badge */}
            <div className="flex-shrink-0 ">
              <div className={`inline-flex items-center px-4 py-3 rounded-2xl font-bold text-sm sm:text-base shadow-lg ${getPriceBadgeStyle(tool.price)}`}>
                <div className="w-2 h-2 bg-current rounded-full mr-3 animate-pulse"></div>
                {tool.price}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl text-center sm:text-2xl font-bold text-gray-900 mb-2">
                Current Pricing Model
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tool.price === 'Free' ? 
                  '🎉 Completely free to use with all features included - no hidden costs or limitations.' :
                 tool.price === 'Freemium' ? 
                  '🚀 Free tier available with essential features, plus premium upgrades for advanced functionality.' :
                 tool.price.toLowerCase().includes('subscription') ?
                  '💼 Flexible subscription plans designed to scale with your needs and budget.' :
                  '💰 Premium tool with transparent pricing and comprehensive feature access.'}
              </p>
            </div>
          </div>
          {/* /////////////////////// */}
        </div>
      </div>
    </div>

    {/* Pricing Details Grid */}
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      
      {/* Value Proposition Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-3 py-6 sm:p-6 border border-blue-200/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">Value Analysis</h4>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">
              {tool.price === 'Free' ? 'Exceptional value with no cost barrier' :
               tool.price === 'Freemium' ? 'Great entry point with upgrade flexibility' :
               'Competitive pricing for feature-rich solution'}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">
              ROI-focused pricing structure
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">
              Transparent cost with no hidden fees
            </span>
          </div>
        </div>
      </div>

      {/* Payment Options Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">Payment Details</h4>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">
              {tool.price === 'Free' ? 'No payment required' :
               tool.price === 'Freemium' ? 'Optional premium payments' :
               'Multiple payment methods accepted'}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">
              {tool.price === 'Free' ? 'Instant access' : 'Flexible billing cycles'}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">
              {tool.price === 'Free' ? 'No credit card needed' : 'Secure payment processing'}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing Recommendation */}
<div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-4 sm:p-6 border-2 border-amber-200/50 relative overflow-hidden">
  <div className="relative z-10">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
        <Star className="w-6 h-6 text-white fill-current" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          💡 Our Recommendation
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
          {tool.price === 'Free'
            ? 'Perfect for users who want to explore all features without any financial commitment. Ideal for personal projects and small teams.'
            : tool.price === 'Freemium'
            ? 'Start with the free tier to test the waters, then upgrade when you need advanced features. Great for growing businesses.'
            : 'Consider the value proposition carefully - this tool offers comprehensive features that justify the investment for serious users.'}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
            ✅ Recommended
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
            🎯 Best Value
          </span>
          {tool.rating && tool.rating >= 4 && (
            <span className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
              ⭐ Top Rated
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</section>

              {/* Pros and Cons */}
              <section id="pros-cons" className="bg-white rounded-3xl mt-3 shadow-lg border border-gray-100 px-2 py-7  sm:p-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pros & Cons Analysis</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                    <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                      <CheckCircle className="w-6 h-6" />
                      Pros
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>{tool.price} pricing model</strong> makes it accessible to all users</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>User-friendly interface</strong> with intuitive design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Comprehensive features</strong> including {tool.tags.slice(0, 3).join(', ')}</span>
                      </li>
                      {tool.rating && (
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>High user satisfaction</strong> with {tool.rating}/5 rating</span>
                        </li>
                      )}
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Perfect for {tool.category[0].toLowerCase()}</strong> professionals and teams</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Regular updates</strong> and feature improvements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                    <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                      <XCircle className="w-6 h-6" />
                      Cons
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Learning curve</strong> for advanced features
                          {tool.price !== 'Free' ? ' in premium tiers' : ''}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Internet connection required</strong> for full functionality</span>
                      </li>
                      {tool.price !== 'Free' && (
                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Premium features</strong> require paid subscription</span>
                        </li>
                      )}
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Mobile app</strong> may have limited features compared to web version</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Customer support</strong> response times can vary during peak hours</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Alternatives Section */}
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
    {alternatives.map((alt) => (
      <div
        key={alt.slug}
        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src={alt.image}
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
              {alt.description.length > 100
                ? `${alt.description.slice(0, 100)}...`
                : alt.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getPriceBadgeStyle(
                  alt.price
                )}`}
              >
                {alt.price}
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
    ))}
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
                      <p className="text-gray-700">Create your {tool.price === 'Free' ? 'free' : ''} account on {tool.name} and complete the onboarding process. The setup takes less than 5 minutes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl border border-purple-200">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your {tool.category[0]} Project</h3>
                      <p className="text-gray-700">Select from various {tool.category[0].toLowerCase()} templates or start from scratch. {tool.name} offers templates for different use cases and industries.</p>
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
                          {tool.price === 'Free' ? `Yes, ${tool.name} is completely free to use with all features included.` :
                           tool.price === 'Freemium' ? `${tool.name} offers a free tier with basic features, and premium plans for advanced functionality.` :
                           `${tool.name} is a paid service with flexible pricing plans starting from $29/month.`}
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">What are the main features of {tool.name}?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.name} offers {tool.tags.length} main features including {tool.tags.slice(0, 5).join(', ')}, making it a comprehensive {tool.category[0].toLowerCase()} solution.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Who should use {tool.name}?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.name} is perfect for {tool.category.join(', ').toLowerCase()} professionals, freelancers, small businesses, and enterprises looking to improve their {tool.category[0].toLowerCase()} workflow.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">How does {tool.name} compare to alternatives?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tool.name} stands out with its {tool.price.toLowerCase()} pricing, {tool.rating ? `${tool.rating}-star user rating,` : 'high user satisfaction,'} and comprehensive feature set. It's particularly strong in {tool.tags.slice(0, 3).join(', ')}.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Can I integrate {tool.name} with other tools?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Yes, {tool.name} offers integrations with popular {tool.category[0].toLowerCase()} tools and platforms. Check their documentation for the latest integration options and API availability.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </section>
<RelatedTools currentTool={tool} allTools={tools} />



              {/* Final Verdict Section */}
              <section className="bg-gradient-to-r mt-3 from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  Final Verdict: Is {tool.name} Worth It?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {tool.name} is Perfect For:
                    </h3>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {tool.category[0]} professionals and teams
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Users looking for {tool.price.toLowerCase()} solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Those who need {tool.tags.slice(0, 3).join(', ')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Both beginners and advanced users
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Consider Alternatives If:
                    </h3>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        You need highly specialized features
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        Budget is extremely tight (if paid)
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        You prefer desktop-only solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        Integration requirements are very specific
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-300 fill-current" />
                    Our Rating: {tool.rating || '4.5'}/5
                  </h3>
                  <p className="text-lg text-blue-100">
                    {tool.name} delivers excellent value with its {tool.price.toLowerCase()} pricing and comprehensive feature set. 
                    {tool.rating ? `With a ${tool.rating}/5 user rating,` : 'With high user satisfaction,'} it's definitely worth trying for {tool.category[0].toLowerCase()} needs.
                  </p>
                </div>
              </section>
            </div>

            {/* Right Sidebar (1/4 width) */}
            <aside className="space-y-6">
              
              {/* Enhanced CTA Card */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl shadow-xl p-6 text-white  top-24">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Try {tool.name} Now</h3>
                  <p className="text-blue-100 text-sm">
                    {tool.price === 'Free' ? 'Start using for free today!' : 
                     tool.price === 'Freemium' ? 'Free tier available!' : 
                     'Get started with premium features'}
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{tool.price} access</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">All {tool.tags.length} features</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{tool.rating ? `${tool.rating}⭐ rated` : 'Highly rated'}</span>
                  </div>
                </div>

                {tool.url ? (
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-2 w-full bg-white text-purple-600 font-bold py-2 px-3 rounded-2xl text-center hover:bg-gray-50 transition-all transform  shadow-lg cursor-pointer"
                  >
                    Visit {tool.name}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : (
                  <button className="flex items-center justify-center gap-2 w-full bg-white/20 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/30 transition-colors backdrop-blur border border-white/30 cursor-pointer">
                    <Clock className="w-5 h-5" />
                    Coming Soon
                  </button>
                )}
                
                <p className="text-xs text-blue-200 text-center mt-4">
                  {tool.price === 'Free' ? 'No credit card required' : 'Cancel anytime'}
                </p>
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
            {tool.rating || '4.5'}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(tool.rating || 4.5) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
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
            {tool.price}
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
            {tool.category.length}
          </div>
          <div className="text-xs text-gray-500">
            categor{tool.category.length === 1 ? 'y' : 'ies'}
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {tool.category.slice(0, 2).map((cat, index) => (
            <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
              {cat.length > 8 ? `${cat.substring(0, 8)}...` : cat}
            </span>
          ))}
          {tool.category.length > 2 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              +{tool.category.length - 2}
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
                          src={related.image} 
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
                          <div className="text-xs text-gray-500">{related.price}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
                  <a 
                    href={`/category/${tool.category[0].toLowerCase()}`}
                    className="flex items-center justify-center gap-2 mt-4 text-center text-blue-600 hover:text-blue-800 font-medium text-sm cursor-pointer"
                  >
                    View All {tool.category[0]} Tools
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Newsletter Signup */}
              {/* <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-600" />
                  Stay Updated
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get weekly updates on the latest AI tools and reviews.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Subscribe Free
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  No spam, unsubscribe anytime
                </p>
              </div> */}
            </aside>
          </div>
        </main>

        {/* Enhanced Footer with Internal Links */}
        
      </div>
    </>
  );
}
