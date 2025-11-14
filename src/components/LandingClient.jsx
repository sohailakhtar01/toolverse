'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import tools from '@/data/tools';
import Image from 'next/image';
import ToolList from '@/components/ToolList';
import {
  Search, Star, Users, Eye, MessageCircle, Code, Palette, BarChart3, Headphones, Database, Globe, Zap, Heart, Wrench
} from 'lucide-react';

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
    <main className="relative min-h-screen   flex flex-col">
      {/* Background Layer */}
      <div
        className="absolute inset-0 rounded-br-full rounded-bl-full
        bg-gradient-to-br from-white/10 to-transparent
        before:content-[''] before:absolute before:inset-0
        before:bg-[linear-gradient(to_right,rgba(255,105,180,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,105,180,0.15)_1px,transparent_1px)]
        before:bg-[size:40px_40px]
        before:mask-image-[radial-gradient(ellipse_at_top_left,black_40%,transparent_80%)]
        z-0 pointer-events-none"
      />



      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 lg:px-12 gap-10 pt-20">

  {/* Top Badge - Centered */}
  <div className="absolute top-20 sm:top-20 left-1/2 transform -translate-x-1/2 z-20">
    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-sm">
      🎯 Featured Tool Directory
    </span>
  </div>

  {/* Left Content */}
  <div className="w-full md:w-1/2 text-center lg:ml-10 md:text-left flex flex-col justify-center mt-16 md:-mt-30">
    <h1 className="text-4xl  sm:text-5xl md:text-6xl font-spaceGrotesk font-bold mb-6 leading-tight">
      Discover the{" "}
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Best AI Tools
      </span>{" "}
      for Your Business
    </h1>

    <p className="text-base sm:text-lg md:text-xl font-spaceGrotesk text-gray-600 max-w-xl mx-auto md:mx-0 mb-8">
      Explore thousands of carefully curated digital tools, software, and services to grow your business.
    </p>

    {/* Buttons */}
   <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 mx-auto md:mx-0 sm:gap-6">
  {/* Browse All Tools Button */}
  <a
    href="/browse-tools"
    className="relative group flex items-center justify-center gap-2 px-8 py-3 font-spaceGrotesk font-semibold rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
  >
    {/* Hover White Background Layer */}
    <span className="absolute inset-0 bg-white scale-x-0 origin-center transform transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-md -z-10"></span>

    <span className="relative flex items-center gap-2 z-10 transition-colors duration-500 group-hover:text-black">
      <Search size={18} />
      Browse All AI Tools
    </span>
  </a>

  {/* Featured Tools Button */}
  <a
    href="/featured"
    className="relative group flex items-center justify-center gap-2 px-8 py-3 font-spaceGrotesk font-semibold rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
  >
    {/* Hover White Background Layer */}
    <span className="absolute inset-0 bg-white scale-x-0 origin-center transform transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-md -z-10"></span>

    <span className="relative flex items-center gap-2 z-10 transition-colors duration-500 group-hover:text-black">
      <Star size={18} />
      Featured Tools of the Week
    </span>
  </a>
</div>


  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/landing.png"
      alt="AI Tools Illustration"
      width={1200}
      height={800}
      className="w-[90%] mt-1 sm:mt-12 md:w-[80%] lg:w-[60%] h-auto object-contain drop-shadow-2xl"
    />
  </div>

  

</section> 
{/* Tools Section */} <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-white"> <div className="flex items-center gap-1 mb-12"> <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div> <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span className="text-sm font-spaceGrotesk font-medium text-gray-600"> Explore Tools </span> </div> <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div> </div> <ToolList tools={tools} title="Browse AI Tools" showSearch={true} showFilters={true} /> </section>


   </main>
  );
}
