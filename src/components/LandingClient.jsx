'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import tools from '@/data/tools';
import ToolList from '@/components/ToolList';
import {
  Search, Star, Users, Eye, MessageCircle, Code, Palette, BarChart3, Headphones, Database, Globe, Zap, Heart, Wrench
} from 'lucide-react';

const categories = [
  { name: "Development", count: "450+", icon: <Code className="w-8 h-8" />, color: "bg-blue-500" },
  { name: "Design", count: "320+", icon: <Palette className="w-8 h-8" />, color: "bg-pink-500" },
  { name: "Analytics", count: "180+", icon: <BarChart3 className="w-8 h-8" />, color: "bg-green-500" },
  { name: "Communication", count: "220+", icon: <MessageCircle className="w-8 h-8" />, color: "bg-purple-500" },
  { name: "Security", count: "90+", icon: <Eye className="w-8 h-8" />, color: "bg-red-500" },
  { name: "Productivity", count: "380+", icon: <Zap className="w-8 h-8" />, color: "bg-blue-600" },
  { name: "Media", count: "280+", icon: <Headphones className="w-8 h-8" />, color: "bg-orange-500" },
  { name: "Audio", count: "150+", icon: <Headphones className="w-8 h-8" />, color: "bg-teal-500" },
  { name: "Database", count: "80+", icon: <Database className="w-8 h-8" />, color: "bg-gray-600" },
  { name: "Web", count: "340+", icon: <Globe className="w-8 h-8" />, color: "bg-green-600" },
  { name: "Automation", count: "200+", icon: <Zap className="w-8 h-8" />, color: "bg-orange-600" },
  { name: "Health", count: "60+", icon: <Heart className="w-8 h-8" />, color: "bg-pink-600" }
];

export default function LandingClient() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const filteredTools = useMemo(() => {
    if (!tools || !Array.isArray(tools)) return [];
    return selectedCategory === "Featured"
      ? tools.filter((tool) => tool.isFeatured)
      : tools.filter((tool) => (tool.category || []).includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <main className="flex-grow mt-[16px]">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 md:py-20 text-center">
        <div className="max-w-full mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              🎯 Featured Tool Directory
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl  font-montserrat font-bold mb-4">
            Discover the <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Best AI Tools</span>
            <span className="text-black"> for Your Business</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-spaceGrotesk text-gray-600 max-w-2xl mx-auto mb-8">
            Explore thousands of carefully curated digital tools, software, and services to grow your business.
          </p>
<div className="p-[2px] rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl text-center">
  <div className="bg-gradient-to-r from-[#F3F7FF] to-[#F6F5FE] rounded-lg py-5 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug sm:leading-normal">
      We've partnered with industry leaders like
      <span className="block sm:inline font-bold"> Writesonic</span>
      <span className="block sm:inline font-bold"> Pictory</span>
      <span className="block sm:inline font-bold"> Scalenut</span>
       to help you achieve your goals faster.
    </p>
  </div>
</div>

        </div>
      </section>

      {/* call to action buttons */}
<div className="flex flex-wrap gap-4 sm:gap-10 mb-[30px] justify-center mt-[-50px]">
  <a
    href="/browse-tools"
    className="px-6 py-3 cursor-pointer bg-gradient-to-r  from-purple-500 to-pink-500 text-white rounded-[30px]  font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-101"
  >
    🔍 Browse All AI Tools
  </a>

  <a
    href="/featured"
    className="px-6 py-3 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-[30px]  font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-101"
  >
    ⭐ Featured Tools of the Week
  </a>
</div>





      {/* Tool List */}
      <div className="relative max-w-100xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">Explore Tools</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        <ToolList tools={tools} title="Browse AI Tools" showSearch={true} showFilters={true} />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 md:gap-12 text-center">
        {[
          { icon: <Wrench className="text-purple-600" />, value: '2,500+', label: 'Tools Listed', bg: 'bg-purple-100' },
          { icon: <Users className="text-orange-600" />, value: '50K+', label: 'Happy Users', bg: 'bg-orange-100' },
          { icon: <Star className="text-yellow-600" />, value: '4.9', label: 'Average Rating', bg: 'bg-yellow-100' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center`}>{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="px-4 sm:px-6 py-16 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">
            Explore by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse tools by category to find exactly what you need for your specific use case.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => (

            
            // here i am changing this
            <Link
  key={category.name}
  href={`/categories/${encodeURIComponent(category.name)}`}
  className="block group p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer border border-purple-100"
>
  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-4 text-white`}>
    {category.icon}
  </div>
  <h3 className="text-xl font-semibold text-gray-800 mb-1">{category.name}</h3>
  <p className="text-purple-600 font-medium text-sm">{category.count}</p>
</Link>
          ))}
        </div>
      </section>

      {/* View All Tools Button */}
      <div className='w-full flex justify-center'>
        <Link href="/browse-tools">
          <button className="sm:px-8 py-2 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-101 font-medium text-base">
            View All Tools
          </button>
        </Link>
      </div>
    </main>
  );
}