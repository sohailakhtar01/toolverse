// app/chatgpt-vs-bard/components/FAQClient.jsx
"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQClient = ({ faqs }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="space-y-4 ">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
          <button
            className="w-full cursor-pointer px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            aria-expanded={expandedFaq === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-gray-800 pr-4 text-sm sm:text-base">
              {faq.question}
            </span>
            {expandedFaq === index ? (
              <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
            )}
          </button>
          {expandedFaq === index && (
            <div 
              id={`faq-answer-${index}`}
              className="px-6 pb-4"
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQClient;