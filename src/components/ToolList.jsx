// components/ToolList.jsx
"use client";
import React from "react";
import ToolCard from "./ToolCard";

const ToolList = ({
  tools = [],
  title = "Browse AI Tools",
  isLoading = false,
}) => {

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-6">
      
      {/* Professional Multi-Layer Background */}
      {/* Clean Background */}
<div className="absolute inset-0 -z-10">
  {/* Soft base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20" />

  {/* Very subtle grid */}
  <div className="absolute inset-0 
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
    linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:3rem_3rem] opacity-20" />
</div>


      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        {/* <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-3">
              {title}
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>
          
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {isLoading 
              ? "Loading amazing tools..." 
              : `Discover ${tools.length}+ powerful AI tools to transform your workflow`
            }
          </p>
        </div> */}

        {/* Tools Grid / Loading / Empty State */}
        <div className="relative">
          {isLoading ? (
            // Loading Skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="group animate-pulse bg-white/80 backdrop-blur-sm rounded-2xl p-6 
                    border border-indigo-100/50 shadow-sm"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl mb-4 mx-auto" />
                  <div className="h-5 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mb-3 w-3/4 mx-auto" />
                  <div className="h-4 bg-gradient-to-r from-gray-100 to-indigo-50 rounded w-1/2 mx-auto mb-4" />
                  <div className="h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl w-full" />
                </div>
              ))}
            </div>
          ) : tools.length === 0 ? (
            // Empty State
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-6">
                <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No tools found</h3>
              <p className="text-gray-500 text-base">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            // Tools Grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {tools.map((tool, index) => (
                <div
                  key={`${tool.slug}-${index}`}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ 
                    animationDelay: `${Math.min(index * 50, 400)}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>
          )}
        </div>

        
      </div>
    </section>
  );
};

export default ToolList;
