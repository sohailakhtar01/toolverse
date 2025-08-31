import ToolCard from '@/components/ToolCard';
import tools from '@/data/tools';

export async function generateStaticParams() {
  const categoriesSet = new Set();
  
  tools.forEach(tool => {
    (tool.category || []).forEach(cat => {
      const slug = cat
        .toLowerCase()
        .replace(/ & /g, '-and-')
        .replace(/\s+/g, '-');
      categoriesSet.add(slug);
    });
  });
  
  return Array.from(categoriesSet).map(slug => ({ slug }));
}

// Generate metadata for SEO
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
    title: `${capitalizedCategory} Tools - Discover ${toolCount} Professional Tools`,
    description: `Explore our curated collection of ${toolCount} ${readableCategory} tools. Find the perfect solution for your ${readableCategory.toLowerCase()} needs with detailed reviews and comparisons.`,
    keywords: `${readableCategory}, tools, software, ${capitalizedCategory.toLowerCase()} solutions, productivity`,
    openGraph: {
      title: `${capitalizedCategory} Tools Collection`,
      description: `Discover ${toolCount} carefully selected ${readableCategory} tools to boost your productivity and efficiency.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalizedCategory} Tools Collection`,
      description: `Discover ${toolCount} carefully selected ${readableCategory} tools to boost your productivity and efficiency.`,
    },
    alternates: {
      canonical: `/categories/${rawSlug}`,
    },
  };
}

export default function CategoryPage({ params, searchParams }) {
  const rawSlug = decodeURIComponent(params.slug);

  // ✅ Step 1: Get the sort parameter from the URL, default to 'rating'
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

  // ✅ Step 2: Sort the tools based on the sortParam
  const sortedTools = filteredTools.slice().sort((a, b) => {
    if (sortParam === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortParam === 'price') {
      const pa = a.price === 'Free' ? 0 : parseFloat(a.price.replace(/[^\d.]/g, ''));
      const pb = b.price === 'Free' ? 0 : parseFloat(b.price.replace(/[^\d.]/g, ''));
      return pa - pb;
    }
    // Default to sorting by rating (descending)
    return (b.rating || 0) - (a.rating || 0);
  });
  
  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${capitalizedCategory} Tools`,
    "description": `A curated collection of ${filteredTools.length} ${readableCategory} tools`,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || ''}/categories/${rawSlug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": filteredTools.length,
      "itemListElement": filteredTools.map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.name,
          "description": tool.description,
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || ''}/tools/${tool.slug}`,
          "applicationCategory": capitalizedCategory,
        }
      }))
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
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
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900 font-medium">{capitalizedCategory}</span>
                  </div>
                </li>
              </ol>
            </nav>
            
            {/* Header Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'} Available
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
                {capitalizedCategory}
                <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-2">
                  Tools Collection
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Discover our carefully curated selection of {filteredTools.length} professional {readableCategory} tools. 
                Each tool has been evaluated for quality, functionality, and user experience to help you make the best choice for your needs.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{filteredTools.length}</div>
                  <div className="text-sm text-gray-500">Tools Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-500">Curated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Free</div>
                  <div className="text-sm text-gray-500">to Browse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools Grid Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              {/* ... (no changes in the "No Tools Found" block) ... */}
            </div>
          ) : ( 
            <>
              {/* ✅ Step 3: Add the filter/sort bar with the new dropdown form */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-sm">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Showing {sortedTools.length} {sortedTools.length === 1 ? 'tool' : 'tools'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Find the perfect {readableCategory} solution for your needs
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
              
              {/* ✅ Step 4: Loop over sortedTools to render the grid */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                role="list"
                aria-label={`${capitalizedCategory} tools`}
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


{/* /////////////////changing here /////////////////////// */}
              {/* 📘 SEO Content Section (simulate a blog post) */}
{/* ///////////////// START: NEW SEO CONTENT SECTION /////////////////////// */}
<section className="max-w-4xl mx-auto mt-24 px-4 lg:px-0 prose prose-indigo prose-lg prose-headings:font-bold prose-headings:text-gray-800 prose-a:text-blue-600 prose-strong:text-gray-800">

  {/* --- Introduction: The "Why" --- */}
  <h2 id="what-are-tools" className="text-3xl md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
    An In-Depth Guide to {capitalizedCategory} Tools
  </h2>
  <p className="lead text-xl text-gray-600">
    In today's fast-paced digital world, staying ahead means working smarter, not just harder. That's where <strong>{capitalizedCategory} tools</strong> come in. These powerful applications are specifically designed to streamline, automate, and enhance tasks related to {readableCategory}. Whether you're a solo creator, a small business owner, or part of a large enterprise, the right tool can fundamentally change your workflow, saving you countless hours and elevating the quality of your work.
  </p>
  <p>
    This guide will walk you through everything you need to know. We'll explore what these tools are, the incredible benefits they offer, key features to look for, and how to choose the perfect one from our curated list of <strong>{sortedTools.length} top-tier options</strong> above. Let's dive in! 🚀
  </p>

  <hr className="my-12" />

  {/* --- The Problem & Solution --- */}
  <h3 id="why-use-tools" className="text-2xl md:text-3xl">
    Why Do You Need a {capitalizedCategory} Tool?
  </h3>
  <p>
    Are you spending too much time on repetitive {readableCategory} tasks? Do you find it challenging to maintain consistency and quality across your projects? You're not alone. Many professionals face bottlenecks that stifle creativity and productivity. {capitalizedCategory} tools address these pain points directly by:
  </p>
  <ul>
    <li>
      <strong>Automating Repetitive Work:</strong> Free up your valuable time by letting software handle the tedious, manual parts of your {readableCategory} process.
    </li>
    <li>
      <strong>Boosting Efficiency & Speed:</strong> Complete tasks in a fraction of the time it would take manually, allowing you to take on more projects and meet tight deadlines.
    </li>
    <li>
      <strong>Enhancing Quality & Accuracy:</strong> Leverage AI and advanced algorithms to reduce human error, ensure consistency, and produce professional-grade results every time.
    </li>
    <li>
      <strong>Unlocking New Capabilities:</strong> Gain access to features and possibilities that would be difficult or impossible to achieve without specialized software, sparking new creative ideas.
    </li>
  </ul>
  <blockquote>
    <p>Think of these tools not as a replacement for your skills, but as a powerful partner that amplifies your talent and expertise.</p>
  </blockquote>

  <hr className="my-12" />

  {/* --- Key Features Deep Dive --- */}
  <h3 id="key-features" className="text-2xl md:text-3xl">
    Key Features to Look For in {capitalizedCategory} Tools
  </h3>
  <p>
    When Browse the tools above, you'll notice a variety of features. Here are some of the most important ones to consider, which are common across the best-in-class {readableCategory} platforms:
  </p>
  <h4><strong>🤖 AI-Powered Assistance</strong></h4>
  <p>
    Many modern tools incorporate Artificial Intelligence to provide smart suggestions, automate complex steps, and analyze data. This can be a game-changer for improving efficiency and the final output.
  </p>
  <h4><strong>🔄 Seamless Integrations</strong></h4>
  <p>
    A great tool should fit into your existing workflow. Look for integrations with other popular apps and services you already use (e.g., Google Drive, Slack, CRMs, etc.). This prevents you from being locked into a single ecosystem.
  </p>
  <h4><strong>📊 Analytics & Reporting</strong></h4>
  <p>
    How do you know if a tool is effective? Look for built-in analytics that track performance, usage, and ROI. Data-driven insights are crucial for optimizing your strategy.
  </p>
  <h4><strong>🤝 Collaboration Features</strong></h4>
  <p>
    If you work in a team, features like real-time editing, commenting, and role-based access are essential for maintaining a smooth and collaborative process.
  </p>
  <h4><strong>🎨 Intuitive User Interface (UI)</strong></h4>
  <p>
    A powerful tool is useless if it's impossible to use. The best {readableCategory} tools have clean, user-friendly interfaces that require minimal training to master, helping you get value from day one.
  </p>
  
  <hr className="my-12" />

  {/* --- How to Choose the Right Tool --- */}
  <h3 id="how-to-choose" className="text-2xl md:text-3xl">
    A Step-by-Step Guide to Choosing Your Perfect Tool
  </h3>
  <p>
    With {sortedTools.length} options to choose from, picking the right one can feel daunting. Follow this simple 5-step process to make the best decision for your specific needs.
  </p>
  <ol>
    <li>
      <strong>Define Your Core Needs:</strong> What is the #1 problem you need to solve? Are you looking for a simple tool for a single task or a comprehensive suite? Write down your top 3-5 "must-have" features.
    </li>
    <li>
      <strong>Consider Your Budget:</strong> Determine what you're willing to spend. Many tools listed here offer excellent <strong>free tiers</strong> or affordable starter plans. Compare the pricing against the features you need.
    </li>
    <li>
      <strong>Check Reviews and Ratings:</strong> We've curated the best tools, but user reviews can provide real-world insights into a tool's strengths and weaknesses. Pay attention to comments about customer support and ease of use.
    </li>
    <li>
      <strong>Evaluate Ease of Use:</strong> A tool should save you time, not create a new learning curve. Look for tools with good documentation, tutorials, and an intuitive design.
    </li>
    <li>
      <strong>Utilize Free Trials:</strong> The best way to know if a tool is right for you is to use it. Take advantage of free trials or freemium plans to test the software with your own projects before committing.
    </li>
  </ol>
  
  <hr className="my-12" />

  {/* --- Expanded & Dynamic FAQ Section --- */}
  <h3 id="faq" className="text-2xl md:text-3xl">
    Frequently Asked Questions (FAQs)
  </h3>
  <p>
    Here are answers to some common questions about {readableCategory} tools.
  </p>
  
  <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
    <summary className="font-semibold">Which is the best {readableCategory} tool?</summary>
    <p className="mt-2 text-gray-700">
      The "best" tool really depends on your specific goals, budget, and workflow. However, based on our ratings and user feedback, some of the most popular and highly-regarded tools in this category include{' '}
      <strong>
        {/* Dynamically list the top 3 tools */}
        {sortedTools.slice(0, 3).map(t => t.name).join(', ')}
      </strong>.
      We recommend starting your search by looking at those options on our list above.
    </p>
  </details>
  
  <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
    <summary className="font-semibold">Are there free {readableCategory} tools available?</summary>
    <p className="mt-2 text-gray-700">
      <strong>Absolutely!</strong> Many of the tools we've listed offer generous free plans that are perfect for individuals, freelancers, and small teams just getting started. These free tiers often include core features and are a great way to test the platform's capabilities without any financial commitment. Just look for the "Free" or "Freemium" tag on our tool cards.
    </p>
  </details>
  
  <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
    <summary className="font-semibold">How much do {readableCategory} tools typically cost?</summary>
    <p className="mt-2 text-gray-700">
      Pricing varies widely. You can find free tools, simple tools for as little as $5-$10 per month, and comprehensive enterprise solutions that can cost hundreds of dollars per month. Our list includes a range of options to fit every budget. Use the "Sort by: Price" filter at the top of the page to easily compare costs.
    </p>
  </details>
  
  <details className="mt-4 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
    <summary className="font-semibold">How do I get started with a {readableCategory} tool?</summary>
    <p className="mt-2 text-gray-700">
      Getting started is easy! First, use our guide and the list above to identify a tool that matches your needs. Click on it to learn more or visit its website. Most tools offer a simple sign-up process, often with just an email address. From there, follow their onboarding tutorials or explore their knowledge base to learn the ropes. Start with a small, simple project to get comfortable with the interface.
    </p>
  </details>

  <hr className="my-12" />

  {/* --- Conclusion --- */}
  <h3 id="conclusion" className="text-2xl md:text-3xl">
    Final Thoughts: Elevate Your Workflow Today
  </h3>
  <p>
    The right <strong>{capitalizedCategory} tool</strong> is more than just software—it's an investment in your productivity, creativity, and professional growth. By automating mundane tasks and unlocking new efficiencies, these tools empower you to focus on what truly matters: delivering high-impact work.
  </p>
  <p>
    We've done the hard work of vetting and curating the top {sortedTools.length} tools on the market. Now it's your turn. Explore the list at the top of this page, compare your options, and take the first step toward a more streamlined and powerful workflow. Your future self will thank you.
  </p>

</section>
{/* ///////////////// END: NEW SEO CONTENT SECTION /////////////////////// */}
{/* /////////////////changing here /////////////////////// */}
              
              {/* Call-to-Action Section */}
              <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Can't find what you're looking for?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore our other categories or suggest a tool you'd like to see added to our collection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/browse-tools"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Browse All Categories
                  </a>
                  <a
                    href="/how-it-works"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    How It Works 🚀
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