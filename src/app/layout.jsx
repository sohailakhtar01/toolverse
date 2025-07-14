import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";


// temp change for redeploy

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
  description: "Discover, compare, and explore AI tools across categories including productivity, design, marketing, and more. Boost your workflow with ToolVault.",
  keywords: [
    "AI tools", "Productivity software", "Best AI apps", "Tool directory", "Design tools", "Marketing AI", "ToolVault"
  ],
  icons: {
    icon: "/logo.png", // ✅ This line adds favicon support
  },
  openGraph: {
    title: "ToolVault - Curated AI Tool Directory",
    description: "ToolVault helps you discover the best AI tools across every category, including pricing, ratings, and use cases.",
    url: "https://www.toolvault.ai", // replace with real domain
    siteName: "ToolVault",
    images: [
      {
        url: "/logo.png", // should already be in /public
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
    description: "Your all-in-one hub for comparing and exploring the top AI tools across categories.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.toolvault.ai",
  },
};


// --- LAYOUT ---
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
