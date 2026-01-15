import { getPost, getAllPosts, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import { unstable_cache } from 'next/cache';

// ✅ SEO OPTIMIZED - Update every hour (sufficient for blogs)
export const revalidate = 3600;

// ⚡️ CACHED DATA FETCHING (Sanity + MongoDB Combined)
const getPostWithStats = unstable_cache(
  async (slug) => {
    await connectDB();

    // Fetch Post and Tool Count in Parallel
    const [post, totalTools] = await Promise.all([
      getPost(slug),
      Tool.countDocuments({}),
    ]);

    return {
      post,
      totalTools: totalTools || 770, // Fallback safe number
      currentYear: new Date().getFullYear()
    };
  },
  ['single-blog-post-data'],
  { revalidate: 3600 }
);

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
    const { post, totalTools, currentYear } = await getPostWithStats(params.slug)

    if (!post) {
      return {
        title: 'Blog Post Not Found | ToolsVerse',
        description: 'The requested AI tools blog post could not be found.',
      }
    }

    // 🔥 DYNAMIC TITLES & DESCRIPTIONS
    const pageTitle = `${post.title} | ToolsVerse ${currentYear}`;
    const pageDescription = post.excerpt || `${post.title.substring(0, 120)}... Read the complete guide on ToolsVerse - your trusted directory with ${totalTools}+ AI tools.`;

    // 🔥 EXTRACT KEYWORDS
    const keywords = [
      'AI tools',
      'AI productivity tools',
      'AI workflow automation',
      `best AI tools ${currentYear}`,
      'AI tools directory',
      'ToolsVerse',
      `${totalTools}+ AI tools`,
      ...(post.categories?.map(cat => cat.title) || [])
    ];

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: keywords.join(', '),
      alternates: {
        canonical: `https://thetoolsverse.com/blog/${params.slug}`,
      },
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
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        creator: '@ToolsVerse',
        site: '@ToolsVerse',
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : ['https://thetoolsverse.com/logo.png'],
      },
      robots: {
        index: true,
        follow: true,
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

// 🔥 ENHANCED PORTABLE TEXT COMPONENTS
const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <div className="relative w-full h-auto">
          <Image
            src={urlFor(value).width(800).url()} // Removed fixed height to maintain aspect ratio
            alt={value.alt || 'AI tools illustration'}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto shadow-lg object-cover"
            loading="lazy"
          />
        </div>
        {value.caption && (
          <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 leading-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 leading-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 leading-tight">{children}</h3>,
    normal: ({ children }) => <p className="mb-5 leading-relaxed text-gray-700 text-lg">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 italic my-8 text-gray-700 bg-blue-50 py-4 rounded-r-lg">
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
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2 leading-relaxed pl-1">{children}</li>,
    number: ({ children }) => <li className="mb-2 leading-relaxed pl-1">{children}</li>,
  },
}

export default async function BlogPost({ params }) {
  try {
    const { post, totalTools, currentYear } = await getPostWithStats(params.slug)

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
        urlFor(post.mainImage).width(1200).height(630).url()
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
          "url": "https://thetoolsverse.com/logo.png"
        }
      },
      "wordCount": wordCount,
      "inLanguage": "en-US"
    };

    return (
      <>
        <Script
          id="article-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="bg-white">
          {/* 🔥 BREADCRUMB */}
          <nav className="bg-white py-4 mt-14" aria-label="Breadcrumb">
            <div className="container mx-auto px-4 max-w-4xl">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">Blog</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-700 truncate max-w-xs sm:max-w-md" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </div>
          </nav>

          <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* 🔥 HEADER */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              {/* METRICS */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  {/* Author Image */}
                  {post.author?.image ? (
                    <Image src={post.author.image} alt="Author" width={48} height={48} className="rounded-full" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {(post.author?.name || 'T').charAt(0)}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-gray-900">{post.author?.name || 'ToolsVerse Team'}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                      <span>•</span>
                      <span>{readingTime} min read</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                      <Link
                        href={`/blog`} // You can make this link to a category page later if you want
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* FEATURED IMAGE */}
              {post.mainImage && (
                <figure className="mb-8">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                    alt={post.mainImage.alt || post.title}
                    width={1200}
                    height={600}
                    className="rounded-xl w-full h-auto shadow-xl"
                    priority
                  />
                </figure>
              )}
            </header>

            {/* 🔥 CONTENT BODY */}
            <div className="prose prose-lg prose-blue max-w-none text-gray-800">
              {post.body ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                <p className="text-gray-500 italic">No content available.</p>
              )}
            </div>

            {/* 🔥 SOCIAL SHARE */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-gray-700 font-semibold">Share this guide:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://thetoolsverse.com/blog/${params.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://thetoolsverse.com/blog/${params.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006396] transition-colors text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 🔥 DYNAMIC CTA (No hardcoded numbers) */}
            <div className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl text-white text-center shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Find the Perfect AI Tool
                </h3>
                <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                  Explore our directory of <strong>{totalTools}+ AI tools</strong>.
                  Compare features, pricing, and reviews to find the best software for your needs.
                </p>
                <Link
                  href="/browse-tools"
                  className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Browse Directory →
                </Link>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
            </div>

          </article>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error loading blog post:', error);
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">We couldn't load this article. Please try again.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
      </div>
    )
  }
}