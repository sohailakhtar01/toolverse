// src/app/browse-tools/layout.jsx
// This is a Server Component by default, so it can export metadata.

export const metadata = {
  // 🔥 COMPETITOR-BEATING TITLE
  title: "Browse 1200+ AI Tools by Category 2025 | Complete AI Tools Directory - ToolVault",
  
  // 🔥 KEYWORD-RICH DESCRIPTION  
  description: "Browse 1200+ best AI tools across 100+ categories. Filter by free/paid, ratings, and features. Complete AI tools directory with productivity, design, writing, marketing & business tools updated daily.",
  
  // 🔥 ADDITIONAL SEO METADATA
  keywords: [
    "browse ai tools",
    "ai tools by category", 
    "filter ai tools",
    "1200+ ai tools",
    "ai tools directory browse",
    "categorized ai tools",
    "ai tools filter 2025",
    "best ai tools by category"
  ],
  
  // 🔥 OPEN GRAPH FOR SOCIAL SHARING
  openGraph: {
    title: "Browse 1200+ AI Tools by Category 2025 - ToolVault",
    description: "Filter and browse 1200+ AI tools across 100+ categories. Find the perfect AI tool for your needs.",
    url: "https://toolverse-brown.vercel.app/browse-tools",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Browse AI Tools Directory - ToolVault",
      },
    ],
  },
  
  // 🔥 TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Browse 1200+ AI Tools by Category - ToolVault", 
    description: "Filter and discover the best AI tools across 100+ categories",
    images: ["/logo.png"],
  },
  
  // 🔥 CANONICAL URL
  alternates: {
    canonical: "https://toolverse-brown.vercel.app/browse-tools",
  },
  
  // 🔥 ROBOTS META
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function BrowseToolsLayout({ children }) {
  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR BROWSE PAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Browse AI Tools by Category",
            "description": "Browse 1200+ AI tools across 100+ categories",
            "url": "https://toolverse-brown.vercel.app/browse-tools",
            "mainEntity": {
              "@type": "ItemList",
              "name": "AI Tools Directory",
              "description": "Complete directory of AI tools organized by categories",
              "numberOfItems": "1200+",
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://toolverse-brown.vercel.app"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Browse AI Tools",
                  "item": "https://toolverse-brown.vercel.app/browse-tools"
                }
              ]
            }
          })
        }}
      />
      
      {/* Any common UI elements for this route segment can go here */}
      {children} {/* This is where the content from page.jsx will be rendered */}
    </>
  );
}