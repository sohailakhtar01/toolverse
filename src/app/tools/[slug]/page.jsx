import { notFound } from "next/navigation";
import tools from "@/data/tools";

// IMPORTANT: This ensures all pages are statically generated at build time
export async function generateStaticParams() {
  // Make sure this returns ALL your tools
  console.log(`Generating static params for ${tools.length} tools`);
  return tools.map(tool => ({ 
    slug: tool.slug 
  }));
}

// Enhanced metadata generation with better SEO
export async function generateMetadata({ params }) {
  const tool = tools.find(t => t.slug === params.slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested tool could not be found.'
    };
  }

  // Enhanced SEO metadata
  const title = `${tool.name} - AI Tool Directory | Features, Pricing & Review`;
  const description = `Discover ${tool.name}: ${tool.description} ✓ ${tool.price} ✓ Rating: ${tool.rating || 'N/A'} ✓ Categories: ${tool.category.join(', ')}`;

  return {
    title,
    description,
    keywords: [
      tool.name,
      ...tool.tags,
      ...tool.category,
      'AI tool',
      'artificial intelligence',
      tool.price.toLowerCase(),
      'review',
      'features'
    ].join(', '),
    
    // Open Graph
    openGraph: {
      title: tool.name,
      description: tool.description,
      images: [
        {
          url: tool.image,
          width: 1200,
          height: 630,
          alt: `${tool.name} - AI Tool`,
        }
      ],
      type: 'website',
      url: `/tools/${tool.slug}`,
      siteName: 'AI Tool Directory',
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description: tool.description,
      images: [tool.image],
      creator: '@yourusername', // Add your Twitter handle
    },
    
    // Additional SEO
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    
    // Structured data will be added via JSON-LD below
    other: {
      'article:author': 'AI Tool Directory',
      'article:section': tool.category[0],
      'article:tag': tool.tags.join(','),
    }
  };
}

export default function ToolDetailPage({ params }) {
  const tool = tools.find(t => t.slug === params.slug);
  
  if (!tool) {
    return notFound();
  }

  // Function to get price badge styling
  const getPriceBadgeStyle = (price) => {
    if (price === 'Free') return 'bg-green-100 text-green-800';
    if (price === 'Paid') return 'bg-blue-100 text-blue-800';
    if (price === 'Freemium') return 'bg-purple-100 text-purple-800';
    return 'bg-gray-100 text-gray-800';
  };

  // Function to get rating color
  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-500';
    if (rating >= 4.0) return 'text-yellow-500';
    if (rating >= 3.5) return 'text-orange-500';
    return 'text-red-500';
  };

  // JSON-LD Structured Data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "image": tool.image,
    "url": tool.url,
    "applicationCategory": "AI Tool",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": tool.price === 'Free' ? "0" : tool.price === 'Paid' ? "19.99" : "0",
      "priceCurrency": "USD",
      "category": tool.price
    },
    "aggregateRating": tool.rating ? {
      "@type": "AggregateRating",
      "ratingValue": tool.rating,
      "ratingCount": Math.floor(Math.random() * 1000) + 100, // You should replace this with actual review count
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "keywords": tool.tags.join(', '),
    "category": tool.category.join(', '),
    "datePublished": "2024-01-01", // Add actual publish date
    "author": {
      "@type": "Organization",
      "name": "AI Tool Directory"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "AI Tools",
                  "item": "/tools"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": tool.name,
                  "item": `/tools/${tool.slug}`
                }
              ]
            })
          }}
        />

        {/* Header Section with Breadcrumbs */}
        <div className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500" aria-label="Breadcrumb">
              <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
              <span>›</span>
              <a href="/tools" className="hover:text-purple-600 transition-colors">AI Tools</a>
              <span>›</span>
              <span className="text-gray-900">{tool.name}</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Tool Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Tool Header */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
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
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                      {tool.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriceBadgeStyle(tool.price)}`}>
                        {tool.price}
                      </span>
                      {tool.rating && (
                        <div className="flex items-center gap-1">
                          <svg className={`w-5 h-5 ${getRatingColor(tool.rating)}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tool.tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced SEO Content Section */}
              {tool.overview && (
                <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {tool.name}?</h2>
                  <p className="text-gray-700 leading-relaxed">{tool.overview}</p>
                </section>
              )}

              {/* FAQs Section */}
              {tool.faqs?.length > 0 && (
                <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {tool.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Additional SEO Content */}
              <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose {tool.name}?
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {tool.name} stands out in the AI tools landscape with its {tool.price.toLowerCase()} pricing model 
                    and comprehensive feature set including {tool.tags.slice(0, 3).join(', ')}.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Perfect for {tool.category.join(', ').toLowerCase()} use cases, this tool offers 
                    {tool.rating && ` an impressive ${tool.rating}-star rating from users and`} 
                    continues to be a popular choice in {new Date().getFullYear()}.
                  </p>
                </div>
              </section>

              {/* Tool Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tool Information</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Category</span>
                    <div className="flex flex-wrap gap-2">
                      {tool.category.map((cat, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Pricing</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriceBadgeStyle(tool.price)}`}>
                      {tool.price}
                    </span>
                  </div>
                  {tool.rating && (
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600 font-medium">Rating</span>
                      <div className="flex items-center gap-1">
                        <svg className={`w-5 h-5 ${getRatingColor(tool.rating)}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-medium text-gray-700">{tool.rating}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - CTA & Related */}
            <div className="space-y-6">
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white  top-6">
                <h3 className="text-xl font-bold mb-4">Try {tool.name}</h3>
                <p className="text-purple-100 mb-6">
                  Ready to explore this amazing tool? Click below to get started!
                </p>
                {tool.url ? (
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                  >
                    Visit Tool →
                  </a>
                ) : (
                  <button className="w-full bg-white/20 text-white font-bold py-3 px-6 rounded-xl hover:bg-white/30 transition-colors">
                    Coming Soon
                  </button>
                )}
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categories</span>
                    <span className="font-medium">{tool.category.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Features</span>
                    <span className="font-medium">{tool.tags.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-medium">{tool.price}</span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Need Help?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Have questions about this tool? We're here to help!
                </p>
                <button className="w-full cursor-pointer bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}