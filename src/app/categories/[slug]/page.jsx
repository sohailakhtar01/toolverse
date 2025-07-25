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