// 🔥 CATEGORIES LAYOUT WITH KILLER SEO

export const metadata = {
  // 🎯 TARGET HIGH-VOLUME CATEGORY KEYWORDS
  title: 'AI Tools Categories 2025 | 100+ Categories of Best AI Software - Toolsverse',
  
  // 🎯 CATEGORY-FOCUSED DESCRIPTION  
  description: 'Browse AI tools by categories. 100+ categories including AI writing tools, AI design tools, AI productivity apps, AI coding assistants, AI marketing software & more. Find the perfect AI tool for your needs.',
  
  // 🎯 CATEGORY KEYWORDS (High search volume)
  keywords: [
    'ai tools categories',
    'ai tools by category',
    'types of ai tools',
    'ai software categories', 
    'ai writing tools',
    'ai design tools',
    'ai productivity tools',
    'ai coding tools',
    'ai marketing tools',
    'ai business tools',
    'ai content tools',
    'ai image tools',
    'ai video tools',
    'ai ChatBots',
    'ai automation tools',
    'browse ai tools by category',
    'categorized ai tools',
    '100+ ai tool categories'
  ],
  
  // 🎯 OPEN GRAPH
  openGraph: {
    title: 'AI Tools Categories 2025 | 100+ Categories - Toolsverse',
    description: 'Explore AI tools organized in 100+ categories. Find AI writing, design, productivity, coding & marketing tools.',
    type: 'website', 
    url: 'https://thetoolsverse.com/categories',
    siteName: 'Toolsverse - AI Tools Directory',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'AI Tools Categories - Toolsverse',
      },
    ],
  },
  
  // 🎯 TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: '100+ AI Tools Categories - Toolsverse',
    description: 'Browse AI tools organized by categories. Writing, design, productivity, coding & more.',
    images: ['/logo.png'],
  },
  
  // 🎯 CANONICAL & ROBOTS
  alternates: {
    canonical: 'https://thetoolsverse.com/categories',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function CategoriesLayout({ children }) {
  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR CATEGORIES PAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Tools Categories",
            "description": "Browse AI tools organized in 100+ categories",
            "url": "https://thetoolsverse.com/categories",
            "mainEntity": {
              "@type": "ItemList",
              "name": "AI Tool Categories",
              "description": "Complete list of AI tool categories",
              "numberOfItems": "100+",
              "itemListOrder": "https://schema.org/ItemListOrderAscending"
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
                  "name": "Categories",
                  "item": "https://thetoolsverse.com/categories"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://thetoolsverse.com/categories/{category_name}",
              "query-input": "required name=category_name"
            }
          })
        }}
      />
      
      {/* 🔥 CATEGORIES SCHEMA - SPECIFIC CATEGORIES */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList", 
            "name": "Popular AI Tool Categories",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "AI Writing Tools",
                "url": "https://thetoolsverse.com/categories/writing",
                "description": "AI tools for content creation, copywriting, and text generation"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "AI Design Tools",
                "url": "https://thetoolsverse.com/categories/design",
                "description": "AI-powered design and image generation tools"
              },
              {
                "@type": "ListItem",
                "position": 3, 
                "name": "AI Productivity Tools",
                "url": "https://thetoolsverse.com/categories/productivity", 
                "description": "AI tools for task automation and workflow optimization"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "AI Coding Tools", 
                "url": "https://thetoolsverse.com/categories/coding",
                "description": "AI-powered development and programming assistants"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "AI Marketing Tools",
                "url": "https://thetoolsverse.com/categories/marketing",
                "description": "AI tools for marketing automation and campaign optimization"
              }
            ]
          })
        }}
      />
      
      {children}
    </>
  );
}