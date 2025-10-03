// components/PricingFAQ.jsx
"use client";

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's the difference between Free and Featured listing?",
      answer: "Free listing gets your tool in our directory with basic visibility. Featured listing gives you premium placement at the top of categories, homepage visibility, dofollow backlinks, social media promotion, and priority support - helping you get 10x more traffic and exposure."
    },
    {
      question: "Is the Featured listing a one-time payment or recurring?",
      answer: "Featured listing is a one-time payment of $19 with lifetime featured status. No monthly fees, no hidden charges. Your tool stays featured permanently once approved."
    },
    {
      question: "How long does it take to get listed?",
      answer: "Free listings are reviewed within 5-7 business days. Featured listings get fast-track review within 24-48 hours, so you can start getting traffic quickly."
    },
    {
      question: "What is a dofollow backlink and why does it matter?",
      answer: "A dofollow backlink passes SEO value from our directory to your website, helping improve your search engine rankings and domain authority. This can significantly boost your organic traffic over time."
    },
    {
      question: "Can I upgrade from Free to Featured later?",
      answer: "Yes! You can upgrade your free listing to featured at any time by paying the $19 fee. All featured benefits will be applied to your existing listing immediately."
    },
    {
      question: "Will my tool be promoted on social media?",
      answer: "Featured listings are promoted on our social media channels (Twitter, LinkedIn) and included in our weekly newsletter sent to 10,000+ subscribers, giving your tool massive exposure."
    },
    {
      question: "What happens if my tool is not approved?",
      answer: "If your tool doesn't meet our quality guidelines, we'll provide feedback and give you a chance to resubmit. For Featured listings, if we cannot list your tool, you'll receive a full refund."
    },
    {
      question: "Can I update my listing after submission?",
      answer: "Yes! Both Free and Featured listings can be updated. Featured listings get priority handling for updates, while Free listings are updated within a few days via email request."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about submitting your AI tool
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-8 bg-white rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
