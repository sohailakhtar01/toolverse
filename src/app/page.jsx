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

export const revalidate = 60;

export const metadata = {
  title: 'Toolsverse: 4000+ Best AI Tools Directory 2025 | #1 AI Software List',
  description: 'Toolsverse is the #1 AI tools directory with 4000+ best AI tools across 100+ categories. Discover free & paid AI software for business, productivity, writing, design, marketing & more. Updated daily with latest AI apps 2025.',
  keywords: [
    'best ai tools 2025',
    'ai tools directory',
    '4000+ ai tools',
    'complete ai tools list',
    'top ai tools',
    'ai software directory',
    'free ai tools',
    'best ai apps 2025',
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
      Tool.find({ isFeatured: true })
        .sort({ rating: -1 })
        .limit(20)
        .select('displayName name shortDescription longDescription description rating categories pricingType tags slug logo image url logoUrl isVerified isFeatured')
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

        {/* ✅ FEATURED TOOLS */}
        <ToolList
          tools={featuredTools}
          title="Featured AI Tools"
          isLoading={false}
          showSearch={false}
          showFilters={false}
        />

        {/* FAQ Section */}
        <FaqSection />

        <div className="mt-20 mb-20">
          <p className="text-center text-gray-800 font-extrabold text-2xl font-spaceGrotesk mb-6 uppercase tracking-widest">
            Trusted by top innovative companies
          </p>
          <LeftScroll />
        </div>

        {/* CTA Section */}
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          
          {/* Primary Button - Clean & Simple */}
          <Link
            href="/browse-tools"
            className="group w-full sm:w-auto px-7 py-3.5 
              bg-gradient-to-r from-purple-600 to-pink-600 
              text-white text-base font-semibold rounded-xl
              hover:from-purple-700 hover:to-pink-700
              shadow-md hover:shadow-lg
              transition-all duration-200
              flex items-center justify-center gap-2"
          >
            Browse All Tools
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>

          {/* Secondary Button - Clean & Simple */}
          <Link
            href="/submit-tool"
            className="group w-full sm:w-auto px-7 py-3.5 
              bg-white border border-gray-300 
              text-gray-700 text-base font-semibold rounded-xl 
              hover:bg-gray-50 hover:border-gray-400
              shadow-sm hover:shadow
              transition-all duration-200
              flex items-center justify-center gap-2"
          >
            <Rocket size={18} className="text-gray-500" />
            Submit Your Tool
          </Link>
        </div>

        {/* Social Proof - Clean Stats */}
        <div className="mt-10 pt-8 border-t border-gray-200/50">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white shadow-sm" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white shadow-sm" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white shadow-sm" />
              </div>
              <span className="font-medium text-gray-700">10,000+ users</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="font-medium text-gray-600">4,000+ AI Tools</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="font-medium text-gray-600">Updated Daily</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

      </main>
    </>
  );
}
