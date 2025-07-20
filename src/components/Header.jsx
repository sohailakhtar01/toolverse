// components/Header.jsx

"use client"; // This is necessary for Next.js to treat this file as a client component
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                alt="ToolVault Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> {/* Reverted to pink-600 */}
              ToolVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-[18px] text-gray-700  hover:text-purple-600 transition-colors">Home</Link>

            <Link href="/browse-tools" className="px-3 py-2 text-[18px]  text-gray-700  hover:text-purple-600 transition-colors">Browse Tools</Link>
            <Link href="/how-it-works" className="px-3 py-2 text-[18px] text-gray-700 hover:text-purple-600 transition-colors">How It Works</Link>
            <Link href="/featured" className="px-3 py-2 text-[18px]   text-gray-700 hover:text-purple-600 transition-colors">Featured</Link>
            <Link href="/about" className="px-3 py-2 text-[18px] text-gray-700 hover:text-purple-600 transition-colors">About Us</Link>
            {/* <Link href="/sign-in" className="px-3 py-2 text-[18px]  cursor-pointer text-purple-600 hover:text-purple-700 transition-colors">
              Sign in
            </Link> */}
            <Link href="/browse-tools " className="px-5 py-2 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-[30px] hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-101">
              Get Started
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
            <nav className="flex flex-col space-y-2 flex-grow"> {/* flex-grow to push last link to bottom */}
              <Link href="/" className="px-3 py-2 text-xl text-gray-700  hover:text-purple-600 transition-colors">Home</Link>

              <Link href="/browse-tools" onClick={() => setIsOpen(false)} className="text-left text-xl  px-4 py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200">Browse Tools</Link>
              <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="text-left text-xl px-4 py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200">How It Works</Link>
              <Link href="/featured" onClick={() => setIsOpen(false)} className="text-left px-4 text-xl py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200">Featured</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-left px-4 text-xl  py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200">About Us</Link>
              {/* <Link href="/sign-in" onClick={() => setIsOpen(false)} className="text-left px-4 text-xl  py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200">
                Sign in
              </Link> */}
<div className="pt-4 mb-[50px] border-t border-purple-100 flex justify-center items-center h-full">
                <Link href="/browse-tools" onClick={() => setIsOpen(false)} className="block w-[80%] text-center px-3 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;