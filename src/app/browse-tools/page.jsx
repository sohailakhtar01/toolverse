// src/app/browse-tools/page.jsx
// <--- Keep this at the very top!
import Link from 'next/link';
import React from 'react'; // Only React is needed here
import tools from '@/data/tools'; // <--- Import tools data
import ToolList from '@/components/ToolList'; // <--- Import ToolList component

// No 'metadata' export here, it's in layout.jsx

export default function BrowseToolsPage() {
  return (
    <div className="min-h-screen mt-[16px] bg-gradient-to-br from-purple-50 via-white to-pink-50 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-16">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <span>Home</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-purple-600 font-medium">Browse Tools</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-spaceGrotesk lg:text-6xl font-bold text-gray-900 mb-6">
              Discover the{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Best AI Tools
              </span>
              <br className="hidden sm:block" />
              for Your Business
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 font-spaceGrotesk max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore thousands of carefully curated AI tools, software, and services. 
              From productivity to creative platforms, find everything you need to grow your business.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {tools.length}+
                </div>
                <div className="text-sm font-spaceGrotesk text-gray-500 uppercase tracking-wide">
                  Tools Listed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-spaceGrotesk font-bold text-pink-600 mb-1">
                  10K+
                </div>
                <div className="text-sm font-spaceGrotesk text-gray-500 uppercase tracking-wide">
                  Happy Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-spaceGrotesk font-bold text-blue-600 mb-1">
                  4.9
                </div>
                <div className="text-sm font-spaceGrotesk text-gray-500 uppercase tracking-wide">
                  Average Rating
                </div>
              </div>
            </div>

            {/* Featured Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { name: "AI Writing", icon: "✍️", color: "from-purple-500 to-purple-600" },
                { name: "Design", icon: "🎨", color: "from-pink-500 to-pink-600" },
                { name: "Productivity", icon: "⚡", color: "from-blue-500 to-blue-600" },
                { name: "Analytics", icon: "📊", color: "from-green-500 to-green-600" },
                { name: "Marketing", icon: "📱", color: "from-orange-500 to-orange-600" },
              ].map((category, index) => (
                <div
                  key={category.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/80 transition-all cursor-pointer group"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools List Section */}
      <div className="relative mt-[-66px]">
        <div className="max-w-8xl mx-auto px-7  pb-20">
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              <span className="text-sm font-medium font-spaceGrotesk text-gray-600">Explore Tools</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          {/* Tools List Component */}
          <ToolList 
            tools={tools} 
            title="Browse AI Tools"
            showSearch={true}
            showFilters={true}
          />
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-spaceGrotesk font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl font-spaceGrotesk text-purple-100 mb-8">
            Submit your favorite AI tool and help the community discover amazing new resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/featured"
                      className="inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-xl"
                    >
                      Featured Tools
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/submit-tool"
                      className="inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
                    >
                      Submit Your AI Tool
                    </Link>
                  </div>
        </div>
      </div>
    </div>
  );
}