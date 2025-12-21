// components/seoSections.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Montserrat, Space_Grotesk } from "next/font/google";
import { ChevronDown, Check, TrendingUp, Users, Award, Clock } from 'lucide-react';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

// 🎯 HERO SECTION - Google-Optimized, Clean & Professional
export function HeroSection({ heroData }) {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      
      {/* Professional Background with Grid */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-indigo-50/40 to-pink-50/30" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
        
        {/* Dot overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#c7d2fe_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        
        {/* Radial accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Small Label Badge */}
          {heroData.label && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 rounded-full text-sm font-semibold text-purple-700 mb-6 shadow-sm">
              <Award size={16} className="text-purple-600" />
              <span>{heroData.label}</span>
            </div>
          )}

          {/* H1 Title - SEO Optimized */}
          <h1 className={`${spaceGrotesk.className} text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight`}>
            <span className="text-gray-900">{heroData.title}</span>
          </h1>

          {/* Subtitle - Clear Value Prop */}
          <p className={`${montserrat.className} text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto`}>
            {heroData.subtitle}
          </p>

          {/* Trust Signals / Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
            {heroData.stats.map((stat, i) => {
              const icons = [TrendingUp, Users, Award, Clock];
              const Icon = icons[i % icons.length];
              
              return (
                <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-indigo-100/50 shadow-sm">
                  <Icon size={20} className="text-purple-600" />
                  <div className="text-left">
                    <p className={`${montserrat.className} text-sm text-gray-500`}>
                      {stat.split(' ').slice(1).join(' ')}
                    </p>
                    <p className={`${spaceGrotesk.className} text-lg font-bold text-gray-900`}>
                      {stat.split(' ')[0]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons - Clear & Simple */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="#tools"
              className={`${montserrat.className} w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200`}
            >
              {heroData.ctaPrimary}
            </Link>

            <Link
              href="/categories"
              className={`${montserrat.className} w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow transition-all duration-200`}
            >
              {heroData.ctaSecondary}
            </Link>
          </div>

          {/* Trust Footer */}
          <p className={`${montserrat.className} mt-8 text-sm text-gray-500 font-medium`}>
            ✓ Regularly updated with verified AI tools • No credit card required
          </p>

        </div>
      </div>
    </section>
  );
}

// 🎯 SEO CONTENT SECTION - Google-Friendly Long-Form Content
export function SEOContentSection({ seoContent }) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/20 to-white" />
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className={`${spaceGrotesk.className} text-3xl sm:text-4xl font-bold text-gray-900 mb-3`}>
              {seoContent.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          {/* Long-Form Paragraphs - SEO Gold */}
          <div className="prose prose-lg max-w-none mb-12">
            {seoContent.paragraphs.map((para, i) => (
              <p key={i} className={`${montserrat.className} text-lg text-gray-700 mb-5 leading-relaxed`}>
                {para}
              </p>
            ))}
          </div>

          {/* Two-Column Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

            {/* Benefits Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-gray-900 mb-6`}>
                Why Choose Free AI Tools?
              </h3>
              <ul className="space-y-3">
                {seoContent.benefits.map((benefit, i) => (
                  <li key={i} className={`${montserrat.className} flex items-start gap-3 text-gray-700 text-base`}>
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit.replace('✅ ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-gray-900 mb-6`}>
                Built For Everyone
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Startups", "Students", "Freelancers", "Marketers", "Developers", "Designers"].map(role => (
                  <div
                    key={role}
                    className={`${montserrat.className} px-4 py-3 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/40 rounded-lg text-center text-sm font-medium text-gray-700 hover:border-purple-300 hover:shadow-sm transition-all duration-200`}
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="#tools"
              className={`${montserrat.className} inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200`}
            >
              Explore Free Tools Now
              <TrendingUp size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

// 🎯 FAQ SECTION - Schema-Ready, Google-Optimized
export function FAQSection({ faqs }) {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFAQ = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-purple-50/20 to-pink-50/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${spaceGrotesk.className} text-3xl sm:text-4xl font-bold text-gray-900 mb-3`}>
            Frequently Asked Questions
          </h2>
          <p className={`${montserrat.className} text-lg text-gray-600`}>
            Everything you need to know about free AI tools
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-indigo-100/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`${montserrat.className} w-full flex justify-between items-center p-5 sm:p-6 text-left hover:bg-indigo-50/30 transition-colors duration-200`}
                aria-expanded={!!openFaqs[index]}
                aria-controls={`faq-answer-${index}`}
              >
                <span 
                  className="text-base sm:text-lg font-semibold text-gray-900 pr-4 flex-1"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  size={22} 
                  className={`text-purple-600 flex-shrink-0 transition-transform duration-300 ${openFaqs[index] ? 'rotate-180' : ''}`}
                />
              </button>

              {openFaqs[index] && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="px-5 sm:px-6 pb-5 sm:pb-6"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p 
                    className={`${montserrat.className} text-base text-gray-700 leading-relaxed`}
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <p className={`${montserrat.className} text-gray-600 mb-4`}>
            Still have questions?
          </p>
          <Link
            href="/contact"
            className={`${montserrat.className} inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow transition-all duration-200`}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}

// 🎯 CATEGORY HIGHLIGHTS - Clean Grid Design
export function CategoriesHighlight({ categories }) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`${spaceGrotesk.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
              Top Free AI Categories
            </span>
          </h2>
          <p className={`${montserrat.className} text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto`}>
            Browse by category to find specialized free AI tools tailored to your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/category/${cat.slug}`}
              className="group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-indigo-100/60 hover:border-purple-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`${spaceGrotesk.className} text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300`}>
                    {cat.name}
                  </h3>
                  <p className={`${montserrat.className} text-purple-600 font-semibold text-base sm:text-lg`}>
                    {cat.count} Free Tools →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
