import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { getAllPosts, urlFor } from '@/lib/sanity'

// 🔥 OPTIMIZED REVALIDATION FOR TRENDING CONTENT
export const revalidate = 30; // More frequent updates for AI trends

// 🔥 MASSIVELY ENHANCED SEO METADATA FOR MILLIONS OF USERS
export async function generateMetadata() {
  try {
    const posts = await getAllPosts();
    
    // 🔥 HIGH-VOLUME KEYWORD OPTIMIZED TITLES
    const pageTitle = 'AI Tools Blog 2025 | Latest AI Software Reviews & Guides - ToolsVerse';
    const pageDescription = 'Discover the latest AI tools, reviews, and guides. Stay updated with trending AI software, productivity tools, and automation solutions. Updated daily with expert insights.';
    
    // 🔥 TRENDING KEYWORDS FOR MASSIVE TRAFFIC
    const keywords = [
      'AI tools blog',
      'AI software reviews 2025',
      'best AI tools',
      'AI productivity guides',
      'AI tools directory blog',
      'latest AI software',
      'AI automation tools',
      'AI tools comparison',
      'trending AI apps',
      'AI tools for business',
      'free AI tools reviews',
      'AI workflow automation',
      'ToolsVerse blog'
    ];

    // 🔥 STRUCTURED DATA FOR BLOG LISTING (RICH RESULTS)
    const blogStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'ToolsVerse AI Tools Blog',
      'description': pageDescription,
      'url': 'https://thetoolsverse.com/blog',
      'publisher': {
        '@type': 'Organization',
        'name': 'ToolsVerse',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://thetoolsverse.com/logo.png',
          'width': 300,
          'height': 300
        }
      },
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': posts.map((post, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'BlogPosting',
            '@id': `https://thetoolsverse.com/blog/${post.slug}`,
            'headline': post.title,
            'datePublished': post.publishedAt,
            'dateModified': post._updatedAt || post.publishedAt,
            'image': post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : 'https://thetoolsverse.com/logo.png',
            'author': {
              '@type': 'Person',
              'name': post.author?.name || 'ToolsVerse Team'
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'ToolsVerse',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://thetoolsverse.com/logo.png'
              }
            },
            'url': `https://thetoolsverse.com/blog/${post.slug}`,
            'description': post.excerpt || `${post.title} - Complete guide on ToolsVerse AI directory`
          }
        }))
      },
      'about': {
        '@type': 'Thing',
        'name': 'AI Tools and Software'
      }
    };

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: keywords.join(', '),
      
      // 🔥 CANONICAL URL
      alternates: {
        canonical: 'https://thetoolsverse.com/blog',
      },
      
      // 🔥 ENHANCED OPEN GRAPH FOR SOCIAL SHARING
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: 'https://thetoolsverse.com/blog',
        siteName: 'ToolsVerse - AI Tools Directory',
        type: 'website',
        locale: 'en_US',
        images: [
          {
            url: 'https://thetoolsverse.com/logo.png',
            width: 1200,
            height: 630,
            alt: 'ToolsVerse AI Tools Blog - Latest Reviews and Guides',
            type: 'image/png'
          },
        ],
      },
      
      // 🔥 TWITTER OPTIMIZATION
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        site: '@ToolsVerse',
        creator: '@ToolsVerse',
        images: ['https://thetoolsverse.com/logo.png'],
      },
      
      // 🔥 ADVANCED SEO ROBOTS
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
      
      // 🔥 ADDITIONAL SEO METADATA
      other: {
        'theme-color': '#3b82f6',
        'article:section': 'AI Tools',
        'article:tag': keywords.join(','),
        'og:updated_time': new Date().toISOString(),
      },
      
      // 🔥 STRUCTURED DATA IN METADATA
      'structuredData': blogStructuredData
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'AI Tools Blog | ToolsVerse Directory',
      description: 'Latest AI tools reviews and guides on ToolsVerse.',
    };
  }
}

export default async function BlogPage() {
  try {
    const posts = await getAllPosts();

    if (!posts || posts.length === 0) {
      return (
        <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Coming Soon!</h1>
                <p className="text-xl text-gray-600">We're working on amazing AI tools content for you.</p>
              </div>
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Explore AI Tools Directory
              </Link>
            </div>
          </div>
        </main>
      );
    }

    // 🔥 CALCULATE BLOG STATS FOR SEO
    const totalPosts = posts.length;
    const latestPost = posts[0];
    
    // Get structured data from metadata
    const metadata = await generateMetadata();
    
    return (
      <>
        {/* 🔥 STRUCTURED DATA SCRIPT */}
        <Script
          id="blog-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.structuredData)
          }}
        />

        <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
          {/* 🔥 HERO SECTION WITH SEO-OPTIMIZED CONTENT */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl mt-10 font-bold tracking-tight text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI Tools Blog
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Discover the latest AI tools, expert reviews, and comprehensive guides. 
                  Stay ahead with trending AI software and automation solutions.
                </p>
                
                {/* 🔥 BLOG STATS FOR AUTHORITY */}
                <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {totalPosts}+ Expert Articles
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Updated Daily
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    1200+ Tools Covered
                  </div>
                </div>

                {/* 🔥 SEARCH BOX FOR USER ENGAGEMENT */}
                
              </div>

              {/* 🔥 FEATURED ARTICLE SECTION */}
              {latestPost && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
                  <div className="max-w-4xl mx-auto">
                    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
                      <Link href={`/blog/${latestPost.slug}`} className="block">
                        <div className="relative overflow-hidden">
                          {latestPost.mainImage ? (
                            <Image
                              src={urlFor(latestPost.mainImage).width(1200).height(600).url()}
                              alt={latestPost.mainImage.alt || `${latestPost.title} - Featured AI tools article`}
                              width={1200}
                              height={600}
                              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                              priority
                            />
                          ) : (
                            <div className="w-full h-80 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                              <span className="text-white text-2xl font-bold">ToolsVerse</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="p-8">
                          <div className="flex items-center mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                              Featured
                            </span>
                            <span className="ml-3 text-sm text-gray-500">
                              {new Date(latestPost.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 mb-4 leading-tight">
                            {latestPost.title}
                          </h3>
                          
                          {latestPost.excerpt && (
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                              {latestPost.excerpt}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {latestPost.author?.image ? (
                                <Image
                                  src={latestPost.author.image}
                                  alt={latestPost.author.name || 'Author'}
                                  width={50}
                                  height={50}
                                  className="rounded-full object-cover"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                  <span className="text-white text-lg font-semibold">
                                    {(latestPost.author?.name || 'TT').charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {latestPost.author?.name || 'ToolsVerse Team'}
                                </p>
                                <p className="text-sm text-gray-500">AI Tools Expert</p>
                              </div>
                            </div>
                            
                            <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                              Read Article
                              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>
                </section>
              )}

              {/* 🔥 ALL ARTICLES SECTION */}
              <section>
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Latest AI Tools Articles</h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{totalPosts} articles</span>
                  </div>
                </div>

                {/* 🔥 ENHANCED RESPONSIVE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post, index) => (
                    <article key={post._id} className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                      <Link href={`/blog/${post.slug}`} className="block flex-grow">
                        <div className="overflow-hidden relative">
                          {post.mainImage ? (
                            <Image
                              src={urlFor(post.mainImage).width(800).height(450).url()}
                              alt={post.mainImage.alt || `${post.title} - AI tools guide`}
                              width={800}
                              height={450}
                              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                              loading={index > 2 ? "lazy" : "eager"}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-52 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          )}
                          
                          {/* 🔥 CATEGORY BADGE */}
                          {post.categories && post.categories.length > 0 && (
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-sm">
                                {post.categories[0].title}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2 mb-3 leading-tight">
                            {post.title}
                          </h3>
                          
                          {post.excerpt && (
                            <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                              {post.excerpt}
                            </p>
                          )}

                          {/* 🔥 ENHANCED AUTHOR SECTION */}
                          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {post.author?.image ? (
                                <Image
                                  src={post.author.image}
                                  alt={post.author.name || 'Author'}
                                  width={40}
                                  height={40}
                                  className="rounded-full object-cover flex-shrink-0"
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                  <span className="text-white text-sm font-semibold">
                                    {(post.author?.name || 'TT').charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-800 truncate">
                                  {post.author?.name || 'ToolsVerse Team'}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                  })}
                                </p>
                              </div>
                            </div>
                            
                            <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>

              {/* 🔥 CTA SECTION FOR DIRECTORY */}
              <section className="mt-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
                <div className="relative z-10 max-w-3xl mx-auto px-8">
                  <h2 className="text-4xl font-bold mb-6">Ready to Discover AI Tools?</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Explore our complete directory of 1200+ AI tools across 100+ categories. 
                    Find the perfect AI solution for your needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/featured"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-xl"
                    >
                      Featured Tools
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/submit-tool"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
                    >
                      Submit Your AI Tool
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </section>
          
        </main>
      </>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return (
      <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unable to Load Blog</h1>
            <p className="text-gray-600 mb-8">We're experiencing technical difficulties. Please try again later.</p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Back to AI Tools Directory
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
