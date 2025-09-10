import { getPost, getAllPosts, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'

// ✅ SEO OPTIMIZED - Better revalidation for fresh content
export const revalidate = 30; // Revalidate every 30 seconds for trending content

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// 🔥 ENHANCED METADATA FOR MAXIMUM SEO
export async function generateMetadata({ params }) {
  try {
    const post = await getPost(params.slug)
    
    if (!post) {
      return {
        title: 'Blog Post Not Found | ToolsVerse',
        description: 'The requested AI tools blog post could not be found on ToolsVerse directory.',
      }
    }

    // 🔥 SEO-OPTIMIZED TITLES WITH KEYWORDS
    const pageTitle = `${post.title} | ToolsVerse - AI Tools Directory 2025`;
    const pageDescription = post.excerpt || `${post.title.substring(0, 120)}... Read the complete guide on ToolsVerse - your trusted AI tools directory with 1200+ tools.`;
    
    // 🔥 EXTRACT KEYWORDS FROM CONTENT
    const keywords = [
      'AI tools',
      'AI productivity tools', 
      'AI workflow automation',
      'best AI tools 2025',
      'AI tools directory',
      'ToolsVerse',
      ...(post.categories?.map(cat => cat.title) || [])
    ];

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: keywords.join(', '),
      
      // 🔥 CANONICAL URL FOR DUPLICATE CONTENT PREVENTION  
      alternates: {
        canonical: `https://thetoolsverse.com/blog/${params.slug}`,
      },
      
      // 🔥 ENHANCED OPEN GRAPH
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `https://thetoolsverse.com/blog/${params.slug}`,
        siteName: 'ToolsVerse - AI Tools Directory',
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt || post.publishedAt,
        authors: [post.author?.name || 'ToolsVerse Team'],
        section: 'AI Tools Blog',
        tags: keywords,
        images: post.mainImage ? [
          {
            url: urlFor(post.mainImage).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: post.mainImage.alt || post.title,
            type: 'image/jpeg',
          },
        ] : [{
          url: 'https://thetoolsverse.com/logo.png',
          width: 1200,
          height: 630,
          alt: 'ToolsVerse AI Tools Directory',
          type: 'image/png',
        }],
      },
      
      // 🔥 ENHANCED TWITTER CARDS
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        creator: '@ToolsVerse',
        site: '@ToolsVerse',
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : ['https://thetoolsverse.com/logo.png'],
      },
      
      // 🔥 ARTICLE-SPECIFIC ROBOTS
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
      
      // 🔥 ADDITIONAL SEO META
      other: {
        'article:author': post.author?.name || 'ToolsVerse Team',
        'article:published_time': post.publishedAt,
        'article:modified_time': post._updatedAt || post.publishedAt,
        'article:section': 'AI Tools',
        'article:tag': keywords.join(','),
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'AI Tools Blog | ToolsVerse',
      description: 'Discover the latest AI tools and insights on ToolsVerse.',
    }
  }
}

// 🔥 ENHANCED PORTABLE TEXT COMPONENTS WITH SEO
const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || 'AI tools illustration'}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto shadow-lg"
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    // 🔥 SEO-OPTIMIZED HEADING STRUCTURE
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-800 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-gray-700 text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 italic my-6 text-gray-700 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-800 underline font-medium"
        target={value.href.startsWith('http') ? "_blank" : "_self"}
        rel={value.href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-800">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-2 text-gray-700 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-2 text-gray-700 leading-relaxed">{children}</li>
    ),
  },
}

export default async function BlogPost({ params }) {
  try {
    const post = await getPost(params.slug)

    if (!post) {
      notFound()
    }

    // 🔥 CALCULATE READING TIME
    const wordsPerMinute = 200;
    const wordCount = post.body?.reduce((count, block) => {
      if (block._type === 'block' && block.children) {
        return count + block.children.reduce((childCount, child) => 
          childCount + (child.text ? child.text.split(' ').length : 0), 0);
      }
      return count;
    }, 0) || 0;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    // 🔥 STRUCTURED DATA FOR ARTICLE
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt || post.title,
      "image": post.mainImage ? [
        urlFor(post.mainImage).width(1200).height(630).url(),
        urlFor(post.mainImage).width(800).height(600).url(),
        urlFor(post.mainImage).width(400).height(300).url()
      ] : ["https://thetoolsverse.com/logo.png"],
      "datePublished": post.publishedAt,
      "dateModified": post._updatedAt || post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author?.name || "ToolsVerse Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ToolsVerse",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thetoolsverse.com/logo.png",
          "width": 300,
          "height": 300
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://thetoolsverse.com/blog/${params.slug}`
      },
      "wordCount": wordCount,
      "articleSection": "AI Tools",
      "inLanguage": "en-US"
    };

    return (
      <>
        {/* 🔥 STRUCTURED DATA SCRIPT */}
        <Script
          id="article-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="bg-white">
          {/* 🔥 SEO-OPTIMIZED BREADCRUMB NAVIGATION */}
          <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
            <div className="container mx-auto px-4 max-w-4xl">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link 
                    href="/" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ToolsVerse
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    AI Tools Blog
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li 
                  className="text-gray-700 truncate max-w-md"
                  aria-current="page"
                >
                  {post.title}
                </li>
              </ol>
            </div>
          </nav>

          <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* 🔥 ENHANCED ARTICLE HEADER */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>
              
              {/* 🔥 READING TIME & ENGAGEMENT METRICS */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-6">
                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    {post.author?.image ? (
                      <Image
                        src={post.author.image}
                        alt={post.author.name || 'Author'}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">
                          {(post.author?.name || 'TT').charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">
                        {post.author?.name || 'ToolsVerse Team'}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span>•</span>
                        <span>{readingTime} min read</span>
                        <span>•</span>
                        <span>{wordCount} words</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 🔥 ENHANCED FEATURED IMAGE */}
              {post.mainImage && (
                <figure className="mb-8">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                    alt={post.mainImage.alt || post.title}
                    width={1200}
                    height={600}
                    className="rounded-xl w-full h-auto shadow-2xl"
                    priority
                  />
                  {post.mainImage.alt && (
                    <figcaption className="text-sm text-gray-500 text-center mt-4 italic">
                      {post.mainImage.alt}
                    </figcaption>
                  )}
                </figure>
              )}
            </header>

            {/* 🔥 ENHANCED ARTICLE BODY */}
            <div className="prose prose-lg prose-blue max-w-none">
              {post.body && post.body.length > 0 ? (
                <PortableText 
                  value={post.body} 
                  components={portableTextComponents}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 italic text-lg">Content is being updated...</p>
                  <p className="text-gray-400 text-sm mt-2">Check back soon for the complete guide!</p>
                </div>
              )}
            </div>

            {/* 🔥 SOCIAL SHARING BUTTONS */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <div className="flex space-x-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://thetoolsverse.com/blog/${params.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://thetoolsverse.com/blog/${params.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <Link 
                  href="/blog" 
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  More AI Tools Articles
                </Link>
              </div>
            </div>

            {/* 🔥 RELATED ARTICLES CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Discover More AI Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Explore our complete directory of 1200+ AI tools across 100+ categories.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Browse All AI Tools
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error loading blog post:', error);
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Unable to Load Article</h1>
        <p className="text-gray-600 mb-8">We're working on fixing this issue. Please try again later.</p>
        <Link 
          href="/blog"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to AI Tools Blog
        </Link>
      </div>
    )
  }
}
