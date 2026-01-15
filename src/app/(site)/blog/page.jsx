import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { getAllPosts, urlFor } from '@/lib/sanity';
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import { unstable_cache } from 'next/cache';

// 🔥 OPTIMIZED REVALIDATION
export const revalidate = 3600; // Update every hour

// ⚡️ CACHED DATA FETCHING (Combines Sanity + MongoDB)
const getBlogData = unstable_cache(
  async () => {
    // 1. Connect to MongoDB for Tool Counts
    await connectDB();

    // 2. Fetch Data in Parallel (Fastest method)
    const [posts, totalTools] = await Promise.all([
      getAllPosts(),
      Tool.countDocuments({}),
    ]);

    return {
      posts: posts || [],
      totalTools: totalTools || 770, // Fallback if DB fails
      currentYear: new Date().getFullYear()
    };
  },
  ['blog-page-data'],
  { revalidate: 3600 }
);

// 🔥 DYNAMIC METADATA (Always Accurate)
export async function generateMetadata() {
  try {
    const { posts, totalTools, currentYear } = await getBlogData();

    const pageTitle = `AI Tools Blog ${currentYear} | Latest AI Software Reviews & Guides`;
    const pageDescription = `Discover the latest AI tools, reviews, and guides. We cover ${totalTools}+ AI software, productivity hacks, and automation solutions. Updated daily.`;

    // 🔥 DYNAMIC KEYWORDS
    const keywords = [
      'AI tools blog',
      `AI software reviews ${currentYear}`,
      'best AI tools',
      'AI productivity guides',
      'latest AI software',
      'AI automation tools',
      'ToolsVerse blog',
      `${totalTools}+ AI tools`
    ];

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: keywords.join(', '),
      alternates: { canonical: 'https://thetoolsverse.com/blog' },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: 'https://thetoolsverse.com/blog',
        siteName: 'ToolsVerse - AI Tools Directory',
        type: 'website',
        images: [{ url: 'https://thetoolsverse.com/logo.png', width: 1200, height: 630, alt: pageTitle }],
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: ['https://thetoolsverse.com/logo.png'],
      },
      robots: {
        index: true,
        follow: true,
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'AI Tools Blog | ToolsVerse',
      description: 'Latest AI tools reviews and guides.',
    };
  }
}

export default async function BlogPage() {
  const { posts, totalTools, currentYear } = await getBlogData();

  // If no posts exist, show a nice empty state
  if (!posts || posts.length === 0) {
    return (
      <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900">Blog Coming Soon</h1>
          <p className="text-gray-600 mt-2">We are writing amazing content for you.</p>
          <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
            Back to Directory
          </Link>
        </div>
      </main>
    );
  }

  const latestPost = posts[0];
  const totalPosts = posts.length;

  // 🔥 JSON-LD SCHEMA (Google Rich Results)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': `ToolsVerse AI Tools Blog`,
    'description': `Expert articles covering ${totalTools}+ AI tools and software.`,
    'url': 'https://thetoolsverse.com/blog',
    'publisher': {
      '@type': 'Organization',
      'name': 'ToolsVerse',
      'logo': { '@type': 'ImageObject', 'url': 'https://thetoolsverse.com/logo.png' }
    },
    'blogPost': posts.slice(0, 5).map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'datePublished': post.publishedAt,
      'url': `https://thetoolsverse.com/blog/${post.slug}`,
      'author': { '@type': 'Person', 'name': post.author?.name || 'ToolsVerse Team' }
    }))
  };

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        {/* 🔥 HERO SECTION */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl mt-10 font-bold tracking-tight text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Tools Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Expert insights, reviews, and guides for the {currentYear} AI revolution.
              </p>

              {/* 🔥 DYNAMIC STATS (Real Numbers) */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {totalPosts} Expert Articles
                </div>

                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {totalTools}+ Tools Covered
                </div>

                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Updated Daily
                </div>
              </div>
            </div>

            {/* 🔥 FEATURED ARTICLE */}
            {latestPost && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Story</h2>
                <div className="max-w-4xl mx-auto">
                  <article className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <Link href={`/blog/${latestPost.slug}`} className="block">
                      <div className="relative overflow-hidden h-64 md:h-96 w-full">
                        {latestPost.mainImage ? (
                          <Image
                            src={urlFor(latestPost.mainImage).width(1200).height(600).url()}
                            alt={latestPost.mainImage.alt || latestPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-3xl font-bold">ToolsVerse</span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/95 text-blue-800 text-sm font-bold rounded-full shadow-md">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                          <span>
                            {new Date(latestPost.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric', month: 'long', day: 'numeric'
                            })}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{latestPost.readTime || '5 min read'}</span>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 mb-4">
                          {latestPost.title}
                        </h3>

                        {latestPost.excerpt && (
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {latestPost.excerpt}
                          </p>
                        )}

                        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                          Read Full Article <ArrowIcon />
                        </div>
                      </div>
                    </Link>
                  </article>
                </div>
              </section>
            )}

            {/* 🔥 ALL ARTICLES GRID */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post, index) => (
                  <article key={post._id} className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <Link href={`/blog/${post.slug}`} className="block flex-grow">
                      <div className="overflow-hidden relative h-52 w-full">
                        {post.mainImage ? (
                          <Image
                            src={urlFor(post.mainImage).width(800).height(450).url()}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        )}
                        {/* Category Badge */}
                        {post.categories && post.categories[0] && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 text-xs font-bold text-gray-800 rounded-md shadow-sm">
                              {post.categories[0].title}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-3">
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            {post.author?.image ? (
                              <Image src={post.author.image} alt="Author" width={24} height={24} className="rounded-full" />
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-gray-200" />
                            )}
                            <span className="text-gray-700 font-medium">{post.author?.name || 'Team'}</span>
                          </div>
                          <span className="text-gray-400">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* 🔥 CTA SECTION */}
            <section className="mt-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10 max-w-3xl mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore the AI Universe</h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 text-blue-50">
                  Browse our directory of {totalTools}+ AI tools across 100+ categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/browse-tools"
                    className="px-8 py-3.5 text-lg font-bold text-blue-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
                  >
                    Browse Tools
                  </Link>
                  <Link
                    href="/submit-tool"
                    className="px-8 py-3.5 text-lg font-bold text-white bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/30"
                  >
                    Submit Tool
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </section>
      </main>
    </>
  );
}

// Simple Arrow Icon Component
function ArrowIcon() {
  return (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}