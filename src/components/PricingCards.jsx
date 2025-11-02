import React from "react";
import { Star, Zap, ArrowRight, Users, Shield } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "₹0/month",
    icon: <Star className="w-8 h-8 text-yellow-400 mb-3" />,
    description: "Basic listing with limited visibility on The Toolsverse.",
    popular: false,
    cta: "Get Started Free",
    ctaLink: "/submit-tool?plan=free",
    features: [
      "Basic listing page",
      "Standard category placement",
      "Review within 7 days",
      "Searchable by users",
    ],
  },
  {
    name: "Starter",
    price: "$5/month",
    icon: <Zap className="w-8 h-8 text-purple-600 mb-3" />,
    description: "Better reach and appearance in recommended tools.",
    popular: true,
    cta: "Try Starter",
    ctaLink: "/submit-tool?plan=starter",
    features: [
      "Priority directory placement",
      "2 images/screenshots",
      "Featured in recommendations",
      "Review within 3 days",
    ],
  },
  {
    name: "Pro",
    price: "$20/month",
    icon: <Shield className="w-8 h-8 text-green-500 mb-3" />,
    description: "Priority listing, verified badge, and analytics access.",
    popular: true,
    cta: "Go Pro",
    ctaLink: "/submit-tool?plan=pro",
    features: [
      "Verified badge on listing",
      "Priority homepage & category placement",
      "5 images/screenshots",
      "Advanced analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "$199/month",
    icon: <Users className="w-8 h-8 text-blue-700 mb-3" />,
    description: "For large teams with full promotional support.",
    popular: true,
    cta: "Enterprise Inquiry",
    ctaLink: "/contact?plan=enterprise",
    features: [
      "Full promotional campaign",
      "Dedicated account manager",
      "Newsletter & social media push",
      "Custom integrations available",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-4 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        {/* SEO-friendly Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Toolsverse AI Tool Listing Plans",
              description:
                "Submit your AI tool for free or boost it with Featured, Pro, or Enterprise plans for maximum reach.",
              offers: plans.map((plan) => ({
                "@type": "Offer",
                name: plan.name,
                price: plan.price.replace(/[^0-9.]/g, ""),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://thetoolsverse.com${plan.ctaLink}`,
              })),
            }),
          }}
        />

        {/* Heading */}
        <div className="text-center mb-14 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-spaceGrotesk text-gray-900 mb-3">
            Choose Your Toolsverse Plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Submit your AI tool to reach thousands of visitors. Flexible plans for every need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full gap-8 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between ring-1 ring-gray-200 shadow-md rounded-2xl p-8 sm:p-10 bg-white hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-2 border-purple-600 scale-[1.02]" : ""
              }`}
              itemScope
              itemType="http://schema.org/Service"
            >
              <div>
                <div className="mb-4 flex justify-center">{plan.icon}</div>
                <h2
                  className="font-bold text-2xl sm:text-3xl text-center mb-1 text-gray-900"
                  itemProp="name"
                >
                  {plan.name}
                </h2>
                <div
                  className="text-3xl sm:text-4xl font-extrabold mb-3 text-purple-600 text-center"
                  itemProp="offers"
                >
                  {plan.price}
                </div>
                <p
                  className="text-gray-600 mb-6 text-center leading-relaxed"
                  itemProp="description"
                >
                  {plan.description}
                </p>
                <ul className="mb-8 space-y-3 text-gray-700 text-sm sm:text-base text-left">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.ctaLink}
                className={`w-full mt-auto flex-shrink-0 px-6 py-3 text-center rounded-xl font-semibold tracking-wide ${
                  plan.popular
                    ? "bg-gradient-to-tr from-purple-700 to-pink-500 text-white shadow-lg hover:from-purple-800 hover:to-pink-600"
                    : "bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100 hover:text-purple-950"
                } transition-all duration-200`}
                aria-label={`Select ${plan.name} Plan`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
