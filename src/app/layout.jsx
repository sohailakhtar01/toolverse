import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ProgressBar from '@/components/ProgressBar';
import ClientProviders from "@/components/ClientProviders";
import dbConnect from "@/lib/mongodb";
import Tool from "@/models/Tool";
import { unstable_cache } from 'next/cache'; // ⚡️ The Secret Weapon for Speed

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  adjustFontFallback: true,
});

// 🔥 Define Base URL
const baseUrl = new URL("https://thetoolsverse.com");

/**
 * ⚡️ HIGH PERFORMANCE DATA FETCHING
 * This function caches the tool count for 1 hour (3600 seconds).
 * Even if 1 million users visit, the DB is only queried ONCE per hour.
 */
const getSiteStats = unstable_cache(
  async () => {
    try {
      await dbConnect();
      // Run queries in parallel for speed
      const [toolCount, categories] = await Promise.all([
        Tool.countDocuments({}),
        Tool.distinct('categories')
      ]);

      return {
        toolCount: toolCount || 770,
        categoryCount: categories?.length || 50
      };
    } catch (error) {
      console.error("Stats Fetch Error:", error);
      return { toolCount: 770, categoryCount: 50 }; // Safe fallback
    }
  },
  ['site-stats-cache'], // Unique Cache Key
  { revalidate: 3600 }  // ⏳ Update cache every 1 hour
);

export async function generateMetadata() {
  const { toolCount, categoryCount } = await getSiteStats();
  const currentYear = new Date().getFullYear();

  return {
    metadataBase: baseUrl,

    title: {
      default: `${toolCount}+ Best AI Tools Directory ${currentYear} | ToolsVerse`,
      template: "%s | ToolsVerse",
    },

    description: `Discover ${toolCount}+ best AI tools across ${categoryCount}+ categories. Complete AI tools directory updated daily with free & paid AI software for business, design, writing, productivity, marketing & more. Compare top AI apps ${currentYear}.`,

    keywords: [
      `best ai tools ${currentYear}`,
      "ai tools directory",
      "complete ai tools list",
      `${toolCount}+ ai tools`,
      "free ai tools",
      "ai software directory",
      `best ai apps ${currentYear}`,
      "ai tools list",
      "top ai tools",
      "ai productivity tools",
      "ai writing tools",
      "ai design tools",
      "ai marketing tools",
      "Toolsverse"
    ],

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo.png",
    },

    openGraph: {
      title: `${toolCount}+ Best AI Tools Directory ${currentYear} - ToolsVerse`,
      description: `Complete directory of ${toolCount}+ best AI tools across ${categoryCount}+ categories. Updated daily with free & paid AI software.`,
      url: "/",
      siteName: "ToolsVerse - AI Tools Directory",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: `ToolsVerse - Best AI Tools Directory ${currentYear}`,
        },
      ],
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: `${toolCount}+ Best AI Tools Directory ${currentYear} - Toolsverse`,
      description: `Discover the complete directory of best AI tools across ${categoryCount}+ categories. Updated daily!`,
      images: ["/logo.png"],
      site: "@Toolsverse",
    },

    alternates: {
      canonical: "/",
    },

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

    other: {
      'theme-color': '#ffffff',
      'msapplication-TileColor': '#ffffff',
    },
  };
}

export default async function RootLayout({ children }) {
  // This call is now instant because it hits the cache
  const { toolCount, categoryCount } = await getSiteStats();
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        <meta
          name="google-site-verification"
          content="fhoUx6Asp7AlWxDIvLfaXFEbw4pp94yNUhqewq6pMJM"
        />
        <meta
          name="impact-site-verification"
          content="4112f957-1414-4b17-baaa-ea2bb07b2ba7"
        />

        <meta property="og:site_name" content="ToolsVerse - AI Tools Directory" />
        <meta name="application-name" content="ToolsVerse" />
        <meta name="apple-mobile-web-app-title" content="ToolsVerse" />
        <meta name="google-adsense-account" content="ca-pub-9468891564981720" />

        <meta name="author" content="ToolsVerse Team" />
        <meta name="publisher" content="ToolsVerse" />
        <meta name="copyright" content={`ToolsVerse ${currentYear}`} />
        <meta name="revisit-after" content="1 day" />

        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "ToolsVerse",
                  "alternateName": "ToolsVerse - AI Tools Directory",
                  "url": "https://thetoolsverse.com",
                  "description": `Complete directory of ${toolCount}+ best AI tools across ${categoryCount}+ categories`,
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://thetoolsverse.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "ToolsVerse",
                  "url": "https://thetoolsverse.com",
                  "logo": "https://thetoolsverse.com/logo.png",
                  "description": "Curated AI tools directory helping users discover and compare the best AI software"
                }
              ]
            })
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZC85B8D0N"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2ZC85B8D0N', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${spaceGrotesk.variable} antialiased scroll-smooth bg-white text-gray-900`}
        style={{ fontFamily: 'var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif' }}
      >
        <ClientProviders>
          <ProgressBar />
          <Header />

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}