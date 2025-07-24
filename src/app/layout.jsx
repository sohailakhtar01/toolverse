import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

// Import fonts
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


// --- SEO METADATA ---
export const metadata = {
  title: "ToolVault - Discover the Best Digital Tools for Your Business",
  description:
    "Discover, compare, and explore AI tools across categories including productivity, design, marketing, and more. Boost your workflow with ToolVault.",
  keywords: [
    "AI tools",
    "Productivity software",
    "Best AI apps",
    "Tool directory",
    "Design tools",
    "Marketing AI",
    "ToolVault",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "ToolVault - Curated AI Tool Directory",
    description:
      "ToolVault helps you discover the best AI tools across every category, including pricing, ratings, and use cases.",
    url: "https://toolverse-brown.vercel.app", // ✅ TEMPORARY: actual deployed site
    siteName: "ToolVault",
    images: [
      {
        url: "/logo.png",
        width: 32,
        height: 32,
        alt: "ToolVault AI Tools Directory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolVault - Discover the Best AI Tools",
    description:
      "Your all-in-one hub for comparing and exploring the top AI tools across categories.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://toolverse-brown.vercel.app", // ✅ TEMPORARY
  },
};

// --- LAYOUT ---
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="fhoUx6Asp7AlWxDIvLfaXFEbw4pp94yNUhqewq6pMJM"
        />

        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-2ZC85B8D0N`}
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
  className={`${geistSans.variable} ${geistMono.variable}  antialiased scroll-smooth bg-white text-gray-900`}
>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
