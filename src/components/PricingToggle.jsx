// components/PricingToggle.jsx
"use client";

import { Check, X, ArrowRight, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Star: Star,
  Zap: Zap,
};

export default function PricingToggle({ plans }) {

  return (
    <div className="w-full">

      {/* Pricing Cards - Smaller Size for Desktop */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => {
          const Icon = iconMap[plan.iconName] || Star;

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.recommended
                  ? 'border-purple-600 shadow-xl md:scale-105'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    plan.recommended ? 'bg-purple-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      plan.recommended ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  
                  {plan.price === "0" ? (
                    <p className="text-sm text-gray-600 mt-2">
                      Forever free, no hidden fees
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 mt-2">
                      One-time payment, lifetime featured
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-6">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3 md:py-4 px-6 rounded-lg font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 mb-6 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Features List */}
                <div className="space-y-3 flex-grow">
                  <div className="text-sm font-bold text-gray-900 mb-3">
                    What&apos;s included:
                  </div>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-xs md:text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Message */}
      <div className="text-center mt-10 text-gray-600">
        <p className="text-sm">
          ✓ Secure payment • ✓ Instant activation • ✓ No recurring charges
        </p>
      </div>

    </div>
  );
}
