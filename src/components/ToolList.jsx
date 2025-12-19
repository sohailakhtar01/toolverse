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
    <section className="relative w-full py-16 px-3 sm:px-6 bg-gradient-to-br from-white to-purple-100 rounded-t-[40px] rounded-b-[40px] shadow-lg overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/100 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/100 rounded-full blur-[120px]"></div>
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-500/30 rounded-full blur-[90px]"></div>
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-500/30 rounded-full blur-[90px]"></div>

      {/* Header */}
      <div className="relative z-10 text-center px-3 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spaceGrotesk leading-snug sm:leading-tight text-white sm:bg-gradient-to-r sm:from-purple-600 sm:to-pink-600 sm:bg-clip-text sm:text-transparent drop-shadow-sm">
          {title}
        </h2>
        <p className="text-white sm:text-black mt-2 text-lg font-spaceGrotesk">
          {isLoading ? "Loading amazing tools..." : `Discover ${tools.length}+ amazing AI tools`}
        </p>
      </div>

      {/* Results */}
      <div className="relative z-10 mt-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-4 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-3 mx-auto w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
              </div>
            ))}
          </div>
        ) : tools.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-800">No tools found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {tools.map((tool, index) => (
              <div
                key={`${tool.slug}-${index}`}
                className="animate-in slide-in-from-bottom-4 duration-300"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolList;
