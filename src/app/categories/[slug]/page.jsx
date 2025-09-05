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
  const toolCount = tools.filter(tool =>
    (tool.category || []).some(cat => cat.toLowerCase() === readableCategory)
  ).length;
  
  return {
    // 🔥 COMPETITOR-BEATING TITLE WITH AI FOCUS
    title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025 | Top AI ${capitalizedCategory} Software - ToolsVerse`,
    
    // 🔥 KEYWORD-RICH DESCRIPTION
    description: `Discover ${toolCount}+ best AI ${readableCategory} tools of 2025. Compare top AI ${readableCategory} software with ratings, pricing & reviews. Free & paid AI ${readableCategory} apps for business, productivity & creativity. Updated daily.`,
    
    // 🔥 TARGET HIGH-VOLUME KEYWORDS
    keywords: [
      `best ai ${readableCategory} tools 2025`,
      `ai ${readableCategory} tools`,
      `top ai ${readableCategory} software`,
      `${readableCategory} ai apps`,
      `best ${readableCategory} tools 2025`,
      `ai tools for ${readableCategory}`,
      `${readableCategory} automation tools`,
      `free ai ${readableCategory} tools`,
      `ai ${readableCategory} software list`,
      `${toolCount}+ ${readableCategory} tools`,
      `ai powered ${readableCategory}`,
      `${readableCategory} ai directory`
    ],
    
    // 🔥 OPTIMIZED OPEN GRAPH
    openGraph: {
      title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025 - ToolsVerse`,
      description: `Compare ${toolCount}+ top AI ${readableCategory} tools. Find the perfect AI ${readableCategory} software with ratings, reviews & pricing.`,
      type: 'website',
      url: `https://thetoolsverse.com/categories/${rawSlug}`,
      siteName: 'ToolsVerse - AI Tools Directory',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: `Best AI ${capitalizedCategory} Tools 2025 - ToolsVerse`,
        },
      ],
    },
    
    // 🔥 TWITTER OPTIMIZED
    twitter: {
      card: 'summary_large_image',
      title: `${toolCount}+ Best AI ${capitalizedCategory} Tools 2025`,
      description: `Discover the top AI ${readableCategory} tools with ratings, reviews & pricing comparisons.`,
      images: ['/logo.png'],
    },
    
    alternates: {
      canonical: `https://thetoolsverse.com/categories/${rawSlug}`,
    },
    
    // 🔥 ROBOTS & INDEXING
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
  };
}

export default function CategoryPage({ params, searchParams }) {
  const rawSlug = decodeURIComponent(params.slug);
  const sortParam = searchParams.sort || 'rating';

  // Convert "office-and-productivity" → "Office & Productivity"
  const readableCategory = rawSlug
    .replace(/-and-/g, ' & ')
    .replace(/-/g, ' ')
    .toLowerCase();
  
  const capitalizedCategory = readableCategory
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const filteredTools = tools.filter(tool =>
    (tool.category || []).some(cat => cat.toLowerCase() === readableCategory)
  );

  const sortedTools = filteredTools.slice().sort((a, b) => {
    if (sortParam === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortParam === 'price') {
      const pa = a.price === 'Free' ? 0 : parseFloat(a.price.replace(/[^\d.]/g, ''));
      const pb = b.price === 'Free' ? 0 : parseFloat(b.price.replace(/[^\d.]/g, ''));
      return pa - pb;
    }
    return (b.rating || 0) - (a.rating || 0);
  });
  
  // 🔥 ENHANCED JSON-LD STRUCTURED DATA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Best AI ${capitalizedCategory} Tools 2025`,
    "description": `Complete directory of ${filteredTools.length}+ best AI ${readableCategory} tools for 2025`,
    "url": `https://thetoolsverse.com/categories/${rawSlug}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `AI ${capitalizedCategory} Tools Directory`,
      "description": `Curated list of ${filteredTools.length}+ AI ${readableCategory} tools`,
      "numberOfItems": filteredTools.length,
      
      // In your JSON-LD structured data, replace the aggregateRating section:

"itemListElement": filteredTools.map((tool, index) => ({
  "@type": "ListItem",
  "position": index + 1,
  "item": {
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "url": `https://thetoolsverse.com/tools/${tool.slug}`,
    "applicationCategory": `AI ${capitalizedCategory}`,
    "operatingSystem": "Web-based",
    // Remove aggregateRating completely
    "offers": {
      "@type": "Offer",
      "price": tool.price === 'Free' ? "0" : tool.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "USD"
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
          "position": 3,
          "name": `AI ${capitalizedCategory} Tools`,
          "item": `https://thetoolsverse.com/categories/${rawSlug}`
        }
      ]
    }
  };

  return (
    <>
      {/* 🔥 ENHANCED JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 🔥 ADDITIONAL FAQ SCHEMA FOR BETTER SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `What are the best AI ${readableCategory} tools in 2025?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `The top AI ${readableCategory} tools include ${sortedTools.slice(0, 3).map(t => t.name).join(', ')}. Our directory features ${filteredTools.length}+ carefully curated AI ${readableCategory} tools with ratings, reviews, and pricing information.`
                }
              },
              {
                "@type": "Question", 
                "name": `Are there free AI ${readableCategory} tools available?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes! Many AI ${readableCategory} tools offer free plans or freemium versions. Check our directory above for tools marked as "Free" or with free tier options.`
                }
              },
              {
                "@type": "Question",
                "name": `How do I choose the best AI ${readableCategory} tool?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Consider your specific needs, budget, required features, and integration requirements. Read user reviews, compare ratings, and try free trials when available. Our directory helps you compare ${filteredTools.length}+ options.`
                }
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section - UPDATED WITH AI FOCUS */}
        <div className="relative overflow-hidden bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* Breadcrumb */}
            <nav className="flex mb-6 mt-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm">
                <li className="inline-flex items-center">
                  <a href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  {/* <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <a href="/categories" className="text-gray-500 hover:text-blue-600 transition-colors">Categories</a>
                  </div> */}
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900 font-medium">AI {capitalizedCategory}</span>
                  </div>
                </li>
              </ol>
            </nav>
            
            {/* Header Content - AI FOCUSED */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                {filteredTools.length}+ AI {capitalizedCategory} Tools • Updated 2025
              </div>
              
              {/* 🔥 AI-FOCUSED H1 TAG */}
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
                Best AI {capitalizedCategory} Tools 2025
                <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-2">
                  {filteredTools.length}+ Top AI {capitalizedCategory} Software
                </span>
              </h1>
              
              {/* 🔥 KEYWORD-RICH DESCRIPTION */}
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Discover the complete directory of <strong>{filteredTools.length}+ best AI {readableCategory} tools for 2025</strong>. 
                Compare top AI {readableCategory} software with ratings, reviews, pricing, and features. Find free and paid AI {readableCategory} apps 
                for business, productivity, and creativity. Updated daily with the latest AI innovations.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{filteredTools.length}+</div>
                  <div className="text-sm text-gray-500">AI Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2025</div>
                  <div className="text-sm text-gray-500">Updated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Free</div>
                  <div className="text-sm text-gray-500">Options Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools Grid Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              {/* No tools found content */}
            </div>
          ) : ( 
            <>
              {/* Filter/sort bar */}
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
              
              {/* Tools Grid */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
                    <ToolCard tool={tool} viewMode="grid" />
                  </div>
                ))}
              </div>

              {/* 🔥 ENHANCED SEO CONTENT SECTION */}
              <section className="max-w-4xl mx-auto mt-24 px-4 lg:px-0 prose prose-indigo prose-lg prose-headings:font-bold prose-headings:text-gray-800 prose-a:text-blue-600 prose-strong:text-gray-800">

                {/* AI-FOCUSED CONTENT */}
                <h2 id="what-are-ai-tools" className="text-3xl md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  The Complete Guide to AI {capitalizedCategory} Tools in 2025
                </h2>
                <p className="lead text-xl text-gray-600">
                  Artificial Intelligence has revolutionized the {readableCategory} industry. Today's <strong>AI {readableCategory} tools</strong> are not just software—they're intelligent partners that understand context, learn from patterns, and deliver results that would have been impossible just a few years ago. Whether you're a professional, entrepreneur, or creative, these AI-powered solutions can transform your {readableCategory} workflow entirely.
                </p>
                <p>
                  Our comprehensive directory features <strong>{sortedTools.length}+ carefully vetted AI {readableCategory} tools for 2025</strong>, each analyzed for performance, features, pricing, and user satisfaction. Let's explore what makes these tools special and how to choose the perfect one for your needs.
                </p>

                <hr className="my-12" />

                {/* Why AI Tools for This Category */}
                <h3 id="why-ai-tools" className="text-2xl md:text-3xl">
                  Why AI {capitalizedCategory} Tools Are Game-Changers
                </h3>
                <p>
                  Traditional {readableCategory} approaches often involve manual, time-consuming processes. AI {readableCategory} tools change the game by:
                </p>
                <ul>
                  <li>
                    <strong>Intelligent Automation:</strong> AI doesn't just automate—it makes smart decisions, adapting to your specific needs and improving over time.
                  </li>
                  <li>
                    <strong>Predictive Capabilities:</strong> Advanced algorithms can predict trends, suggest optimizations, and prevent issues before they occur.
                  </li>
                  <li>
                    <strong>Natural Language Processing:</strong> Many AI tools understand human language, making complex {readableCategory} tasks as simple as having a conversation.
                  </li>
                  <li>
                    <strong>Continuous Learning:</strong> Unlike static software, AI tools improve with use, becoming more accurate and efficient as they process more data.
                  </li>
                </ul>
                <blockquote>
                  <p>The best AI {readableCategory} tools don't replace human creativity—they amplify it, handling routine tasks so you can focus on strategy and innovation.</p>
                </blockquote>

                <hr className="my-12" />

                {/* Key Features */}
                <h3 id="ai-features" className="text-2xl md:text-3xl">
                  Essential AI Features in Modern {capitalizedCategory} Tools
                </h3>
                <p>
                  When evaluating the AI {readableCategory} tools in our directory above, look for these cutting-edge capabilities:
                </p>
                <h4><strong>🧠 Machine Learning Integration</strong></h4>
                <p>
                  The best tools use machine learning to understand your preferences, work patterns, and goals, providing increasingly personalized recommendations.
                </p>
                <h4><strong>🔮 Predictive Analytics</strong></h4>
                <p>
                  Advanced AI can forecast outcomes, suggest optimizations, and help you make data-driven decisions before problems arise.
                </p>
                <h4><strong>💬 Conversational AI</strong></h4>
                <p>
                  Many modern tools include chatbot interfaces or natural language processing, allowing you to interact with complex software using simple commands.
                </p>
                <h4><strong>🔄 Smart Integrations</strong></h4>
                <p>
                  AI-powered integrations go beyond simple data transfer—they understand context and can intelligently sync information across your entire tech stack.
                </p>
                <h4><strong>📊 Real-time Optimization</strong></h4>
                <p>
                  Unlike traditional software that requires manual adjustments, AI tools continuously optimize performance based on real-time feedback and results.
                </p>
                
                <hr className="my-12" />

                {/* Selection Guide */}
                <h3 id="choosing-ai-tool" className="text-2xl md:text-3xl">
                  How to Choose the Perfect AI {capitalizedCategory} Tool
                </h3>
                <p>
                  With {sortedTools.length}+ options in our curated directory, selection can be overwhelming. Follow this AI-focused evaluation framework:
                </p>
                <ol>
                  <li>
                    <strong>Define Your AI Needs:</strong> What specific tasks do you want AI to handle? Content generation? Data analysis? Process automation? Be specific about your AI requirements.
                  </li>
                  <li>
                    <strong>Evaluate AI Maturity:</strong> Look for tools with proven AI capabilities, not just AI marketing claims. Check for specific AI features, training data quality, and model performance metrics.
                  </li>
                  <li>
                    <strong>Consider Learning Curve:</strong> Some AI tools require training or configuration. Factor in the time needed to get the AI working optimally for your use case.
                  </li>
                  <li>
                    <strong>Test AI Accuracy:</strong> Use free trials to test the AI's accuracy with your specific type of {readableCategory} work. AI performance can vary significantly based on use case.
                  </li>
                  <li>
                    <strong>Plan for Scale:</strong> Consider how the AI will perform as your needs grow. The best AI tools become more valuable as they process more of your data.
                  </li>
                </ol>
                
                <hr className="my-12" />

                {/* Enhanced FAQ with AI focus */}
                <h3 id="ai-faq" className="text-2xl md:text-3xl">
                  AI {capitalizedCategory} Tools: Frequently Asked Questions
                </h3>
                
                <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold">What makes AI {readableCategory} tools better than traditional software?</summary>
                  <p className="mt-2 text-gray-700">
                    AI {readableCategory} tools offer intelligent automation, predictive capabilities, and continuous learning that traditional software lacks. They can adapt to your specific needs, make smart decisions, and improve over time. Top-rated options in our directory include{' '}
                    <strong>{sortedTools.slice(0, 3).map(t => t.name).join(', ')}</strong>.
                  </p>
                </details>
                
                <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold">Are there free AI {readableCategory} tools available in 2025?</summary>
                  <p className="mt-2 text-gray-700">
                    Yes! Many AI {readableCategory} tools offer generous free tiers or freemium models. These often include core AI features and are perfect for individuals and small teams. Look for tools marked "Free" in our directory above.
                  </p>
                </details>
                
                <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold">How accurate are AI {readableCategory} tools?</summary>
                  <p className="mt-2 text-gray-700">
                    AI accuracy varies by tool and use case. The best AI {readableCategory} tools in our directory achieve 90%+ accuracy for common tasks. However, accuracy improves as the AI learns from your specific data and preferences. Always test with your own use cases during trial periods.
                  </p>
                </details>
                
                <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="font-semibold">Do I need technical skills to use AI {readableCategory} tools?</summary>
                  <p className="mt-2 text-gray-700">
                    Most modern AI {readableCategory} tools are designed for non-technical users. They feature intuitive interfaces, conversational AI, and automated setup processes. The tools in our directory are selected partly for their user-friendliness and don't require programming knowledge.
                  </p>
                </details>

                <hr className="my-12" />

                {/* Conclusion */}
                <h3 id="conclusion-2025" className="text-2xl md:text-3xl">
                  The Future of AI {capitalizedCategory} is Here
                </h3>
                <p>
                  2025 marks a pivotal year for AI {readableCategory} tools. The technology has matured from experimental novelty to essential business infrastructure. The <strong>{sortedTools.length}+ AI {readableCategory} tools</strong> in our directory represent the cutting edge of what's possible when artificial intelligence meets {readableCategory} expertise.
                </p>
                <p>
                  Whether you choose a free tool to get started or invest in an enterprise AI solution, the key is to begin your AI journey today. The tools are here, they're proven, and they're ready to transform how you approach {readableCategory}. Explore our curated directory above and discover your perfect AI {readableCategory} partner.
                </p>

              </section>
              
              {/* Call-to-Action Section */}
              <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your {capitalizedCategory} Workflow?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore more AI tools across different categories or discover what makes ToolsVerse the #1 choice for AI tool discovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/browse-tools"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Browse All AI Tools
                  </a>
                  <a
                    href="/featured"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    View Featured AI Tools
                  </a>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}