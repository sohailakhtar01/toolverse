// components/PricingToggle.jsx
"use client";

import { Check, X, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Star: Star,
  Zap: Zap,
};

export default function PricingToggle({ plans }) {

  return (
    <div className="w-full">

      {/* Pricing Cards - Modern Glassmorphic Design */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => {
          const Icon = iconMap[plan.iconName] || Star;

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.recommended
                  ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-2xl'
                  : 'bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              
              {/* Popular Badge - Top Right Corner */}
              {plan.badge && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                  {plan.discount}
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                
                {/* Plan Name - Bold & Centered */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {plan.description}
                  </p>
                </div>

                {/* Price - Large & Centered */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    {plan.period ? 'per month' : 'Free forever'}
                  </p>
                </div>

                {/* CTA Button - Prominent */}
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 mb-8 shadow-md hover:shadow-lg ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'
                      : 'bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features List - Clean Checkmarks */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.recommended ? 'bg-purple-100' : 'bg-gray-100'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.recommended ? 'text-purple-600' : 'text-gray-600'
                          }`} />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center">
                          <X className="w-3 h-3 text-gray-300" />
                        </div>
                      )}
                      <span className={`text-sm leading-tight ${
                        feature.included ? 'text-gray-700 font-medium' : 'text-gray-400'
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
        <p className="text-sm font-medium">
          ✓ Secure payment • ✓ Instant activation • ✓ No recurring charges
        </p>
      </div>

    </div>
  );
}
