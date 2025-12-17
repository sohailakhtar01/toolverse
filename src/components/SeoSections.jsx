// components/seoSections.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export function HeroSection({ heroData }) {
  return (
    <section className="relative py-24 text-gray-900 overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto px-5 text-center">

        {/* small label */}
        {heroData.label && (
          <p className={`${montserrat.className} text-sm uppercase tracking-wide text-purple-600 mb-3 font-semibold`}>
            {heroData.label}
          </p>
        )}

        {/* title */}
        <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold mb-4 leading-tight`}>
          {heroData.title}
        </h1>

        {/* subtitle */}
        <p className={`${montserrat.className} text-lg md:text-xl max-w-xl mx-auto text-gray-600 mb-10 leading-relaxed`}>
          {heroData.subtitle}
        </p>

        {/* stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {heroData.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`${montserrat.className} text-2xl md:text-3xl font-semibold text-purple-600`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          <Link
            href="#tools"
            className={`${montserrat.className} px-6 py-3 bg-purple-600 text-white font-medium text-base rounded-lg shadow-md hover:bg-purple-700 transition`}
          >
            {heroData.ctaPrimary}
          </Link>

          <Link
            href="/categories"
            className={`${montserrat.className} px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium text-base rounded-lg hover:bg-purple-50 transition`}
          >
            {heroData.ctaSecondary}
          </Link>

        </div>

        {/* footer text */}
        <p className="mt-16 text-sm text-gray-400 font-medium">
          Regularly updated with verified AI tools.
        </p>

      </div>
    </section>
  );
}


export function SEOContentSection({ seoContent }) {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className={`${spaceGrotesk.className} text-3xl font-semibold text-gray-900`}>
            {seoContent.title}
          </h2>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-3 rounded-full opacity-70" />
        </div>

        <div>
          {seoContent.paragraphs.map((para, i) => (
            <p key={i} className={`${montserrat.className} text-lg text-gray-700 mb-6 leading-relaxed`}>
              {para}
            </p>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className={`${montserrat.className} text-xl font-semibold text-gray-900 mb-4`}>
              Why Free AI Tools Make Sense
            </h3>
            <ul className="space-y-2">
              {seoContent.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="text-purple-600 font-bold">{benefit[0]}</span>
                  <span>{benefit.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className={`${montserrat.className} text-xl font-semibold text-gray-900 mb-4`}>
              Built for people who ship work
            </h3>
            <div className="grid grid-cols-2 gap-3 text-base text-gray-700">
              {["Startups", "Students", "Freelancers", "Marketers", "Developers", "Designers"].map(role => (
                <div
                  key={role}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-sm transition cursor-default text-center"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            href="#tools"
            className={`${montserrat.className} px-6 py-3 text-white text-base font-medium rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:opacity-90 transition`}
          >
            Explore Tools
          </Link>
        </div>

      </div>
    </section>
  );
}

// FAQ Section with Dropdowns
export function FAQSection({ faqs }) {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFAQ = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`${spaceGrotesk.className} text-3xl font-semibold text-gray-900 mb-2`}>
            FAQs    
          </h2>
          <p className={`${montserrat.className} text-lg text-gray-600`}>
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-xl overflow-hidden transition hover:border-purple-400"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
                aria-expanded={!!openFaqs[index]}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`${montserrat.className} text-lg font-medium text-gray-900 flex-1 pr-4`}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openFaqs[index] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7l-7-7" />
                </svg>
              </button>

              {openFaqs[index] && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="px-5 pb-5"
                >
                  <p className={`${montserrat.className} text-base text-gray-700 leading-relaxed`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Category Highlights
export function CategoriesHighlight({ categories }) {
  return (
    <section className="py-24 bg-gray-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-teal-900 bg-clip-text text-transparent mb-6`}>
            Top Free AI Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Browse by category to find specialized free AI tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/category/${cat.slug}`}
              className="group relative bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 p-8 rounded-3xl border border-gray-200 hover:border-purple-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-teal-500/5 scale-150 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700">{cat.name}</h3>
                  <p className="text-teal-600 font-semibold text-lg">{cat.count} Free Tools</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
