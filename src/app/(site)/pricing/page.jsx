// app/pricing/page.jsx
import React from "react";
import { Check, X, Star, Zap, ArrowRight, Sparkles, TrendingUp, Shield, Users, Clock, Globe, BarChart3, Award } from 'lucide-react';
import Link from 'next/link';
import PricingCards from '@/components/PricingCards';
import PricingFAQ from '@/components/PricingFAQ';
import Script from 'next/script';

// SEO METADATA
export const metadata = {
  title: "AI Tool Submission Pricing - Free & Featured Listings | Toolsverse 2025",
  description: "Submit your AI tool to Toolsverse. Choose from Free or Featured listings with premium placement, dofollow backlinks, social promotion, and dedicated support. Get discovered by 10,000+ monthly visitors searching for AI solutions.",
  keywords: [
    "submit ai tool",
    "ai tool listing pricing",
    "featured ai tool listing",
    "ai tools directory submission",
    "list your ai tool",
    "ai tool promotion",
    "toolsverse submit tool",
    "ai directory listing price",
    "ai tool marketing",
    "promote ai software",
    "ai tool visibility"
  ],
  openGraph: {
    title: "Submit Your AI Tool - Free & Featured Listing Options | Toolsverse",
    description: "Get your AI tool in front of 10,000+ monthly visitors. Free listing or Featured listing with premium placement, dofollow backlinks, and priority support. Join 1,200+ listed tools today!",
    url: "https://thetoolsverse.com/pricing",
    siteName: "Toolsverse - AI Tools Directory",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Toolsverse AI Tool Submission Pricing Plans",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit Your AI Tool to Toolsverse - Free & Premium Options Available",
    description: "List your AI tool and reach 10,000+ potential users monthly. Choose from Free or Featured listing options with advanced promotion.",
    images: ["/logo.png"],
    creator: "@toolsverse",
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
  other: {
    'article:publisher': 'https://thetoolsverse.com',
    'og:type': 'website',
  }
};

export default function PricingPage() {
  const comparisonFeatures = [
    {
      category: "Listing Features",
      features: [
        { name: "Listed in Directory", free: true, starter: true, pro: true, enterprise: true },
        { name: "Tool Profile Page", free: "Basic", starter: "Enhanced", pro: "Premium", enterprise: "Custom" },
        { name: "Images & Screenshots", free: "1 Image", starter: "3 Images", pro: "5 Images", enterprise: "Unlimited" },
        { name: "Category Placement", free: "Standard", starter: "Priority", pro: "Top Priority", enterprise: "Premium Spot" },
        { name: "Featured Badge", free: false, starter: false, pro: true, enterprise: true },
        { name: "Video Showcase", free: false, starter: false, pro: true, enterprise: true },
      ]
    },
    {
      category: "Promotion & Visibility",
      features: [
        { name: "Homepage Placement", free: false, starter: "Rotating", pro: "Priority", enterprise: "Permanent" },
        { name: "Search Ranking Boost", free: "Standard", starter: "Enhanced", pro: "Maximum", enterprise: "Premium+" },
        { name: "Social Media Feature", free: false, starter: "1 Post", pro: "3 Posts", enterprise: "5+ Posts" },
        { name: "Newsletter Inclusion", free: false, starter: false, pro: true, enterprise: true },
        { name: "Dofollow Backlink (SEO)", free: false, starter: false, pro: true, enterprise: true },
        { name: "Blog Post Feature", free: false, starter: false, pro: false, enterprise: true },
      ]
    },
    {
      category: "Support & Analytics",
      features: [
        { name: "Review Processing Time", free: "5-7 days", starter: "3 days", pro: "24 hours", enterprise: "Priority" },
        { name: "Customer Support", free: "Email", starter: "Priority Email", pro: "Priority + Chat", enterprise: "Dedicated Manager" },
        { name: "Analytics Dashboard", free: false, starter: false, pro: true, enterprise: true },
        { name: "Monthly Performance Report", free: false, starter: false, pro: false, enterprise: true },
        { name: "Listing Updates", free: "Via Email", starter: "Self-Service", pro: "Priority", enterprise: "Managed" },
        { name: "A/B Testing Support", free: false, starter: false, pro: false, enterprise: true },
      ]
    },
  ];

  const stats = [
    { number: "10,000+", label: "Monthly Visitors", icon: Users },
    { number: "1,200+", label: "AI Tools Listed", icon: Sparkles },
    { number: "100+", label: "Tool Categories", icon: BarChart3 },
    { number: "50+", label: "Countries Reached", icon: Globe },
  ];

  const trustBadges = [
    {
      icon: TrendingUp,
      title: "Instant Traffic Boost",
      description: "Get discovered by 10,000+ monthly visitors actively searching for AI tools like yours"
    },
    {
      icon: Shield,
      title: "Powerful SEO Benefits",
      description: "Featured listings include dofollow backlinks to boost your domain authority and search rankings"
    },
    {
      icon: Clock,
      title: "Fast Review Process",
      description: "Get listed quickly with our streamlined review process. Featured listings approved in 24 hours"
    },
    {
      icon: Award,
      title: "Premium Placement",
      description: "Featured tools get priority placement on homepage, category pages, and search results"
    }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AI Tool Directory Listing Service - Toolsverse",
            "description": "Submit your AI tool to Toolsverse directory with free and premium listing options for maximum visibility",
            "brand": {
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
                "url": "https://thetoolsverse.com/pricing"
              },
              {
                "@type": "Offer",
                "name": "Featured Listing",
                "price": "20",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://thetoolsverse.com/pricing"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">

            {/* Trust Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">
                  Trusted by <span className="font-semibold text-slate-900">1,200+ AI Tools</span>
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Get Your AI Tool Discovered
              <span className="block mt-2 text-indigo-600">
                by Thousands of Active Users
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-center text-lg text-slate-600 max-w-2xl mx-auto mb-3">
              List your AI product in a curated directory used by developers, founders, and teams.
            </p>

            <p className="text-center text-sm text-slate-500 max-w-xl mx-auto mb-14">
              Transparent pricing · Fast approval · Permanent listing · SEO-friendly
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-200 transition-colors"
                  >
                    <IconComponent className="w-6 h-6 text-indigo-600 mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-500 text-center mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pricing Cards */}
            <PricingCards />

          </div>
        </div>

        {/* Trust & Benefits Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Why Choose Toolsverse?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join successful AI tools already growing their user base through our platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;

                return (
                  <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {badge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Compare All Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every plan detail at a glance. Choose the one that fits your growth goals.
              </p>
            </div>

            {/* Desktop Comparison Table */}
            <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="py-6 px-8 text-left">
                        <span className="text-lg font-bold text-gray-900">Features</span>
                      </th>
                      <th className="py-6 px-6 text-center min-w-[140px]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Star className="w-5 h-5 text-yellow-600" />
                          </div>
                          <span className="text-lg font-bold text-gray-900">Free</span>
                          <span className="text-sm text-gray-500">$0</span>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center min-w-[140px]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <Zap className="w-5 h-5 text-indigo-600" />
                          </div>
                          <span className="text-lg font-bold text-indigo-600">Starter</span>
                          <span className="text-sm text-indigo-500">$5/mo</span>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center min-w-[140px] bg-indigo-50">
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                              <Shield className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                              POPULAR
                            </div>
                          </div>
                          <span className="text-lg font-bold text-indigo-600">Pro</span>
                          <span className="text-sm text-indigo-500">$20 one-time</span>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center min-w-[140px]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-slate-700" />
                          </div>
                          <span className="text-lg font-bold text-slate-700">Enterprise</span>
                          <span className="text-sm text-slate-500">Custom</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((section, sectionIdx) => (
                      <React.Fragment key={`section-${sectionIdx}`}>
                        <tr className="bg-slate-50">
                          <td colSpan={5} className="py-4 px-8 font-bold text-gray-900 text-sm uppercase tracking-wide">
                            {section.category}
                          </td>
                        </tr>
                        {section.features.map((feature, featureIdx) => (
                          <tr
                            key={`feature-${sectionIdx}-${featureIdx}`}
                            className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                          >
                            <td className="py-5 px-8 text-gray-700 font-medium">{feature.name}</td>
                            <td className="py-5 px-6 text-center">
                              {typeof feature.free === 'boolean' ? (
                                feature.free ? (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                      <X className="w-4 h-4 text-gray-400" />
                                    </div>
                                  </div>
                                )
                              ) : (
                                <span className="text-gray-700 font-medium text-sm">{feature.free}</span>
                              )}
                            </td>
                            <td className="py-5 px-6 text-center">
                              {typeof feature.starter === 'boolean' ? (
                                feature.starter ? (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-indigo-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                      <X className="w-4 h-4 text-gray-400" />
                                    </div>
                                  </div>
                                )
                              ) : (
                                <span className="text-indigo-600 font-medium text-sm">{feature.starter}</span>
                              )}
                            </td>
                            <td className="py-5 px-6 text-center bg-indigo-50">
                              {typeof feature.pro === 'boolean' ? (
                                feature.pro ? (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-indigo-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                      <X className="w-4 h-4 text-gray-400" />
                                    </div>
                                  </div>
                                )
                              ) : (
                                <span className="text-indigo-600 font-semibold text-sm">{feature.pro}</span>
                              )}
                            </td>
                            <td className="py-5 px-6 text-center">
                              {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-slate-700" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                      <X className="w-4 h-4 text-gray-400" />
                                    </div>
                                  </div>
                                )
                              ) : (
                                <span className="text-slate-700 font-medium text-sm">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Comparison Cards */}
            <div className="lg:hidden space-y-6">
              {comparisonFeatures.map((section, sectionIdx) => (
                <div key={`mobile-section-${sectionIdx}`} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-slate-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{section.category}</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {section.features.map((feature, featureIdx) => (
                      <div key={`mobile-feature-${sectionIdx}-${featureIdx}`} className="space-y-3">
                        <div className="font-medium text-gray-900">{feature.name}</div>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Free', value: feature.free },
                            { label: 'Starter', value: feature.starter },
                            { label: 'Pro', value: feature.pro },
                            { label: 'Enterprise', value: feature.enterprise }
                          ].map((plan, planIdx) => (
                            <div key={`mobile-plan-${planIdx}`} className="bg-slate-50 rounded-lg p-3">
                              <div className="text-xs font-medium text-gray-500 mb-2">{plan.label}</div>
                              <div className="flex items-center">
                                {typeof plan.value === 'boolean' ? (
                                  plan.value ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-400" />
                                  )
                                ) : (
                                  <span className="text-sm font-medium text-indigo-600">{plan.value}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <PricingFAQ />
        </div>

        {/* Final CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-slate-700">
                Featured listings available this week
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              List Your AI Tool on Toolsverse
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Reach builders, founders, and early adopters actively searching for AI tools.
              Submit your product and start getting discovered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/submit-tool?plan=pro"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-7 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Get Featured
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/submit-tool?plan=free"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-7 py-3 rounded-lg border border-slate-300 hover:border-slate-400 transition-colors"
              >
                Free Listing
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-600" />
                No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-600" />
                Fast approval
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-600" />
                7-day refund policy
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
