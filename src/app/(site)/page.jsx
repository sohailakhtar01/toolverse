// app/page.jsx
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import LandingClient from "@/components/LandingClient";
import HomeSearchBar from "@/components/HomeSearchBar";
import ToolList from "@/components/ToolList";
import FaqSection from "@/components/FaqSection";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import LeftScroll from "@/components/LeftScroll";
import AIChatbot from "@/components/AIChatbot";


// Trending Categories Data with actual images
const trendingCategories = [
  {
    id: 1,
    name: "Latest AI",
    logo: "/latest-ai-logo.png",
    screenshot: "/latest-ai-logo.webp",
    link: "/categories/latest-ai",
    description: "Discover the newest and most innovative AI tools launched recently",
  },
  {
    id: 2,
    name: "ToolsVerse Section",
    logo: "/toolsverse-logo.png", // Add your logo image here
    screenshot: "/toolsverse.jpg", // Add your screenshot here
    link: "/categories/toolsverse-section",
    description: "Curated collection of premium AI tools handpicked by our experts",
  },

  {
    id: 3,
    name: "Super Tools",
    logo: "/super-tools-logo.png",
    screenshot: "/super-tools-screenshot.jpg",
    link: "/categories/super-tools",
    description: "Most powerful and feature-rich AI tools for professionals",
  },
  {
    id: 4,
    name: "AI Chats & Assistants",
    logo: "/ai-chats-logo.png",
    screenshot: "/ai-chats.jpeg",
    link: "/categories/ai-chat-and-assistant",
    description: "Smart chatbots and AI assistants to boost your productivity",
  }
];
export const revalidate = 60;

export const metadata = {
  title: 'Toolsverse: 4000+ Best AI Tools Directory 2025 | #1 AI Software List',
  description: 'Toolsverse is the #1 AI tools directory with 4000+ best AI tools across 100+ categories. Discover free & paid AI software for business, productivity, writing, design, marketing & more. Updated daily with latest AI apps 2025.',
  keywords: [
    'best ai tools 2026',
    'ai tools directory',
    '4000+ ai tools',
    'complete ai tools list',
    'top ai tools',
    'ai software directory',
    'free ai tools',
    'best ai apps 2026',
  ],
  openGraph: {
    title: 'Toolsverse: #1 AI Tools Directory with 4000+ Best AI Tools 2025',
    description: 'Discover the complete directory of 4000+ best AI tools across 100+ categories. Free & paid AI software for every need. Updated daily!',
    type: 'website',
    url: 'https://thetoolsverse.com',
    siteName: 'Toolsverse - AI Tools Directory',
    images: [
      {
        url: 'https://thetoolsverse.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Toolsverse - Best AI Tools Directory 2025',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toolsverse: 4000+ Best AI Tools Directory 2025',
    description: 'The complete directory of best AI tools across 100+ categories. Find your perfect AI tool!',
    images: ['https://thetoolsverse.com/logo.png'],
  },
  alternates: {
    canonical: 'https://thetoolsverse.com',
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
  category: 'Technology',
  applicationName: 'Toolsverse',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Toolsverse Team' }],
  other: {
    'google-site-verification': 'fhoUx6Asp7AlWxDIvLfaXFEbw4pp94yNUhqewq6pMJM',
    'theme-color': '#ffffff',
  },
};

export default async function HomePage() {
  let featuredTools = [];
  let totalCount = 0;
  let allCategories = [];

  try {
    await connectDB();

    // Get all categories
    try {
      allCategories = await Tool.distinct("categories");
      allCategories = allCategories.filter(Boolean).sort();
    } catch (err) {
      console.error("❌ Category fetch failed:", err.message);
    }

    // Fetch featured tools only
    const [tools, count] = await Promise.all([
      Tool.find({
        isFeatured: true,
        featuredRank: { $gte: 1, $lte: 20 }
      })
        .sort({ featuredRank: 1 }) // 👈 MOST IMPORTANT LINE
        .limit(20)

        .select('displayName name shortDescription longDescription description rating categories pricingType tags slug logo image url logoUrl isVerified isFeatured featuredRank')
        .lean(),
      Tool.countDocuments({})
    ]);

    totalCount = count;

    featuredTools = tools.map(tool => ({
      ...tool,
      _id: tool._id?.toString() || String(tool._id),
      name: tool.displayName || tool.name || 'Untitled Tool',
      logo: tool.logo || tool.image || tool.logoUrl || '/default-tool-icon.png',
      shortDescription: tool.shortDescription || tool.longDescription?.substring(0, 120) || tool.description?.substring(0, 120) || 'Explore this amazing AI tool',
      rating: tool.rating || 4.5,
      categories: Array.isArray(tool.categories) ? tool.categories : [],
      pricingType: tool.pricingType || 'freemium',
      slug: tool.slug,
      featuredRank: tool.featuredRank,
    }));

    console.log(`✅ Homepage: Loaded ${featuredTools.length} featured tools (Total DB: ${totalCount})`);

    // Fallback if no featured tools
    if (featuredTools.length === 0) {
      const fallbackTools = await Tool.find({})
        .sort({ rating: -1 })
        .limit(20)
        .lean();

      featuredTools = fallbackTools.map(tool => ({
        ...tool,
        _id: tool._id?.toString() || String(tool._id),
        name: tool.displayName || tool.name || 'Untitled Tool',
        logo: tool.logo || tool.image || tool.logoUrl || '/default-tool-icon.png',
        shortDescription: tool.shortDescription || tool.description?.substring(0, 120) || 'Explore this amazing AI tool',
        rating: tool.rating || 4.5,
        categories: Array.isArray(tool.categories) ? tool.categories : [],
        pricingType: tool.pricingType || 'freemium',
        slug: tool.slug,
      }));

      console.log(`✅ Fallback: Using top ${featuredTools.length} tools`);
    }

  } catch (error) {
    console.error("❌ Homepage Fetch Error:", error.message);
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Toolsverse",
            "alternateName": "Toolsverse AI Tools Directory",
            "url": "https://thetoolsverse.com",
            "description": "The #1 AI tools directory with 4000+ best AI tools across 100+ categories",
            "inLanguage": "en-US",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://thetoolsverse.com/browse-tools?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Toolsverse",
              "url": "https://thetoolsverse.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thetoolsverse.com/logo.png",
                "width": 1200,
                "height": 630
              }
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Toolsverse?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Toolsverse is a premium directory of over 4000+ AI tools and software across 100+ categories."
                }
              },
              {
                "@type": "Question",
                "name": "Is Toolsverse free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Browsing our directory, comparing tools, and reading reviews is 100% free for everyone."
                }
              },
              {
                "@type": "Question",
                "name": "How can I submit my AI tool?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can submit your tool by clicking the 'Submit Tool' button in the navigation bar."
                }
              }
            ]
          })
        }}
      />

      {featuredTools.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Best AI Tools 2025",
              "description": "Complete directory of 4000+ best AI tools",
              "numberOfItems": totalCount,
              "itemListElement": featuredTools.slice(0, 10).map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareApplication",
                  "name": tool.name,
                  "description": tool.shortDescription,
                  "applicationCategory": "AI Tool",
                  "url": `https://thetoolsverse.com/tools/${tool.slug}`,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": tool.rating,
                    "bestRating": 5,
                    "ratingCount": 100
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": tool.pricingType === 'free' ? '0' : undefined,
                    "priceCurrency": "USD"
                  }
                }
              }))
            })
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Toolsverse",
            "url": "https://thetoolsverse.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thetoolsverse.com/logo.png",
              "width": 1200,
              "height": 630
            },
            "description": "Toolsverse is the #1 AI tools directory featuring 4000+ best AI tools across 100+ categories",
            "foundingDate": "2024",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "url": "https://thetoolsverse.com/contact"
            },
            "sameAs": []
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://thetoolsverse.com"
            }]
          })
        }}
      />

      <main className="min-h-screen bg-white pb-20">
        {/* Hero Section */}
        <LandingClient totalCount={totalCount} />

        {/* ✅ CLIENT SEARCH COMPONENT (No more errors!) */}
        <HomeSearchBar allCategories={allCategories} />
        {/* Header Section */}
        <div className="text-center mb-6 ">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-3">
              Featured AI Tools
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Trending, trusted, and battle-tested AI tools people actually use to get real work done
          </p>
        </div>

        {/* ✅ FEATURED TOOLS */}
        <ToolList
          tools={featuredTools}
          title="Featured AI Tools"
          isLoading={false}
          showSearch={false}
          showFilters={false}
        />
        <section className="w-[90%] mx-auto py-16 rounded-t-3xl px-4 relative overflow-hidden bg-white">
          {/* Gradient overlay - positioned at top, fades before bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50/40 via-blue-50/20 to-transparent pointer-events-none"
            style={{ height: '70%' }} />

          {/* Alternative: Radial gradient from center-top */}
          {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[70%] bg-[radial-gradient(ellipse_at_top,_#f0fdfa_0%,_#eff6ff_30%,_transparent_70%)] pointer-events-none" /> */}

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Trending Categories
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Explore the most popular AI tool categories trusted by thousands of users
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.link}
                  className="group relative block bg-white rounded-xl overflow-hidden border border-gray-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50 hover:-translate-y-1 hover:border-teal-200/60"
                >
                  {/* Header with Logo and Category Name */}
                  <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50/50 to-white">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center p-1 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={category.logo}
                        alt={`${category.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-0.5 truncate group-hover:text-teal-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium truncate">
                        Explore curated tools
                      </p>
                    </div>
                  </div>

                  {/* Screenshot Section */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-50">
                    <img
                      src={category.screenshot}
                      alt={`${category.name} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Footer with Description and CTA */}
                  <div className="p-4 bg-white">
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-teal-600 font-semibold text-xs group-hover:text-teal-700 transition-colors">
                        Explore Tools
                      </span>
                      <svg
                        className="w-4 h-4 text-teal-600 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-teal-400/0 group-hover:ring-teal-400/20 transition-all duration-300 pointer-events-none" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        <div className="mt-20 mb-20">
          <p className="text-center text-gray-800 font-extrabold text-2xl font-spaceGrotesk mb-6 uppercase tracking-widest">
            Trusted by top innovative companies
          </p>
          <LeftScroll />
        </div>


        {/* ////////////////////////////////////////////////////////////////////////////////// */}






        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <div className="max-w-6xl mt-16 mx-auto relative px-4 sm:px-6 lg:px-8">

          {/* Professional Background with Grid */}
          <div className="relative">

            {/* Multi-layer Background */}
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] overflow-hidden">
              {/* Soft gradient base */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-pink-50/40 to-indigo-50/50" />

              {/* Main grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />

              {/* Dot overlay for texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#c7d2fe_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />

              {/* Subtle radial accents */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
            </div>

            {/* Main Card */}
            <div className="relative bg-white/85 backdrop-blur-xl rounded-3xl 
      p-8 sm:p-12 lg:p-16 text-center 
      shadow-[0_20px_60px_rgba(139,92,246,0.1)] 
      border border-indigo-100/60
      transition-all duration-500">

              {/* Inner Grid Pattern */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
              </div>

              {/* Content */}
              <div className="relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 
          bg-gradient-to-r from-purple-50 to-pink-50 
          border border-purple-200/50 rounded-full 
          text-sm font-medium mb-6
          text-purple-700">
                  <Sparkles size={15} className="text-purple-600" />
                  <span>Join the AI Revolution</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                  <span className="text-gray-900">
                    Ready to Supercharge Your
                  </span>
                  <br />
                  <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
                    Workflow with AI?
                  </span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                  Join thousands of founders, developers, and creators discovering the latest AI tools daily on Toolsverse.
                </p>

                {/* Simple Professional Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                  {/* Primary Button - Premium Gradient */}
                  <Link
                    href="/browse-tools"
                    className="group relative w-full sm:w-auto px-8 py-3.5 
      bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 
      text-white text-base font-semibold rounded-xl
      hover:from-purple-700 hover:via-purple-600 hover:to-pink-700
      shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40
      transition-all duration-300 ease-out
      hover:-translate-y-0.5
      flex items-center justify-center gap-2
      overflow-hidden
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0
      before:translate-x-[-200%] hover:before:translate-x-[200%]
      before:transition-transform before:duration-700"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Browse All Tools
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                  </Link>

                  {/* Secondary Button - Sophisticated Outline */}
                  <Link
                    href="/submit-tool"
                    className="group relative w-full sm:w-auto px-8 py-3.5 
      bg-white border-2 border-gray-200
      text-gray-700 text-base font-semibold rounded-xl 
      hover:bg-gradient-to-br hover:from-gray-50 hover:to-white
      hover:border-purple-300 hover:text-gray-900
      shadow-sm hover:shadow-md hover:shadow-purple-100/50
      transition-all duration-300 ease-out
      hover:-translate-y-0.5
      flex items-center justify-center gap-2.5
      overflow-hidden"
                  >
                    <Rocket
                      size={18}
                      className="text-purple-500 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300"
                    />
                    <span className="relative">Submit Your Tool</span>
                  </Link>
                </div>


                {/* Social Proof - Clean Stats */}
                <div className="mt-10 pt-8 border-t border-gray-200/50">
                  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">

                    {/* User Avatars with Images */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100">
                          <img
                            src="/samir.jpg"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100">
                          <img
                            src="/manoj.jpeg"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100">
                          <img
                            src="/sahil.jpeg"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100">
                          <img
                            src="https://randomuser.me/api/portraits/men/22.jpg"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="font-semibold text-gray-800">Trusted by 10,000+ users</span>
                    </div>

                    <span className="hidden sm:inline text-gray-300">•</span>

                    {/* Stats with Icons */}
                    <div className="flex items-center gap-1.5">

                      <span className="font-semibold text-gray-700">4,000+ AI Tools</span>
                    </div>

                    <span className="hidden sm:inline text-gray-300">•</span>

                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-700">Updated Daily</span>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <AIChatbot />

      </main>
    </>
  );
}
