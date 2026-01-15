"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// ✅ Accept totalCount as a prop (default to 770 if missing)
export default function FaqSection({ totalCount = 770 }) {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Move FAQs inside the component to use the dynamic variable
  const faqs = [
    {
      question: "What is Toolsverse?",
      // 🔥 Dynamic Count Here
      answer: `Toolsverse is a premium directory of over ${totalCount}+ AI tools and software. We curate the best AI applications across 100+ categories to help businesses, developers, and creatives find the perfect tools to boost their productivity.`
    },
    {
      question: "Is Toolsverse free to use?",
      answer: "Yes! Browsing our directory, comparing tools, and reading reviews is 100% free for everyone. We aim to democratize access to AI technology."
    },
    {
      question: "How can I submit my AI tool?",
      answer: "You can submit your tool by clicking the 'Submit Tool' button in the navigation bar. We offer both free and expedited review options to get your tool listed in front of thousands of daily visitors."
    },
    {
      question: "How often is the directory updated?",
      answer: "Our team updates the directory daily. We constantly monitor the AI landscape to add new tools, update existing listings, and remove outdated software to ensure you get the most accurate information."
    },
    {
      question: "Do you offer advertising options?",
      answer: "Yes, we offer various sponsorship and advertising packages for tool owners looking to increase their visibility. You can check our 'Pricing' page for more details on featured listings and newsletter sponsorships."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-1 bg-white relative z-10 mt-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-spaceGrotesk font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about Toolsverse and how to make the most of our AI directory.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-purple-50/50 border-purple-200 shadow-sm' : 'bg-white hover:border-purple-200'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className={`font-spaceGrotesk font-semibold text-lg ${openIndex === index ? 'text-purple-700' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}