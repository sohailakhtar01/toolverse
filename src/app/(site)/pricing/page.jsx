// app/pricing/page.jsx
import React from "react";
import { Check, X, Star, Zap, ArrowRight, Sparkles, TrendingUp, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import PricingCards from '@/components/PricingCards';
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
  const comparisonFeatures = [
    {
      category: "Listing Features",
      features: [
        { name: "Listed in Directory", free: true, starter: true, pro: true, enterprise: true },
        { name: "Tool Profile Page", free: "Basic", starter: "Recommended", pro: "Enhanced", enterprise: "Premium" },
        { name: "Images/Screenshots", free: "1", starter: "2", pro: "5", enterprise: "Custom" },
        { name: "Category Placement", free: "Standard", starter: "Priority", pro: "Top Priority", enterprise: "Premium Priority" },
        { name: "Featured Badge", free: false, starter: false, pro: true, enterprise: true },
      ]
    },
    {
      category: "Promotion & Visibility",
      features: [
        { name: "Homepage Placement", free: false, starter: "Recommended", pro: "Priority", enterprise: "Premium" },
        { name: "Search Visibility", free: "Standard", starter: "Enhanced", pro: "Maximum", enterprise: "Maximum+" },
        { name: "Social Media Promotion", free: false, starter: true, pro: true, enterprise: "Premium Push" },
        { name: "Newsletter Inclusion", free: false, starter: false, pro: true, enterprise: true },
        { name: "Dofollow Backlink", free: false, starter: false, pro: true, enterprise: true },
      ]
    },
    {
      category: "Support & Review",
      features: [
        { name: "Review Time", free: "7 days", starter: "3 days", pro: "1 day", enterprise: "24 hours" },
        { name: "Customer Support", free: "Email", starter: "Priority", pro: "Priority Analytics", enterprise: "Dedicated Manager" },
        { name: "Analytics Access", free: false, starter: false, pro: true, enterprise: true },
        { name: "Listing Duration", free: "Permanent", starter: "Monthly", pro: "Permanent", enterprise: "Custom" },
        { name: "Updates & Edits", free: "Email Request", starter: "Priority", pro: "Priority", enterprise: "Premium Handling" },
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
      {/* 🚀 Structured Data for SEO */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Tool Submission Service - Toolsverse",
            "description": "Submit your AI tool to Toolsverse directory with free and paid listing choices.",
            "provider": {
              "@type": "Organization",
              "name": "Toolsverse"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">

        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Join 1,200+ AI Tools
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-spaceGrotesk mb-6">
              Get Your AI Tool
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Discovered by Millions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-spaceGrotesk">
              List your AI tool in the fastest-growing directory. Choose any plan for instant exposure and growth.
            </p>
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
            {/* PRICING CARDS COMPONENT */}
            <PricingCards />
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
                See exactly what you get with each plan below
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
                        <Star className="w-6 h-6 text-yellow-400" />
                        <span className="text-lg font-bold text-gray-900">Free</span>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                      <span className="text-lg font-bold text-purple-600">Starter</span>
                    </th>
                    <th className="py-4 px-6 text-center">
                      <Shield className="w-6 h-6 text-green-500" />
                      <span className="text-lg font-bold text-green-600">Pro</span>
                    </th>
                    <th className="py-4 px-6 text-center">
                      <Users className="w-6 h-6 text-blue-700" />
                      <span className="text-lg font-bold text-blue-700">Enterprise</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section, sectionIdx) => (
                    <React.Fragment key={`section-${sectionIdx}`}>
                      <tr className="bg-gray-50">
                        <td colSpan={5} className="py-3 px-6 font-bold text-gray-900">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feature, featureIdx) => (
                        <tr key={`feature-${sectionIdx}-${featureIdx}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.free === 'boolean' ? (
                              feature.free ?
                                <Check className="w-5 h-5 text-green-600 mx-auto" /> :
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                            ) : (
                              <span className="text-gray-700 font-medium">{feature.free}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ?
                                <Check className="w-5 h-5 text-purple-600 mx-auto" /> :
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                            ) : (
                              <span className="text-purple-600 font-medium">{feature.starter}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.pro === 'boolean' ? (
                              feature.pro ?
                                <Check className="w-5 h-5 text-green-600 mx-auto" /> :
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                            ) : (
                              <span className="text-green-600 font-medium">{feature.pro}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ?
                                <Check className="w-5 h-5 text-blue-700 mx-auto" /> :
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                            ) : (
                              <span className="text-blue-700 font-medium">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            {/* You can retain mobile comparison cards if desired */}
          </div>
        </section>

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
              <Link href="/submit-tool?plan=pro" className="inline-flex items-center gap-2 bg-white text-purple-600 px-7 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
                Get Featured - $20
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/submit-tool?plan=free" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 duration-300 transition-all">
                Submit Free
              </Link>
            </div>
            <p className="text-purple-100 text-sm mt-6">
              No hidden fees • SEO & social boost included • Owned by you
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
