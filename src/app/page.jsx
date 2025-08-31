// ✅ No "use client" here – this is a server component
import LandingClient from '@/components/LandingClient';

export const metadata = {
  // 🔥 HOMEPAGE TITLE - MOST IMPORTANT SEO ELEMENT
  title: 'ToolVault: 1200+ Best AI Tools Directory 2025 | #1 AI Software List',
  
  // 🔥 HOMEPAGE DESCRIPTION - TARGET ALL MAJOR KEYWORDS
  description: 'ToolVault is the #1 AI tools directory with 1200+ best AI tools across 100+ categories. Discover free & paid AI software for business, productivity, writing, design, marketing & more. Updated daily with latest AI apps 2025.',
  
  // 🔥 HIGH-IMPACT KEYWORDS FOR HOMEPAGE
  keywords: [
    'best ai tools 2025',
    'ai tools directory',
    '1200+ ai tools',
    'complete ai tools list',
    'top ai tools',
    'ai software directory',
    'free ai tools',
    'best ai apps 2025',
    'ai tools list',
    'ai productivity tools',
    'ai writing tools',
    'ai design tools', 
    'ai marketing tools',
    'ai business tools',
    'ToolVault directory',
    'ai tools website',
    'compare ai tools'
  ],
  
  // 🔥 HOMEPAGE OPEN GRAPH - FOR SOCIAL SHARING
  openGraph: {
    title: 'ToolVault: #1 AI Tools Directory with 1200+ Best AI Tools 2025',
    description: 'Discover the complete directory of 1200+ best AI tools across 100+ categories. Free & paid AI software for every need. Updated daily!',
    type: 'website',
    url: 'https://toolverse-brown.vercel.app',
    siteName: 'ToolVault - AI Tools Directory',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ToolVault - Best AI Tools Directory 2025',
      },
    ],
    locale: 'en_US',
  },
  
  // 🔥 TWITTER CARD FOR HOMEPAGE
  twitter: {
    card: 'summary_large_image',
    title: 'ToolVault: 1200+ Best AI Tools Directory 2025',
    description: 'The complete directory of best AI tools across 100+ categories. Find your perfect AI tool!',
    images: ['/logo.png'],
    site: '@ToolVault', // Add your Twitter handle
  },
  
  // 🔥 CANONICAL URL
  alternates: {
    canonical: 'https://toolverse-brown.vercel.app',
  },
  
  // 🔥 ROBOTS & INDEXING
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
  
  // 🔥 ADDITIONAL SEO METADATA
  other: {
    'google-site-verification': 'fhoUx6Asp7AlWxDIvLfaXFEbw4pp94yNUhqewq6pMJM',
    'theme-color': '#ffffff',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR HOMEPAGE - MOST IMPORTANT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ToolVault",
            "alternateName": "ToolVault AI Tools Directory",
            "url": "https://toolverse-brown.vercel.app",
            "description": "The #1 AI tools directory with 1200+ best AI tools across 100+ categories",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://toolverse-brown.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Best AI Tools 2025",
              "description": "Complete directory of 1200+ best AI tools",
              "numberOfItems": "1200+",
              "itemListOrder": "https://schema.org/ItemListOrderAscending"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ToolVault",
              "url": "https://toolverse-brown.vercel.app",
              "logo": {
                "@type": "ImageObject",
                "url": "https://toolverse-brown.vercel.app/logo.png"
              }
            }
          })
        }}
      />
      
      {/* 🔥 ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ToolVault",
            "url": "https://toolverse-brown.vercel.app",
            "logo": "https://toolverse-brown.vercel.app/logo.png",
            "description": "ToolVault is the #1 AI tools directory featuring 1200+ best AI tools across 100+ categories",
            "foundingDate": "2024",
            "sameAs": [
              // Add your social media links when you have them
              // "https://twitter.com/toolvault",
              // "https://linkedin.com/company/toolvault"
            ]
          })
        }}
      />

      <main className="min-h-screen bg-gradient-to-r from-white via-purple-50 to-purple-100">
        <LandingClient />
      </main>
    </>
  );
}