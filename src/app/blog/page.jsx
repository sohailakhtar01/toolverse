import { getAllPosts } from '../../lib/sanity'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug.current}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Optional: Add metadata
export const metadata = {
  title: 'Blog - AI Tools Directory',
  description: 'Latest blog posts about AI tools and technology',
}