import React from "react";
import { Star, Zap, Shield, Users, Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "₹0",
    icon: Star,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    description: "Get started with basic listing",
    cta: "Start Free",
    ctaLink: "/submit-tool?plan=free",
    features: [
      "Basic listing page",
      "Standard placement",
      "7-day review",
    ],
  },
  {
    name: "Starter",
    price: "$5",
    period: "/mo",
    icon: Zap,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    description: "Better visibility and reach",
    cta: "Get Starter",
    ctaLink: "/submit-tool?plan=starter",
    features: [
      "Priority placement",
      "3 images included",
      "3-day review",
    ],
  },
  {
    name: "Pro",
    price: "$20",
    period: "one-time",
    icon: Shield,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    popular: true,
    description: "Maximum visibility & analytics",
    cta: "Go Pro",
    ctaLink: "/submit-tool?plan=pro",
    features: [
      "Featured badge",
      "Homepage priority",
      "Analytics + SEO boost",
    ],
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/mo",
    icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    description: "Full promotional package",
    cta: "Contact Us",
    ctaLink: "/contact?plan=enterprise",
    features: [
      "Dedicated manager",
      "Social media push",
      "Custom integration",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Toolsverse AI Tool Listing Plans",
              offers: plans.map((plan) => ({
                "@type": "Offer",
                name: plan.name,
                price: plan.price.replace(/[^0-9.]/g, ""),
                priceCurrency: "USD",
                url: `https://thetoolsverse.com${plan.ctaLink}`,
              })),
            }),
          }}
        />

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl p-6 transition-all duration-300 ${isPopular
                    ? "border-2 border-emerald-500 shadow-lg shadow-emerald-100"
                    : "border border-gray-200 shadow hover:shadow-md"
                  }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 ${plan.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${plan.iconColor}`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Features - Compact */}
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isPopular ? 'text-emerald-600' : 'text-gray-400'
                        }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.ctaLink}
                  className={`block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm transition-all ${isPopular
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200"
                    }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Trust Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            No hidden fees
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            7-day refund
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
