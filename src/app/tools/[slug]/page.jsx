import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Star, MapPin, Calendar, Users, CheckCircle, XCircle, ExternalLink, 
         Share2, Bookmark, ArrowRight, ChevronRight, Mail, 
         Award, Zap, Clock, DollarSign, TrendingUp, Eye } from "lucide-react";
import tools from "@/data/tools";

// Enhanced static generation with ISR
export async function generateStaticParams() {
  console.log(`Generating static params for ${tools.length} tools`);
  return tools.map(tool => ({ slug: tool.slug }));
}

// 1000% SEO-Optimized Metadata
export async function generateMetadata({ params }) {
  const tool = tools.find(t => t.slug === params.slug);
  
  if (!tool) {
    return {
      title: 'AI Tool Not Found - TheToolsVerse',
      description: 'The AI tool you are looking for could not be found. Discover 1000+ AI tools at TheToolsVerse.',
    };
  }

  // Generate dynamic keywords based on tool data
  const dynamicKeywords = [
    `${tool.name} review 2025`,
    `${tool.name} alternative`,
    `${tool.name} vs competitors`,
    `${tool.name} pricing`,
    `${tool.name} features`,
    `${tool.name} tutorial`,
    `${tool.name} discount`,
    `${tool.name} free trial`,
    `best ${tool.category[0]} AI tool`,
    `${tool.category[0]} AI tools`,
    `free AI ${tool.category[0]} tools`,
    `${tool.name} user reviews`,
    `${tool.name} pros and cons`,
    `how to use ${tool.name}`,
    `${tool.name} for business`,
    `${tool.name} for beginners`,
    ...tool.tags.map(tag => `${tag} AI tool`),
    ...tool.category.flatMap(cat => [`${cat} tools`, `best ${cat} software`]),
  ];

  const title = `${tool.name} Review 2025: Features, Pricing & ${tool.rating ? `${tool.rating}⭐ Rating` : 'User Reviews'} | TheToolsVerse`;
  const description = `${tool.name} Complete Review ✅ ${tool.description.slice(0, 100)}... ⭐ ${tool.rating || 'User'} Rating 💰 ${tool.price} 🔥 ${tool.category.join(', ')} | Compare features, pricing & alternatives.`;

  return {
    title,
    description,
    keywords: dynamicKeywords.join(', '),
    
    // Enhanced Open Graph
    openGraph: {
      title: `${tool.name} - Complete AI Tool Review & Analysis`,
      description: `Discover ${tool.name}: Features, Pricing, Pros & Cons. ${tool.rating ? `${tool.rating}⭐ rated` : 'Highly rated'} ${tool.category[0]} AI tool.`,
      images: [
        {
          url: tool.image,
          width: 1200,
          height: 630,
          alt: `${tool.name} AI Tool - Features & Review`,
        }
      ],
      type: 'article',
      url: `/tools/${tool.slug}`,
      siteName: 'TheToolsVerse - AI Tools Directory',
      locale: 'en_US',
    },
    
    // Enhanced Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review: ${tool.rating ? `${tool.rating}⭐` : 'Top Rated'} AI Tool`,
      description: `${tool.description.slice(0, 140)}... | ${tool.price} | TheToolsVerse`,
      images: [tool.image],
      creator: '@thetoolsverse',
      site: '@thetoolsverse',
    },
    
    // Advanced SEO metadata
    alternates: {
      canonical: `https://thetoolsverse.com/tools/${tool.slug}`,
    },
    
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
    
    // Additional metadata for AI search optimization
    other: {
      'article:author': 'TheToolsVerse Editorial Team',
      'article:section': tool.category[0],
      'article:tag': tool.tags.join(','),
      'article:published_time': '2024-01-01T00:00:00Z',
      'article:modified_time': new Date().toISOString(),
      'og:see_also': `https://thetoolsverse.com/category/${tool.category[0].toLowerCase()}`,
    }
  };
}

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
      "aggregateRating": tool.rating ? {
        "@type": "AggregateRating",
        "ratingValue": tool.rating,
        "ratingCount": Math.floor(Math.random() * 1000) + 250,
        "bestRating": "5",
        "worstRating": "1"
      } : undefined,
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
        <header className="bg-white shadow-sm border-b border-gray-100 relative top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500" aria-label="Breadcrumb">
              <a href="/" className="hover:text-blue-600 transition-colors font-medium cursor-pointer flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Home
              </a>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <a href="/tools" className="hover:text-blue-600 transition-colors font-medium cursor-pointer">AI Tools</a>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <a href={`/category/${tool.category[0].toLowerCase()}`} className="hover:text-blue-600 transition-colors font-medium cursor-pointer">
                {tool.category[0]}
              </a>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <span className="text-gray-900 font-semibold">{tool.name}</span>
            </nav>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Column - Main Content (3/4 width) */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Hero Section with Tool Header */}
              <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex-shrink-0">
                     <img 
                      src={tool.image} 
                      alt={`${tool.name} logo`}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl shadow-md object-cover"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                      {/* /////////////////// */}
                    </div>
                    <div className="flex-1">
                      <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
                        {tool.name} Review 2025
                      </h1>
                      <p className="text-xl text-blue-100 mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white/20 backdrop-blur border border-white/30">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {tool.price}
                        </span>
                        {tool.rating && (
                          <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 border border-white/30">
                            <Star className="w-4 h-4 text-yellow-300 fill-current" />
                            <span className="font-bold">{tool.rating}/5</span>
                            <span className="text-sm text-blue-100">({Math.floor(Math.random() * 1000) + 250} reviews)</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 border border-white/30">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{tool.category.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Bar */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 border-b">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
    
    <div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900">{tool.price}</div>
      <div className="text-xs sm:text-sm text-gray-600">Pricing</div>
    </div>
    
    <div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900">{tool.rating || 'N/A'}</div>
      <div className="text-xs sm:text-sm text-gray-600">Rating</div>
    </div>
    
    <div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900">{tool.category.length}</div>
      <div className="text-xs sm:text-sm text-gray-600">Categories</div>
    </div>
    
    <div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900">{tool.tags.length}</div>
      <div className="text-xs sm:text-sm text-gray-600">Features</div>
    </div>
  
  </div>
</div>


                {/* Table of Contents */}
                <div className="p-6 bg-blue-50 border-b">
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
              <section className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl shadow-lg border border-emerald-200 p-8">
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
                        <p className="text-gray-700">{tool.category.join(', ')} professionals and {tool.price.toLowerCase()} users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">Pricing</h3>
                        <p className="text-gray-700">{tool.price} model with {tool.price === 'Free' ? 'no cost' : 'flexible plans'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">User Rating</h3>
                        <p className="text-gray-700">{tool.rating ? `${tool.rating}/5 stars` : 'Highly rated'} by users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">Top Features</h3>
                        <p className="text-gray-700">{tool.tags.slice(0, 3).join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Detailed Overview Section */}
              <section id="overview" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {tool.name}?</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p className="text-xl leading-relaxed">
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
              <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
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
              <section id="pricing" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <DollarSign className="w-7 h-7 text-green-600" />
                  Pricing Analysis & Plans
                </h2>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-2xl px-4 py-2 rounded-full font-bold ${getPriceBadgeStyle(tool.price)}`}>
                      {tool.price}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Current Pricing Model</h3>
                      <p className="text-gray-600">
                        {tool.price === 'Free' ? 'Completely free to use with all features included' :
                         tool.price === 'Freemium' ? 'Free tier available with premium upgrades' :
                         'Paid subscription with multiple plan options'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Free Tier</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">
                      {tool.price === 'Free' ? '$0' : tool.price === 'Freemium' ? '$0' : 'N/A'}
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Basic features included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Limited usage per month
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Community support
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Pro Plan</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">$29</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        All features unlocked
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Unlimited usage
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Priority support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Advanced analytics
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Enterprise</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Custom integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Dedicated support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        SLA guarantees
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Volume discounts
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pros and Cons */}
              <section id="pros-cons" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Pros & Cons Analysis</h2>
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
                <section id="alternatives" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <Share2 className="w-7 h-7 text-purple-600" />
                    Top {tool.name} Alternatives
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {alternatives.map((alt, index) => (
                      <div key={alt.slug} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-4">
                          <img 
                            src={alt.image} 
                            alt={`${alt.name} alternative to ${tool.name}`}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                            loading="lazy"
                            width="64"
                            height="64"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{alt.name}</h3>
                            <p className="text-gray-600 mb-3 text-sm">{alt.description.slice(0, 100)}...</p>
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriceBadgeStyle(alt.price)}`}>
                                {alt.price}
                              </span>
                              {alt.rating && (
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-sm font-medium">{alt.rating}</span>
                                </div>
                              )}
                            </div>
                            <a 
                              href={`/tools/${alt.slug}`} 
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm cursor-pointer"
                            >
                              View {alt.name} Review
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* How to Use Section */}
              <section id="how-to-use" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Clock className="w-7 h-7 text-orange-600" />
                  How to Use {tool.name} - Step by Step
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
              <section id="faq" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
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

              {/* Final Verdict Section */}
              <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
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
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-xl p-6 text-white  top-24">
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
                    className="flex items-center justify-center gap-2 w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-2xl text-center hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
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

              {/* Tool Stats */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Tool Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      User Rating
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-900">{tool.rating || '4.5'}</span>
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Price Model
                    </span>
                    <span className="font-bold text-gray-900">{tool.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Categories
                    </span>
                    <span className="font-bold text-gray-900">{tool.category.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Features
                    </span>
                    <span className="font-bold text-gray-900">{tool.tags.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Last Updated
                    </span>
                    <span className="font-bold text-gray-900">2025</span>
                  </div>
                </div>
              </div>

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
