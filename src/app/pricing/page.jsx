// app/pricing/page.jsx
import React from "react";
import { Check, X, Star, Zap, ArrowRight, Sparkles, TrendingUp, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import PricingToggle from '@/components/PricingToggle';
import PricingFAQ from '@/components/PricingFAQ';
import Script from 'next/script';

// 🔥 ADVANCED SEO METADATA FOR PRICING PAGE
export const metadata = {
  title: "Submit Your AI Tool - Free & Featured Listing Pricing | Toolsverse 2025",
  description: "Submit your AI tool to Toolsverse directory. Choose Free listing or Featured listing with premium placement, dofollow backlinks, and priority support. Get discovered by millions of users!",
  
  keywords: [
    "submit ai tool",
    "ai tool listing pricing",
    "featured ai tool listing",
    "ai tools directory submission",
    "list your ai tool",
    "ai tool promotion",
    "toolsverse submit tool",
    "ai directory listing price"
  ],

  openGraph: {
    title: "Submit Your AI Tool - Free & Featured Listing | Toolsverse",
    description: "Get your AI tool in front of millions. Free listing or Featured listing with premium placement and benefits. Submit now!",
    url: "https://thetoolsverse.com/pricing",
    siteName: "Toolsverse - AI Tools Directory",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Toolsverse Tool Submission Pricing",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Submit Your AI Tool to Toolsverse - Free & Featured Options",
    description: "List your AI tool and reach millions of potential users. Choose from Free or Featured listing options.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://thetoolsverse.com/pricing",
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
};

export default function PricingPage() {
  
  const pricingPlans = [
    {
      id: "free",
      name: "BASIC",
      iconName: "Star",
      tagline: "Get discovered for free",
      price: "0",
      description: "Perfect for getting started",
      popular: false,
      features: [
        { name: "Listed in AI Tools Directory", included: true },
        { name: "Basic tool profile page", included: true },
        { name: "Searchable in directory", included: true },
        { name: "1 image/screenshot", included: true },
        { name: "Standard category placement", included: true },
        { name: "Review within 5-7 days", included: true },
        { name: "Featured badge", included: false },
        { name: "Priority placement", included: false },
        { name: "Dofollow backlink", included: false },
        { name: "Social media promotion", included: false },
      ],
      cta: "SELECT",
      ctaLink: "/submit-tool",
      recommended: false,
    },
    {
      id: "featured",
      name: "PRO",
      iconName: "Zap",
      tagline: "Maximum visibility & traffic",
      price: "19",
      period: "one-time",
      description: "Best for maximum exposure",
      popular: true,
      features: [
        { name: "Everything in Basic Listing", included: true },
        { name: "Featured badge on listing", included: true },
        { name: "Priority homepage placement", included: true },
        { name: "Top of category placement", included: true },
        { name: "Dofollow backlink (SEO boost)", included: true },
        { name: "Up to 5 images/screenshots", included: true },
        { name: "Social media promotion", included: true },
        { name: "Newsletter feature", included: true },
        { name: "Fast-track review (24-48 hours)", included: true },
        { name: "Priority customer support", included: true },
      ],
      cta: "SELECT",
      ctaLink: "/submit-tool?plan=featured",
      recommended: true,
      badge: "Most Popular",
      discount: "-62%",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Listing Features",
      features: [
        { name: "Listed in Directory", free: true, featured: true },
        { name: "Tool Profile Page", free: "Basic", featured: "Enhanced" },
        { name: "Images/Screenshots", free: "1 Image", featured: "5 Images" },
        { name: "Category Placement", free: "Standard", featured: "Top Priority" },
        { name: "Featured Badge", free: false, featured: true },
      ]
    },
    {
      category: "Visibility & Promotion",
      features: [
        { name: "Homepage Placement", free: false, featured: "Priority Spot" },
        { name: "Search Visibility", free: "Standard", featured: "Enhanced" },
        { name: "Social Media Feature", free: false, featured: true },
        { name: "Newsletter Inclusion", free: false, featured: true },
        { name: "Dofollow Backlink", free: false, featured: true },
      ]
    },
    {
      category: "Support & Processing",
      features: [
        { name: "Review Timeline", free: "5-7 days", featured: "24-48 hours" },
        { name: "Customer Support", free: "Email", featured: "Priority" },
        { name: "Listing Duration", free: "Permanent", featured: "Lifetime Featured" },
        { name: "Updates & Edits", free: "Email request", featured: "Priority handling" },
      ]
    },
  ];

  const stats = [
    { number: "5,000+", label: "Monthly Visitors" },
    { number: "1,200+", label: "Tools Listed" },
    { number: "50+", label: "Categories" },
    { number: "50+", label: "Countries Reached" },
  ];

  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR SEO */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Tool Submission Service - Toolsverse",
            "description": "Submit your AI tool to Toolsverse directory with free or featured listing options",
            "provider": {
              "@type": "Organization",
              "name": "Toolsverse"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Free Listing",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://thetoolsverse.com/submit-tool"
              },
              {
                "@type": "Offer",
                "name": "Featured Listing",
                "price": "19",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://thetoolsverse.com/submit-tool?plan=featured"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "287"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Join 1,200+ AI Tools
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-spaceGrotesk mb-6">
              Get Your AI Tool
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Discovered by Millions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-spaceGrotesk">
              List your AI tool in the fastest-growing directory. Choose free listing or featured placement for maximum visibility and traffic.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Pricing Cards Component (Client Component) */}
            <PricingToggle plans={pricingPlans} />

          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4">
                Compare Listing Options
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See exactly what you get with each listing type
              </p>
            </div>

            {/* Desktop Comparison Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-6 text-left">
                      <span className="text-lg font-bold text-gray-900">Features</span>
                    </th>
                    <th className="py-4 px-6 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Star className="w-6 h-6 text-gray-600" />
                        <span className="text-lg font-bold text-gray-900">Free Listing</span>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center bg-purple-50 rounded-t-xl">
                      <div className="flex flex-col items-center gap-2">
                        <Zap className="w-6 h-6 text-purple-600" />
                        <span className="text-lg font-bold text-purple-600">Featured Listing</span>
                        <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section, sectionIdx) => (
                    <React.Fragment key={`section-${sectionIdx}`}>
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-3 px-6 font-bold text-gray-900">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feature, featureIdx) => (
                        <tr 
                          key={`feature-${sectionIdx}-${featureIdx}`}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.free === 'boolean' ? (
                              feature.free ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-700 font-medium">{feature.free}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center bg-purple-50/50">
                            {typeof feature.featured === 'boolean' ? (
                              feature.featured ? (
                                <Check className="w-5 h-5 text-purple-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-purple-600 font-medium">{feature.featured}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Comparison Cards */}
            <div className="lg:hidden space-y-6">
              {comparisonFeatures.map((section, sectionIdx) => (
                <div key={`mobile-section-${sectionIdx}`} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{section.category}</h3>
                  {section.features.map((feature, featureIdx) => (
                    <div key={`mobile-feature-${sectionIdx}-${featureIdx}`} className="mb-4 last:mb-0">
                      <div className="font-medium text-gray-900 mb-2">{feature.name}</div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-xs text-gray-600 mb-1">Free</div>
                          {typeof feature.free === 'boolean' ? (
                            feature.free ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-gray-300 mx-auto" />
                          ) : (
                            <span className="font-medium text-gray-700">{feature.free}</span>
                          )}
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded">
                          <div className="text-xs text-purple-600 mb-1 font-medium">Featured</div>
                          {typeof feature.featured === 'boolean' ? (
                            feature.featured ? <Check className="w-4 h-4 text-purple-600 mx-auto" /> : <X className="w-4 h-4 text-gray-300 mx-auto" />
                          ) : (
                            <span className="font-medium text-purple-600">{feature.featured}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <PricingFAQ />

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-spaceGrotesk">
              Ready to Get Your Tool Discovered?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 1,200+ AI tools and reach thousands of potential users searching for solutions like yours!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/submit-tool?plan=featured"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-7 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Get Featured - $19
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/submit-tool"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 duration-300 transition-all"
              >
                Submit Free
              </Link>
            </div>
            <p className="text-purple-100 text-sm mt-6">
              One-time payment • Lifetime featured status • No recurring fees
            </p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Your Traffic</h3>
                <p className="text-gray-600">
                  Get discovered by 10,000+ monthly visitors actively searching for AI tools
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Benefits</h3>
                <p className="text-gray-600">
                  Featured listings include dofollow backlinks to boost your domain authority
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reach Your Audience</h3>
                <p className="text-gray-600">
                  Connect with users in 50+ countries looking for tools exactly like yours
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
