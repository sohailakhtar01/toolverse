// app/page.jsx
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import LandingClient from "@/components/LandingClient";
import FaqSection from "@/components/FaqSection"; // ✅ Import FAQ
// import CtaSection from "@/components/CtaSection"; // ✅ Import CTA
import { Rocket, Sparkles,ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export const metadata = {
  title: 'Toolsverse: 1200+ Best AI Tools Directory 2025 | #1 AI Software List',
  description: 'Toolsverse is the #1 AI tools directory with 1200+ best AI tools across 100+ categories. Discover free & paid AI software for business, productivity, writing, design, marketing & more. Updated daily with latest AI apps 2025.',
  keywords: [
    'best ai tools 2025',
    'ai tools directory',
    '1200+ ai tools',
    'complete ai tools list',
    'top ai tools',
    'ai software directory',
    'free ai tools',
    'best ai apps 2025',
  ],
  openGraph: {
    title: 'Toolsverse: #1 AI Tools Directory with 1200+ Best AI Tools 2025',
    description: 'Discover the complete directory of 1200+ best AI tools across 100+ categories. Free & paid AI software for every need. Updated daily!',
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
    title: 'Toolsverse: 1200+ Best AI Tools Directory 2025',
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

    try {
      allCategories = await Tool.distinct("categories");
      allCategories = allCategories.sort();
    } catch (err) {
      console.error("❌ Category fetch failed:", err.message);
    }

    console.log('🔍 Attempting to fetch featured tools...');
    
    const [tools, count] = await Promise.all([
      Tool.find({ isFeatured: true })
        .sort({ rating: -1 })
        .limit(20)
        .select('id displayName name shortDescription longDescription description rating categories pricingType tags slug logo image url logoUrl isVerified isFeatured')
        .lean(),
      Tool.countDocuments({})
    ]);
    
    totalCount = count;
    
    console.log(`🔍 Found ${tools.length} tools with isFeatured: true`);
    
    featuredTools = tools.map(tool => ({
      ...tool,
      _id: tool._id?.toString() || tool.id?.toString() || String(tool.id),
      name: tool.displayName || tool.name || 'Untitled Tool',
      logo: tool.logo || tool.image || tool.logoUrl || '/default-tool-icon.png',
      shortDescription: tool.shortDescription || tool.longDescription?.substring(0, 120) || tool.description?.substring(0, 120) || 'Explore this amazing AI tool',
      rating: tool.rating || 4.5,
      categories: Array.isArray(tool.categories) ? tool.categories : [],
      pricingType: tool.pricingType || 'freemium',
      slug: tool.slug,
    }));
    
    console.log(`✅ SSR: Mapped ${featuredTools.length} featured tools (Total DB: ${totalCount})`);
    
    if (featuredTools.length === 0) {
      console.log('⚠️  No featured tools found, fetching top 20 by rating as fallback...');
      
      const fallbackTools = await Tool.find({})
        .sort({ rating: -1 })
        .limit(20)
        .select('id displayName name shortDescription longDescription description rating categories pricingType tags slug logo image url logoUrl')
        .lean();
      
      featuredTools = fallbackTools.map(tool => ({
        ...tool,
        _id: tool._id?.toString() || tool.id?.toString() || String(tool.id),
        name: tool.displayName || tool.name || 'Untitled Tool',
        logo: tool.logo || tool.image || tool.logoUrl || '/default-tool-icon.png',
        shortDescription: tool.shortDescription || tool.longDescription?.substring(0, 120) || tool.description?.substring(0, 120) || 'Explore this amazing AI tool',
        rating: tool.rating || 4.5,
        categories: Array.isArray(tool.categories) ? tool.categories : [],
        pricingType: tool.pricingType || 'freemium',
        slug: tool.slug,
      }));
      
      console.log(`✅ Fallback: Using top ${featuredTools.length} tools by rating`);
    }
    
  } catch (error) {
    console.error("❌ SSR Fetch Error:", error.message);
    console.error("Full error:", error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Toolsverse",
            "alternateName": "Toolsverse AI Tools Directory",
            "url": "https://thetoolsverse.com",
            "description": "The #1 AI tools directory with 1200+ best AI tools across 100+ categories",
            "inLanguage": "en-US",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://thetoolsverse.com/search?q={search_term_string}"
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
      
      {/* ✅ ADDED: FAQ Page Schema for SEO */}
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
                  "text": "Toolsverse is a premium directory of over 1200+ AI tools and software across 100+ categories."
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
              "description": "Complete directory of 1200+ best AI tools",
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
            "description": "Toolsverse is the #1 AI tools directory featuring 1200+ best AI tools across 100+ categories",
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
        <LandingClient 
          featuredTools={featuredTools}
          totalCount={totalCount}
          allCategories={allCategories}
        />
        
        {/* ✅ ADDED: FAQ Section (Styled with Accordions) */}
        <FaqSection />
        
     <div className="max-w-5xl mt-10 mx-auto relative">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 relative overflow-hidden">
          
          {/* Background Decor (Subtle & Professional) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            {/* Soft purple glow top right */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            {/* Soft pink glow bottom left */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-sm font-medium mb-8 text-purple-700">
              <Sparkles size={14} className="text-purple-600" />
              <span>Join the AI Revolution</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-spaceGrotesk font-bold mb-6 leading-tight text-gray-900">
              Ready to Supercharge Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Workflow with AI?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of founders, developers, and creators discovering the latest AI tools daily on Toolsverse.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button */}
              <Link 
                href="/browse-tools"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all transform  flex items-center justify-center gap-2"
              >
                Browse All Tools
                <ArrowRight size={18} />
              </Link>
              
              {/* Secondary Button */}
              <Link 
                href="/submit-tool"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
              >
                <Rocket size={18} className="text-gray-500" />
                Submit Your Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}