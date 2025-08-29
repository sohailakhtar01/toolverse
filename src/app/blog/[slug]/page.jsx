import { getPost, getAllPosts } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../../lib/sanity'
import Image from 'next/image'

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).height(400).url()}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
      )}

      <div className="mb-8">
        <p className="text-gray-600">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.author && (
          <p className="text-gray-600">By {post.author.name}</p>
        )}
      </div>

      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt || 'AI Tools Blog Post',
  }
}