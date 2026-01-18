'use client';

import { useState } from 'react';
import { Users, Zap, CheckCircle, ChevronDown } from 'lucide-react';

// Single Professional Row Component
export function ExpandableStatsRow({ categories, tags }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <CategoriesCard categories={categories} />
      <FeaturesCard tags={tags} />
    </div>
  );
}

// Categories Card - Professional Design
function CategoriesCard({ categories }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const showMore = categories.length > 4;

  // Split data: Always show first 4, toggle the rest
  const initialItems = categories.slice(0, 4);
  const expandableItems = categories.slice(4);

  return (
    <div className="group relative mt-8 ml-4 mb-8 bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-8 shadow-sm border border-purple-100/50 hover:shadow-xl hover:border-purple-200 transition-all duration-500 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-violet-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Categories</h3>
              <p className="text-sm text-gray-500">Organized by topic</p>
            </div>
          </div>

          {/* Count Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-2xl font-bold text-purple-700">{categories.length}</span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="space-y-3">
          {/* 1. Static Items (Always visible) */}
          {initialItems.map((cat, index) => (
            <div
              key={`static-${index}`}
              className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100/50 hover:border-purple-300 hover:shadow-md transition-all duration-300 group/item"
              style={{
                animation: `slideIn 0.4s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 group-hover/item:scale-150 transition-transform duration-300"></div>
              <span className="text-sm font-medium text-gray-700 group-hover/item:text-purple-700 transition-colors duration-300">
                {cat}
              </span>
            </div>
          ))}

          {/* 2. Expandable Grid Wrapper (Super Smooth Transition) */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-3 pt-3">
                {expandableItems.map((cat, index) => (
                  <div
                    key={`expanded-${index}`}
                    className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100/50 hover:border-purple-300 hover:shadow-md transition-all duration-300 group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm font-medium text-gray-700 group-hover/item:text-purple-700 transition-colors duration-300">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expand Button */}
        {showMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-5 cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
          >
            <span>{isExpanded ? 'Show Less' : `Show All ${categories.length} Categories`}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-500 group-hover/btn:scale-110 ${isExpanded ? 'rotate-180' : ''
                }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}


// Features Card - Professional Design
function FeaturesCard({ tags }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const showMore = tags.length > 4;

  // Split data
  const initialItems = tags.slice(0, 4);
  const expandableItems = tags.slice(4);

  return (
    <div className="group relative mt-8 mr-4 mb-8 bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-sm border border-blue-100/50 hover:shadow-xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-100/20 to-cyan-100/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Zap className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Key Features</h3>
              <p className="text-sm text-gray-500">Core capabilities</p>
            </div>
          </div>

          {/* Count Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-2xl font-bold text-blue-700">{tags.length}</span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="space-y-3">
          {/* 1. Static Items */}
          {initialItems.map((tag, index) => (
            <div
              key={`static-${index}`}
              className="flex items-start gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100/50 hover:border-blue-300 hover:shadow-md transition-all duration-300 group/item"
              style={{
                animation: `slideIn 0.4s ease-out ${index * 0.1}s both`
              }}
            >
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-gray-700 leading-relaxed group-hover/item:text-blue-700 transition-colors duration-300">
                {tag}
              </span>
            </div>
          ))}

          {/* 2. Expandable Grid Wrapper */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-3 pt-3">
                {expandableItems.map((tag, index) => (
                  <div
                    key={`expanded-${index}`}
                    className="flex items-start gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100/50 hover:border-blue-300 hover:shadow-md transition-all duration-300 group/item"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-gray-700 leading-relaxed group-hover/item:text-blue-700 transition-colors duration-300">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expand Button */}
        {showMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
          >
            <span>{isExpanded ? 'Show Less' : `Show All ${tags.length} Features`}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-500 group-hover/btn:scale-110 ${isExpanded ? 'rotate-180' : ''
                }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}