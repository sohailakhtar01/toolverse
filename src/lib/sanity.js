// lib/sanity.js
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Define your Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for faster loading
  apiVersion: '2024-01-01',
});

// Helper function for building image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  if (!source) return null;
  return builder.image(source);
};

// ---

// Improved query fields with better error handling
const postFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage {
    asset,
    alt
  },
  author->{
    name,
    "image": image.asset->url
  },
  categories[]->{
    title
  }
`;

const fullPostFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage {
    asset,
    alt
  },
  author->{
    name,
    "image": image.asset->url
  },
  categories[]->{
    title
  },
  body
`;

// Helper function to fetch all posts with error handling
export async function getAllPosts() {
  try {
    const query = `
      *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
        ${postFields}
      }`;
    
    const posts = await client.fetch(query);
    
    // Filter out posts without required fields and ensure slug is properly formatted
    return posts.filter(post => post.title && post.slug).map(post => ({
      ...post,
      slug: post.slug || '', // Ensure slug is always a string
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Helper function to fetch a single post with error handling
export async function getPost(slug) {
  if (!slug) {
    console.warn('No slug provided to getPost function');
    return null;
  }

  try {
    const query = `
      *[_type == "post" && slug.current == $slug][0] {
        ${fullPostFields}
      }`;
    
    const post = await client.fetch(query, { slug });
    
    if (!post) {
      console.warn(`No post found for slug: ${slug}`);
      return null;
    }

    // Ensure the post has required fields
    return {
      ...post,
      slug: post.slug || slug,
    };
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

// Helper function to fetch recent posts (for homepage, related posts, etc.)
export async function getRecentPosts(limit = 3) {
  try {
    const query = `
      *[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...${limit}] {
        ${postFields}
      }`;
    
    const posts = await client.fetch(query);
    
    return posts.filter(post => post.title && post.slug).map(post => ({
      ...post,
      slug: post.slug || '',
    }));
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}

// Helper function to fetch posts by category
export async function getPostsByCategory(categoryTitle) {
  if (!categoryTitle) {
    return [];
  }

  try {
    const query = `
      *[_type == "post" && defined(publishedAt) && $categoryTitle in categories[]->title] | order(publishedAt desc) {
        ${postFields}
      }`;
    
    const posts = await client.fetch(query, { categoryTitle });
    
    return posts.filter(post => post.title && post.slug).map(post => ({
      ...post,
      slug: post.slug || '',
    }));
  } catch (error) {
    console.error(`Error fetching posts by category "${categoryTitle}":`, error);
    return [];
  }
}

// Helper function to validate Sanity configuration
export function validateSanityConfig() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('Missing required Sanity environment variables:', missingVars);
    return false;
  }

  return true;
}