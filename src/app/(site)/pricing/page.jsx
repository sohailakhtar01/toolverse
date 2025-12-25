// app/pricing/page.jsx
import React from "react";
import { Check, X, Star, Zap, ArrowRight, Sparkles, TrendingUp, Shield, Users, Clock, Globe, BarChart3, Award } from 'lucide-react';
import Link from 'next/link';
import PricingCards from '@/components/PricingCards';
import PricingFAQ from '@/components/PricingFAQ';
import Script from 'next/script';

// 🔥 ENHANCED SEO METADATA FOR PRICING PAGE
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
    { number: "50+", label: "Tool Categories", icon: BarChart3 },
    { number: "50+", label: "Countries Reached", icon: Globe },
  ];

  const trustBadges = [
    {
      icon: TrendingUp,
      title: "Instant Traffic Boost",
      description: "Get discovered by 10,000+ monthly visitors actively searching for AI tools like yours",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Powerful SEO Benefits",
      description: "Featured listings include dofollow backlinks to boost your domain authority and search rankings",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Fast Review Process",
      description: "Get listed quickly with our streamlined review process. Featured listings approved in 24 hours",
      color: "green"
    },
    {
      icon: Award,
      title: "Premium Placement",
      description: "Featured tools get priority placement on homepage, category pages, and search results",
      color: "amber"
    }
  ];

  return (
    <>
      {/* 🚀 ENHANCED Structured Data for Better SEO */}
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">

        {/* Hero Section - Value-First Approach */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto">

            {/* Hero Section - Professional & Clean */}
            <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-white">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 -z-10 opacity-40">
                <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Trust Badge */}
                <div className="text-center mb-8 -mt-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-teal-100 rounded-full shadow-sm">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Trusted by <span className="text-teal-700 font-semibold">1,200+ AI Tools</span>
                    </span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold font-spaceGrotesk mb-5 leading-tight text-gray-900">
                  Get Your AI Tool Discovered
                  <span className="block mt-2 text-teal-700">
                    by 10,000+ Monthly Visitors
                  </span>
                </h1>

                {/* Value Proposition */}
                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-3 leading-relaxed">
                  List your tool in India's fastest-growing AI directory. Trusted by developers and businesses nationwide.
                </p>
                <p className="text-center text-sm text-gray-500 max-w-xl mx-auto mb-12">
                  No hidden fees · Fast approval · Permanent listing · SEO benefits
                </p>

                {/* Stats Grid - Compact */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto mb-16">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-gray-100/50 hover:border-teal-200 transition-all duration-300"
                      >
                        <IconComponent className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-center">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-600 text-center font-medium">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* PRICING CARDS COMPONENT */}
                <div className="mb-12">
                  <PricingCards />
                </div>

                {/* Trust Indicators */}

              </div>
            </section>

          </div>
        </section>

        {/* Trust & Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-30 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4 text-gray-900">
                Why Choose Toolsverse?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join successful AI tools already growing their user base through our platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                const colorClasses = {
                  purple: 'bg-purple-50 text-purple-600',
                  blue: 'bg-blue-50 text-blue-600',
                  green: 'bg-green-50 text-green-600',
                  amber: 'bg-amber-50 text-amber-600'
                };

                return (
                  <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className={`w-14 h-14 ${colorClasses[badge.color]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-spaceGrotesk">
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
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4 text-gray-900">
                Compare All Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every plan detail at a glance. Choose the one that fits your growth goals.
              </p>
            </div>

            {/* Desktop Comparison Table */}
            <div className="hidden lg:block overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-50 to-purple-50/30 border-b-2 border-purple-100">
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
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Zap className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="text-lg font-bold text-purple-600">Starter</span>
                          <span className="text-sm text-purple-500">$5/mo</span>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center min-w-[140px] bg-gradient-to-b from-green-50/50 to-transparent">
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                              POPULAR
                            </div>
                          </div>
                          <span className="text-lg font-bold text-green-600">Pro</span>
                          <span className="text-sm text-green-500">$20 one-time</span>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center min-w-[140px]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-700" />
                          </div>
                          <span className="text-lg font-bold text-blue-700">Enterprise</span>
                          <span className="text-sm text-blue-500">Custom</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((section, sectionIdx) => (
                      <React.Fragment key={`section-${sectionIdx}`}>
                        <tr className="bg-gradient-to-r from-slate-50 to-purple-50/20">
                          <td colSpan={5} className="py-4 px-8 font-bold text-gray-900 text-sm uppercase tracking-wide">
                            {section.category}
                          </td>
                        </tr>
                        {section.features.map((feature, featureIdx) => (
                          <tr
                            key={`feature-${sectionIdx}-${featureIdx}`}
                            className="border-b border-gray-50 hover:bg-purple-50/30 transition-colors duration-200"
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
                                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-purple-600" />
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
                                <span className="text-purple-600 font-medium text-sm">{feature.starter}</span>
                              )}
                            </td>
                            <td className="py-5 px-6 text-center bg-gradient-to-b from-green-50/20 to-transparent">
                              {typeof feature.pro === 'boolean' ? (
                                feature.pro ? (
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
                                <span className="text-green-600 font-semibold text-sm">{feature.pro}</span>
                              )}
                            </td>
                            <td className="py-5 px-6 text-center">
                              {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? (
                                  <div className="flex justify-center">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-blue-700" />
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
                                <span className="text-blue-700 font-medium text-sm">{feature.enterprise}</span>
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
                <div key={`mobile-section-${sectionIdx}`} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{section.category}</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {section.features.map((feature, featureIdx) => (
                      <div key={`mobile-feature-${sectionIdx}-${featureIdx}`} className="space-y-3">
                        <div className="font-medium text-gray-900">{feature.name}</div>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Free', value: feature.free, color: 'yellow' },
                            { label: 'Starter', value: feature.starter, color: 'purple' },
                            { label: 'Pro', value: feature.pro, color: 'green' },
                            { label: 'Enterprise', value: feature.enterprise, color: 'blue' }
                          ].map((plan, planIdx) => (
                            <div key={`mobile-plan-${planIdx}`} className="bg-gray-50 rounded-lg p-3">
                              <div className="text-xs font-medium text-gray-500 mb-2">{plan.label}</div>
                              <div className="flex items-center">
                                {typeof plan.value === 'boolean' ? (
                                  plan.value ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-400" />
                                  )
                                ) : (
                                  <span className={`text-sm font-medium text-${plan.color}-600`}>{plan.value}</span>
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
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <PricingFAQ />
        </section>

        {/* Final CTA Section - Conversion Optimized */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700"></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Limited Time: Get 20% off Featured listings this week!
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-spaceGrotesk leading-tight">
              Ready to Grow Your AI Tool?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 1,200+ AI tools already reaching thousands of potential users every month. Submit your tool today and start growing!
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
              <Link
                href="/submit-tool?plan=pro"
                className="group inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105"
              >
                Get Featured - Only $20
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/submit-tool?plan=free"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg"
              >
                Start with Free Listing
              </Link>
            </div>

            <div className="space-y-2 ">
              <div className="flex items-center justify-center gap-2 text-purple-100 text-sm">
                <Check className="w-4 h-4" />
                <span>No hidden fees • Transparent pricing</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-purple-100 text-sm">
                <Check className="w-4 h-4" />
                <span>Fast approval • Get live in 24 hours</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-purple-100 text-sm">
                <Check className="w-4 h-4" />
                <span>7-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
