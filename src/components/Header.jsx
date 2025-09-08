// components/Header.jsx

"use client"; // This is necessary for Next.js to treat this file as a client component
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ChevronDown } from "lucide-react"; // dropdown icon

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
    const [mobileCompareOpen, setMobileCompareOpen] = useState(false);

  // Effect to manage body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Resets to default, which is usually 'auto' or 'unset'
    }
    // Cleanup function to ensure overflow is reset if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"> {/* Changed sticky to fixed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png" // Ensure this path is correct relative to public folder
                alt="Toolsverse Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-2xl font-spaceGrotesk font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> {/* Reverted to pink-600 */}
              ToolsVerse
            </span>
          </Link>

          {/* Desktop Navigation */}
         
<nav className="hidden md:flex items-center space-x-4">
  <Link
    href="/"
    className="group font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors"
  >
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-md"></span>
  </Link>

  {/* Free AI Tools with Dropdown */}
  <div className="relative group">
    <button className="flex cursor-pointer items-center font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors">
      Free AI Tools
      <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
      
    </button>
    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
      <Link
        href="/free-ai-tools/students"
        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
      >
        Free AI Tools for Students
      </Link>
      <Link
        href="/free-ai-tools/business"
        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
      >
        Free AI Tools for Business
      </Link>
      
    </div>
  </div>
  {/* ////////////////// */}
  <div className="relative group">
  <button className="flex items-center font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors">
    Compare AI Tools
    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
  </button>
  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
    <Link
      href="/compare/chatgpt-vs-claude"
      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
    >
      ChatGPT vs Claude
    </Link>
    <Link
      href="/compare/chatgpt-vs-bard"
      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
    >
      ChatGPT vs Bard
    </Link>
    <Link
      href="/compare/midjourney-vs-dalle"
      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
    >
      Midjourney vs DALL·E
    </Link>
    <Link
      href="/compare/midjourney-vs-stable-diffusion"
      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
    >
      Midjourney vs Stable Diffusion
    </Link>
    <Link
      href="/compare/chatgpt-vs-copilot"
      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
    >
      ChatGPT vs GitHub Copilot
    </Link>
  </div>
</div>

  {/* /////////////////////// */}
  {/* <Link
    href="/browse-tools"
    className="group font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors"
  >
    Browse Tools
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-md"></span>
  </Link> */}

  <Link
    href="/blog"
    className="group font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors"
  >
    Insights
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-md"></span>
  </Link>


  <Link
    href="/featured"
    className="group font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors"
  >
    Featured
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-md"></span>
  </Link>
  <Link
  href="/submit-tool"
  className="flex items-center gap-2 px-6 py-2 cursor-pointer bg-gradient-to-br font-spaceGrotesk from-purple-500 to-pink-500 text-white rounded-[25px] font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-101"
>
  
  Submit Tool
</Link>



</nav>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-purple-600 hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md" aria-label="Toggle mobile menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-10 backdrop-blur-sm z-40 md:hidden"

          />
        )}

        {/* Mobile Navigation Menu */}
        <div className={`
            fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-md shadow-2xl z-50
            transform transition-transform duration-300 ease-in-out origin-top
            ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'} md:hidden
        `}>
          <div className="p-6 flex flex-col h-full overflow-y-auto"> {/* Added overflow-y-auto for scrollable content */}
            {/* Close button at the top of the mobile menu */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-purple-600 hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            {/* Mobile Navigation Links */}
<nav className="flex flex-col space-y-2 flex-grow">
  <Link href="/" onClick={() => setIsOpen(false)} className="px-3 font-spaceGrotesk py-2 text-xl text-gray-700 hover:text-purple-600 transition-colors">
    Home
  </Link>

  {/* Free AI Tools Dropdown */}
  <div>
    <button
      onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
      className="flex justify-between items-center w-full px-4 py-3 text-xl font-spaceGrotesk text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all"
    >
      Free AI Tools
      <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${mobileToolsOpen ? "rotate-180" : ""}`} />
    </button>
    {mobileToolsOpen && (
      <div className="pl-6">
        <Link href="/free-ai-tools/students" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">Students</Link>
        <Link href="/free-ai-tools/business" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">Business</Link>
      </div>
    )}
  </div>

  {/* Compare AI Tools Dropdown */}
  <div>
    <button
      onClick={() => setMobileCompareOpen(!mobileCompareOpen)}
      className="flex justify-between items-center w-full px-4 py-3 text-xl font-spaceGrotesk text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all"
    >
      Compare AI Tools
      <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${mobileCompareOpen ? "rotate-180" : ""}`} />
    </button>
    {mobileCompareOpen && (
      <div className="pl-6">
        <Link href="/compare/chatgpt-vs-claude" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">ChatGPT vs Claude</Link>
        <Link href="/compare/chatgpt-vs-bard" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">ChatGPT vs Bard</Link>
        <Link href="/compare/midjourney-vs-dalle" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">Midjourney vs DALL·E</Link>
        <Link href="/compare/midjourney-vs-stable-diffusion" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">Midjourney vs Stable Diffusion</Link>
        <Link href="/compare/chatgpt-vs-copilot" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-purple-600">ChatGPT vs Copilot</Link>
      </div>
    )}
  </div>

  {/* Rest of links */}
  <Link href="/browse-tools" onClick={() => setIsOpen(false)} className="px-4 py-3 text-xl font-spaceGrotesk text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all">
    Browse Tools
  </Link>
  <Link href="/blog" onClick={() => setIsOpen(false)} className="px-4 py-3 text-xl font-spaceGrotesk text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all">
    Insights
  </Link>
  <Link href="/featured" onClick={() => setIsOpen(false)} className="px-4 py-3 text-xl font-spaceGrotesk text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all">
    Featured
  </Link>
</nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;