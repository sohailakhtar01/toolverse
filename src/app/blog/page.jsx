import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, urlFor } from '@/lib/sanity'
export const revalidate = 60; // 👈 Add this here

// SEO: Generate dynamic metadata for the page
export async function generateMetadata() {
  try {
    const posts = await getAllPosts();
    const pageTitle = 'From the Blog | Strategies for Productivity & Growth';
    const pageDescription = 'Explore our latest articles on email productivity, deliverability, and strategies to help you and your team succeed.';

    // SEO: Generate structured data for rich results
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': pageTitle,
      'description': pageDescription,
      'itemListElement': posts.map((post, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'BlogPosting',
          '@id': `https://www.thetoolsverse.com/blog/${post.slug}`, // Fixed: removed .current
          'headline': post.title,
          'datePublished': post.publishedAt,
          'image': post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null,
          'author': {
            '@type': 'Person',
            'name': post.author?.name || 'Staff Writer'
          }
        }
      }))
    };

    return {
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: 'https://www.thetoolsverse.com/blog',
      },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: 'https://www.thetoolsverse.com/blog',
        siteName: 'Your Site Name',
        type: 'website',
        images: [
          {
            url: 'https://www.thetoolsverse.com/og-blog.jpg',
            width: 1200,
            height: 630,
          },
        ],
      },
      other: {
        'script[type="application/ld+json"]': JSON.stringify(jsonLd)
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'From the Blog',
      description: 'Explore our latest articles',
    };
  }
}

export default async function BlogPage() {
  try {
    const posts = await getAllPosts();

    if (!posts || posts.length === 0) {
      return (
        <main className="bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900">No posts found</h1>
              <p className="mt-4 text-gray-500">Check back later for new content!</p>
            </div>
          </div>
        </main>
      );
    }

    return (
      <main className="bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-left mb-12">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              From the Blog
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Insights on productivity, marketing, and reaching your goals.
            </p>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={post._id} className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(800).height(450).url()}
                        alt={post.mainImage.alt || `${post.title} - Blog post image`}
                        width={800}
                        height={450}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        priority={index < 3}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-52 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">No Image</span>
                      </div>
                    )}
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 text-gray-600 text-base leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>

                  {/* Author and Date Section - Pushed to the bottom */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-3 mt-auto">
                    {post.author?.image ? (
                      <Image
                        src={post.author.image}
                        alt={post.author.name || 'Author'}
                        width={40}
                        height={40}
                        className="rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-semibold">
                          {(post.author?.name || 'SW').charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {post.author?.name || 'Staff Writer'}
                      </p>
                      <p className="text-sm text-gray-500">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return (
      <main className="bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Error Loading Posts</h1>
            <p className="mt-4 text-gray-500">Something went wrong. Please try again later.</p>
          </div>
        </div>
      </main>
    );
  }
}