import { getPost, getAllPosts, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    
    return posts.map((post) => ({
      slug: post.slug, // Fixed: removed .current since it's already handled in sanity.js
    }))
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  try {
    const post = await getPost(params.slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    const pageTitle = `${post.title} | Your Blog`;
    const pageDescription = post.excerpt || 'Read this blog post for insights and tips.';
    
    return {
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: `https://www.yourwebsite.com/blog/${params.slug}`,
      },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `https://www.yourwebsite.com/blog/${params.slug}`,
        siteName: 'Your Site Name',
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author?.name || 'Staff Writer'],
        images: post.mainImage ? [
          {
            url: urlFor(post.mainImage).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: post.mainImage.alt || post.title,
          },
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'AI Tools Blog Post',
    }
  }
}

// Custom components for PortableText
const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto"
        />
        {value.caption && (
          <p className="text-sm text-gray-500 text-center mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-5 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
}

export default async function BlogPost({ params }) {
  try {
    const post = await getPost(params.slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="bg-white">
        {/* Navigation breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900 truncate">{post.title}</span>
            </div>
          </div>
        </nav>

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            {/* Author and Date Info */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                {post.author?.image ? (
                  <Image
                    src={post.author.image}
                    alt={post.author.name || 'Author'}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {(post.author?.name || 'SW').charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {post.author?.name || 'Staff Writer'}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <time dateTime={post.publishedAt}>
                      Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </p>
                </div>
              </div>

              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="mb-8">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.mainImage.alt || post.title}
                  width={1200}
                  height={600}
                  className="rounded-lg w-full h-auto shadow-lg"
                  priority
                />
                {post.mainImage.alt && (
                  <p className="text-sm text-gray-500 text-center mt-3 italic">
                    {post.mainImage.alt}
                  </p>
                )}
              </div>
            )}
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {post.body && post.body.length > 0 ? (
              <PortableText 
                value={post.body} 
                components={portableTextComponents}
              />
            ) : (
              <p className="text-gray-500 italic">Content coming soon...</p>
            )}
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    )
  } catch (error) {
    console.error('Error loading blog post:', error);
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Error Loading Post</h1>
        <p className="text-gray-600 mb-8">Something went wrong while loading this blog post.</p>
        <Link 
          href="/blog"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Blog
        </Link>
      </div>
    )
  }
}