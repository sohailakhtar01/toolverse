'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Users, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export default function FeaturedToolsClient({ toolsData }) {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Featured', 'Productivity', 'Design', 'Communication', 'Development', 'Analytics'];

  const filteredTools = toolsData.filter(tool => {
    const matchesCategory = selectedCategory === 'Featured' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="px-4 sm:px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Handpicked by Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tools
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the most popular and highly-rated tools used by millions of professionals worldwide.
            Boost your productivity and creativity with these essential tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-start md:justify-center mb-12 md:mb-16 overflow-x-auto pb-2 px-2 md:px-0">
          <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-xl border border-purple-100 flex-shrink-0 min-w-max">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                  selectedCategory === tab
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {tab}
                {selectedCategory === tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 rounded-xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredTools.map((tool, index) => (
            <Link
              key={tool.slug || tool.name}
              href={`/tool/${tool.slug || tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="block group"
            >
              <article
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-purple-100 hover:border-purple-200 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tool.trending && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 z-10">
                    <TrendingUp className="w-3 h-3" />
                    <span>Trending</span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {tool.name}
                        </h2>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-xs font-semibold">
                            {tool.featured ? 'Featured' : tool.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{tool.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{tool.users}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {tool.price}
                      </div>
                    </div>
                  </div>

                  <div className="w-full group/btn bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl py-3 sm:py-4 text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>View Tool</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto">
            <span>View All Tools</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Showing {filteredTools.length} of {toolsData.length} tools
          </p>
        </div>
      </div>
    </main>
  );
}
