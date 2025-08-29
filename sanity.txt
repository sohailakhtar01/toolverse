import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Helper function to fetch all posts
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }
  `)
}

// Helper function to fetch a single post
export async function getPost(slug) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      mainImage,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title
      }
    }
  `, { slug })
}