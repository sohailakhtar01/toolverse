"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

// This component handles the animated text in the hero section
export const AnimatedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold text-white  transform transition-all mt-25 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ChatGPT</span>
        <span className="text-white mx-2 sm:mx-4">vs</span>
        <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Claude</span>
      </h1>
      <p className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-4`}>
        Comprehensive Analysis & Comparison of the World's Leading AI Assistants - Updated for 2025
      </p>
      <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a href="#comparison" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6  sm:px-8 py-3  rounded-2xl text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-101 transition-all duration-300 w-full sm:w-auto text-center">
            Read Full Comparison <ArrowRight className="inline w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </a>
          <a href="#pricing" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6  sm:px-8 py-3  rounded-2xl text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-101 transition-all duration-300 w-full sm:w-auto text-center">
            Pricing <ArrowRight className="inline w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </a>
          
        </div>
      </div>
    </>
  );
};

// This component handles the interactive FAQ section
export const FaqSection = ({ faqs }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white cursor-pointer rounded-lg shadow-sm border border-gray-200">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex justify-between cursor-pointer  duration-300 items-center text-left p-4 sm:p-5"
            aria-expanded={expandedFaq === index}
          >
            <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
            {expandedFaq === index ? (
              <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          {expandedFaq === index && (
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};