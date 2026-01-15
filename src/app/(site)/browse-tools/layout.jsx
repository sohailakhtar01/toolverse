import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import { unstable_cache } from 'next/cache';

// ⚡️ CACHED DATA FETCHING (1 Hour Cache)
// This fetches the real count so we don't lie to Google
const getBrowseStats = unstable_cache(
  async () => {
    try {
      await connectDB();
      const totalCount = await Tool.countDocuments({});
      return {
        totalCount: totalCount || 770, // Fallback to safe number if DB fails
        currentYear: new Date().getFullYear()
      };
    } catch (error) {
      console.error("Layout DB Error:", error);
      return { totalCount: 770, currentYear: new Date().getFullYear() };
    }
  },
  ['browse-layout-stats'],
  { revalidate: 3600 }
);

// 🔥 DYNAMIC METADATA (Replaces the old static export)
export async function generateMetadata() {
  const { totalCount, currentYear } = await getBrowseStats();

  const title = `Browse ${totalCount}+ AI Tools by Category ${currentYear} | Complete Directory`;
  const description = `Browse ${totalCount}+ best AI tools across 100+ categories. Filter by free/paid, ratings, and features. The most accurate AI tools directory updated daily.`;

  return {
    title: title,
    description: description,

    keywords: [
      "browse ai tools",
      "ai tools by category",
      "filter ai tools",
      `${totalCount}+ ai tools`, // Dynamic keyword
      "ai tools directory browse",
      "categorized ai tools",
      `ai tools filter ${currentYear}`,
      "best ai tools by category"
    ],

    openGraph: {
      title: title,
      description: description,
      url: "https://thetoolsverse.com/browse-tools",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Browse AI Tools Directory - ToolsVerse",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/logo.png"],
    },

    alternates: {
      canonical: "https://thetoolsverse.com/browse-tools",
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
}

export default async function BrowseToolsLayout({ children }) {
  // Fetch stats again for the Schema (It's cached, so no performance cost)
  const { totalCount } = await getBrowseStats();

  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR BROWSE PAGE (Dynamic) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Browse AI Tools by Category",
            "description": `Browse ${totalCount}+ AI tools across 100+ categories`,
            "url": "https://thetoolsverse.com/browse-tools",
            "mainEntity": {
              "@type": "ItemList",
              "name": "AI Tools Directory",
              "description": "Complete directory of AI tools organized by categories",
              "numberOfItems": totalCount, // ✅ REAL NUMBER
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
                  "name": "Browse AI Tools",
                  "item": "https://thetoolsverse.com/browse-tools"
                }
              ]
            }
          })
        }}
      />

      {children}
    </>
  );
}