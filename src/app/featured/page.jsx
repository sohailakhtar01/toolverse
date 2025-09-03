import FeaturedToolsClient from '@/components/FeaturedToolsClient';

// ✅ AI TOOLS DATA - FOCUS ON ACTUAL AI TOOLS
const toolsData = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Writing",
    description: "Advanced AI chatbot for writing, coding, analysis, and creative tasks. Most popular AI tool worldwide.",
    rating: 4.9,
    users: "100M+",
    price: "Free",
    featured: true,
    icon: "🤖",
    trending: true
  },
  {
    name: "Midjourney",
    slug: "midjourney", 
    category: "AI Art",
    description: "AI-powered image generator creating stunning artwork from text prompts. Leading AI art tool.",
    rating: 4.8,
    users: "15M+",
    price: "$10/mo",
    featured: true,
    icon: "🎨",
    trending: true
  },
  {
    name: "Claude",
    slug: "claude",
    category: "AI Assistant",
    description: "Advanced AI assistant for writing, analysis, coding, and complex reasoning tasks.",
    rating: 4.9,
    users: "5M+",
    price: "Free",
    featured: true,
    icon: "🧠",
    trending: true
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    category: "AI Coding",
    description: "AI-powered coding assistant that helps write, debug, and optimize code in real-time.",
    rating: 4.7,
    users: "8M+",
    price: "$10/mo",
    featured: true,
    icon: "⚡",
    trending: true
  },
  {
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "AI Content",
    description: "AI content generator for marketing copy, blog posts, social media, and business content.",
    rating: 4.6,
    users: "2M+",
    price: "$39/mo",
    featured: true,
    icon: "✍️",
    trending: false
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    category: "AI Design",
    description: "AI-powered design platform for creating graphics, presentations, videos, and marketing materials.",
    rating: 4.8,
    users: "120M+",
    price: "Free",
    featured: true,
    icon: "🎯",
    trending: true
  },
  {
    name: "Grammarly AI",
    slug: "grammarly",
    category: "AI Writing",
    description: "AI writing assistant for grammar checking, style improvement, and content optimization.",
    rating: 4.5,
    users: "30M+",
    price: "Free",
    featured: true,
    icon: "📝",
    trending: false
  },
  {
    name: "RunwayML",
    slug: "runway",
    category: "AI Video",
    description: "AI video generator and editor for creating professional videos from text and images.",
    rating: 4.6,
    users: "3M+",
    price: "$15/mo",
    featured: true,
    icon: "🎬",
    trending: true
  }
];

// ✅ OPTIMIZED SEO METADATA FOR FEATURED AI TOOLS
export const metadata = {
  // 🔥 COMPETITOR-BEATING TITLE WITH CORRECT BRAND
  title: 'Featured AI Tools 2025 | Top 50+ Best AI Software & Apps - Toolsverse',
  
  // 🔥 AI-FOCUSED DESCRIPTION
  description: 'Discover the top 50+ featured AI tools of 2025. Handpicked best AI software including ChatGPT, Midjourney, Claude, GitHub Copilot & more. Free & paid AI apps for business, creativity, and productivity.',
  
  // 🔥 AI-FOCUSED KEYWORDS
  keywords: [
    'featured ai tools 2025',
    'top ai tools',
    'best ai software',
    'popular ai apps',
    'chatgpt alternatives',
    'ai tools list',
    'trending ai tools',
    'best ai tools 2025',
    'ai productivity tools',
    'ai writing tools',
    'ai design tools',
    'ai coding tools',
    'ai content tools',
    'free ai tools',
    'Toolsverse featured'
  ],
  
  // 🔥 OPEN GRAPH FOR SOCIAL SHARING
  openGraph: {
    title: 'Featured AI Tools 2025 | Top 50+ Best AI Software - Toolsverse',
    description: 'Discover the most popular AI tools of 2025. ChatGPT, Midjourney, Claude & 47+ more featured AI apps.',
    type: 'website',
    url: 'https://thetoolsverse.com/featured',
    siteName: 'Toolsverse - AI Tools Directory',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Featured AI Tools 2025 - Toolsverse',
      },
    ],
  },
  
  // 🔥 TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Top 50+ Featured AI Tools 2025 - Toolsverse',
    description: 'Handpicked collection of the best AI tools including ChatGPT, Midjourney, Claude & more.',
    images: ['/logo.png'],
  },
  
  // 🔥 CANONICAL URL
  alternates: {
    canonical: 'https://thetoolsverse.com/featured',
  },
  
  // 🔥 ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function FeaturedPage() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR FEATURED AI TOOLS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Featured AI Tools 2025",
            "description": "Top 50+ featured AI tools handpicked by Toolsverse experts",
            "url": "https://thetoolsverse.com/featured",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Featured AI Tools",
              "description": "Curated list of the best AI tools for 2025",
              "numberOfItems": "50+",
              "itemListElement": toolsData.map((tool, index) => ({
                "@type": "SoftwareApplication",
                "position": index + 1,
                "name": tool.name,
                "description": tool.description,
                "applicationCategory": tool.category,
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": tool.rating,
                  "bestRating": 5
                },
                "offers": {
                  "@type": "Offer",
                  "price": tool.price === "Free" ? "0" : tool.price.replace(/[^0-9.]/g, ''),
                  "priceCurrency": "USD"
                }
              }))
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://thetoolsverse.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Featured AI Tools",
                  "item": "https://thetoolsverse.com/featured"
                }
              ]
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <FeaturedToolsClient toolsData={toolsData} />
      </div>
    </>
  );
}