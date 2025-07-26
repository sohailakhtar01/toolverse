// data/blogPosts.js

import AIDetectionPost from '@/components/blog/AIDetectionPost';
import PhotoEnhancementPost from '@/components/blog/PhotoEnhancementPost';
import ChatbotProsConsPost from '@/components/blog/ChatbotProsConsPost';
import ExcelAIAssistPost from '@/components/blog/ExcelAIAssistPost';
import AIRecruitersPost from '@/components/blog/AIRecruitersPost';

const blogPosts = [
  {
    slug: 'ai-detection-tools',
    title: 'AI Detection Tools: How They Work & Why They Matter',
    excerpt: 'Discover how AI detectors work, their role in plagiarism detection, and the best tools available.',
    datePublished: '2025-07-26',
    author: 'Sohail Akhtar',
    component: AIDetectionPost,
  },
  {
    slug: 'photo-enhancement-with-ai',
    title: 'Enhance Your Photos Using AI: Resolution, Quality & Clarity',
    excerpt: 'Learn how to improve photo resolution, reduce blur, and make your images 4K using AI tools.',
    datePublished: '2025-07-26',
    author: 'Sohail Akhtar',
    component: PhotoEnhancementPost,
  },
  {
    slug: 'chatbot-pros-and-cons',
    title: 'Chatbots Explained: Pros, Cons, and Must-Have Features',
    excerpt: 'Explore the advantages and limitations of chatbots, along with key features to look for.',
    datePublished: '2025-07-26',
    author: 'Sohail Akhtar',
    component: ChatbotProsConsPost,
  },
  {
    slug: 'ai-in-excel-data-analysis',
    title: 'Using AI in Excel: Automate Your Data Analysis',
    excerpt: 'Step-by-step guide on how to use AI to analyze Excel data for free and boost productivity.',
    datePublished: '2025-07-26',
    author: 'Sohail Akhtar',
    component: ExcelAIAssistPost,
  },
  {
    slug: 'ai-job-recruiters',
    title: 'AI Job Recruiters: Changing the Future of Hiring',
    excerpt: 'See how AI is reshaping recruitment and why companies are adopting AI job recruiter tools.',
    datePublished: '2025-07-26',
    author: 'Sohail Akhtar',
    component: AIRecruitersPost,
  }
];

// Get all slugs
export function getAllBlogPostSlugs() {
  return blogPosts.map((post) => post.slug);
}

// Get a single post by slug
export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
