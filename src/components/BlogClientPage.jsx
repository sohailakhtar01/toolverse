"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogClientPage({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');
  const [visiblePosts, setVisiblePosts] = useState(9); // Number of posts to show initially

  // Memoize the filtering and sorting logic to prevent re-running on every render
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    // Filter by category if one is selected
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }

    // Sort the results
    result.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      if (sortOrder === 'oldest') {
        return dateA - dateB;
      }
      return dateB - dateA; // Default to 'latest'
    });

    return result;
  }, [posts, selectedCategory, sortOrder]);
  
  const postsToShow = filteredAndSortedPosts.slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 9); // Load 9 more posts
  };
  
  // Create a unique list of categories for the filter dropdown
  const categories = useMemo(() => {
    const allCategories = posts.map(p => p.category).filter(Boolean);
    return [...new Set(allCategories)];
  }, [posts]);

  // Generate structured data on the client using the props
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ToolVault - AI Tools Directory Blog",
    "description": "Discover, compare, and explore AI tools across categories including productivity, design, marketing, and more. Expert reviews and insights from ToolVault.",
    "url": "https://toolverse-brown.vercel.app/blog",
    "blogPost": posts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://toolverse-brown.vercel.app/blog/${post.slug.current}`,
        "datePublished": post.publishedAt,
        "dateModified": post._updatedAt || post.publishedAt,
        "image": post.mainImage?.asset?.url ? {
            "@type": "ImageObject",
            "url": post.mainImage.asset.url,
            "width": 1200,
            "height": 630
        } : {
            "@type": "ImageObject",
            "url": "https://toolverse-brown.vercel.app/og-blog.jpg",
            "width": 1200,
            "height": 630
        },
        "author": {
            "@type": "Person",
            "name": post.author?.name || "ToolVault Team",
        },
        "publisher": {
            "@type": "Organization",
            "name": "ToolVault",
            "logo": {
                "@type": "ImageObject",
                "url": "https://toolverse-brown.vercel.app/logo.png"
            }
        }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 text-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 font-space-grotesk">
                AI Tools Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed font-montserrat">
                Discover the latest AI innovations, expert reviews, and actionable insights to supercharge your business with cutting-edge technology
            </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 py-16">
        {/* Blog Posts Grid */}
        <section>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-space-grotesk mb-2">
                Latest Articles
              </h2>
              <p className="text-gray-600 font-montserrat">
                Stay updated with the latest AI tools, reviews, and industry insights
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <select 
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none font-montserrat bg-white"
                aria-label="Filter articles by category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <div className="flex items-center space-x-2 text-sm text-gray-500 font-montserrat">
                <span>Sort by:</span>
                <select 
                    className="border border-gray-200 rounded-lg px-2 py-1 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>

          {postsToShow.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {postsToShow.map((post, index) => (
                <article 
                  key={post._id}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
                >
                  {/* FIX: Use optional chaining to prevent error if image URL is missing */}
                  {post.mainImage?.asset?.url && (
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3} // Only prioritize images above the fold
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full">
                                {post.category || 'AI Tools'}
                            </span>
                            <time className="text-sm text-gray-500">
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                            </time>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2 font-space-grotesk">
                            <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed font-montserrat">
                            {post.excerpt}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        {post.author?.image?.asset?.url && (
                            <Image
                            src={post.author.image.asset.url}
                            alt={post.author.name || 'Author'}
                            width={32}
                            height={32}
                            className="rounded-full"
                            />
                        )}
                        <span className="text-sm font-medium text-gray-900 font-montserrat">
                            {post.author?.name || 'ToolVault Team'}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug.current}`} className="text-sm font-semibold text-purple-600 hover:text-purple-800">
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 col-span-full">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600">Try adjusting your filters, or check back soon!</p>
            </div>
          )}
        </section>

        {/* Load More Button */}
        {visiblePosts < filteredAndSortedPosts.length && (
          <div className="text-center mt-16">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Load More Articles
            </button>
          </div>
        )}
      </main>
    </>
  )
}