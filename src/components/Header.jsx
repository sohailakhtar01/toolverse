"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/free", label: "Free AI Solutions" },
    { href: "/blog", label: "Insights" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="
    sr-only focus:not-sr-only
    fixed top-2 left-2 z-[100]
    bg-white text-purple-600
    px-4 py-2 rounded-md shadow
    font-semibold
  "
      >
        Skip to content
      </a>
      {/* Main Header 
        z-50 ensures it stays ON TOP of the mobile menu 
      */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 h-16 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Image
                src="/logo.png"
                alt="Toolsverse Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                priority
              />
              <span className="text-2xl font-spaceGrotesk font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ToolsVerse
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center"
              aria-label="Primary navigation"
            >
              <ul className="flex items-center space-x-4">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group font-spaceGrotesk relative px-3 py-2 text-[18px] text-gray-700 font-semibold hover:text-purple-600 transition-colors"
                    >
                      {label}
                      <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-md" />
                    </Link>
                  </li>
                ))}

                {/* <li>
                  <Link
                    href="/browse-tools"
                    aria-label="Search AI tools"
                    className="p-2 text-gray-600 hover:text-purple-600 transition"
                  >
                    🔍
                  </Link>
                </li> */}

                <li>
                  <Link
                    href="/submit-tool"
                    className="relative group flex items-center justify-center px-6 py-2 font-spaceGrotesk font-semibold rounded-[25px] text-white bg-gradient-to-br from-purple-500 to-pink-500 shadow-sm transition-all duration-500 hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-[25px] -z-10" />
                    <span className="relative z-10 group-hover:text-black">
                      Submit Tool
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>


            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-purple-600 hover:text-purple-700 focus:outline-none transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay 
        - Uses translate-x for 60FPS animation (no lag)
        - top-16 ensures it sits strictly BELOW the header logo
        - will-change-transform hints browser to use GPU
      */}
      <div
        className={`
          fixed top-16 right-0 bottom-0 w-full md:hidden bg-white z-40
          transform transition-transform duration-300 ease-in-out will-change-transform
          ${isOpen ? "translate-x-0 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full overflow-y-auto p-6">
          <div className="flex flex-col space-y-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-spaceGrotesk text-xl font-medium text-gray-700 py-3 border-b border-gray-100 hover:text-purple-600 hover:pl-2 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* <li>
                <Link
                  href="/browse-tools"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xl font-medium text-gray-700 py-3 hover:text-purple-600"
                >
                  🔍 Search Tools
                </Link>
              </li> */}
            </ul>


            <div className="pt-6">
              <Link
                href="/submit-tool"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-3 py-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg font-bold rounded-4xl shadow-md active:scale-95 transition-transform"
              >
                Submit Tool
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Dark Overlay for the background content only */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-30 md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;