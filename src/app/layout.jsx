import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ProgressBar from '@/components/ProgressBar';
import ClientProviders from "@/components/ClientProviders";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "1200+ Best AI Tools Directory 2026 | ToolsVerse",
    template: "%s | ToolsVerse",
  },

  description: "Discover 1200+ best AI tools across 100+ categories. Complete AI tools directory updated daily with free & paid AI software for business, design, writing, productivity, marketing & more. Compare top AI apps 2026.",

  keywords: [
    "best ai tools 2026",
    "ai tools directory",
    "complete ai tools list",
    "1200+ ai tools",
    "free ai tools",
    "ai software directory",
    "best ai apps 2026",
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
    title: "1200+ Best AI Tools Directory 2026 - ToolsVerse",
    description: "Complete directory of 1200+ best AI tools across 100+ categories. Updated daily with free & paid AI software for every need.",
    url: "https://thetoolsverse.com",
    siteName: "ToolsVerse - AI Tools Directory",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ToolsVerse - Best AI Tools Directory 2026",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "1200+ Best AI Tools Directory 2026 - Toolsverse",
    description: "Discover the complete directory of best AI tools across 100+ categories. Updated daily!",
    images: ["/logo.png"],
    site: "@Toolsverse",
  },

  alternates: {
    canonical: "https://thetoolsverse.com",
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

export default function RootLayout({ children }) {
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
        <meta name="copyright" content="ToolsVerse 2026" />
        <meta name="revisit-after" content="1 day" />

        <script
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
                  "description": "Complete directory of 1200+ best AI tools across 100+ categories",
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
        className={`${spaceGrotesk.variable} ${montserrat.variable} ${geistSans.variable} antialiased scroll-smooth bg-white text-gray-900`}
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