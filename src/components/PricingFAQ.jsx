// components/PricingFAQ.jsx
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What’s included in the Free plan?",
      answer:
        "The Free plan gives your AI tool a basic listing with standard category placement. It includes search visibility and a review within 7 days — ideal if you’re just starting out and want some exposure on The Toolsverse.",
    },
    {
      question: "What are the benefits of the Starter plan?",
      answer:
        "Starter plan users get priority placement in the directory, featured recommendations, and up to 2 screenshots for better presentation. Reviews are completed within 3 days, helping your tool get noticed faster.",
    },
    {
      question: "What makes the Pro plan special?",
      answer:
        "The Pro plan gives your listing a verified badge, top placement on the homepage and in categories, up to 5 screenshots, and access to an analytics dashboard. It’s designed for serious founders who want visibility and insights.",
    },
    {
      question: "Who should choose the Enterprise plan?",
      answer:
        "Enterprise is for established companies or teams that want full-scale promotion. It includes a dedicated account manager, newsletter and social media promotion, and custom integrations based on your goals.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes. You can upgrade from any plan to a higher tier anytime. Your listing and benefits will update instantly after confirmation — no need to resubmit your tool.",
    },
    {
      question: "How does the review process work?",
      answer:
        "Every submission is manually reviewed to ensure quality and relevance. Free plans are reviewed within 7 days, Starter within 3 days, and Pro/Enterprise listings within 24–48 hours.",
    },
    {
      question: "What happens if my tool isn’t approved?",
      answer:
        "If your submission doesn’t meet our guidelines, we’ll send feedback so you can make updates and resubmit. For paid plans, if we can’t approve your listing, you’ll receive a full refund.",
    },
    {
      question: "Can I make changes after my listing goes live?",
      answer:
        "Yes. You can update your listing details anytime. Pro and Enterprise users get priority updates, while Free and Starter plan updates are handled within a few business days.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-spaceGrotesk mb-3 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Toolsverse pricing plans and
            submissions
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
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center p-10 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-5">
            Can’t find what you’re looking for? Our team will be happy to guide
            you through the right plan for your AI tool.
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
