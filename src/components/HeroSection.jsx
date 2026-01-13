// components/HeroSection.jsx
// ❌ NO "use client" here! This runs entirely on the server.
import Image from "next/image";
import { Search, Send } from "lucide-react";
import HeroScrollButton from "./HeroScrollButton"; // Import the small client island

export default function HeroSection({ totalCount = 0 }) {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Background layer - Pure CSS, renders instantly */}
      <div
        className="absolute h-screen mt-16 inset-0 rounded-br-full rounded-bl-full
        bg-gradient-to-br from-white/10 to-transparent
        before:content-[''] before:absolute before:inset-0
        before:bg-[linear-gradient(to_right,rgba(255,105,180,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,105,180,0.15)_1px,transparent_1px)]
        before:bg-[size:40px_40px]
        before:mask-image-[radial-gradient(ellipse_at_top_left,black_40%,transparent_80%)]
        z-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 lg:px-12 gap-10 pt-20">

        {/* Top Floating Button - Hydrated Island */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30 w-full text-center px-4">
          <HeroScrollButton />
        </div>

        {/* Text Content - Static Server Rendered (LCP CANDIDATE 1) */}
        <div className="w-full md:w-1/2 text-center lg:ml-10 md:text-left flex flex-col justify-center mt-16 md:-mt-30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-spaceGrotesk font-bold mb-6 leading-tight">
            Discover the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Best AI Tools
            </span>{" "}
            for Your Business
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-spaceGrotesk text-gray-600 max-w-xl mx-auto md:mx-0 mb-8">
            Explore {totalCount}+ carefully curated AI tools and software to grow your business.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 mx-auto md:mx-0 sm:gap-6">
            {/* Standard Links - No JS needed */}
            <a
              href="/browse-tools"
              className="relative group flex items-center justify-center gap-2 px-8 py-3 font-spaceGrotesk font-semibold rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-white scale-x-0 origin-center transform transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-md -z-10"></span>
              <span className="relative flex items-center gap-2 z-10 transition-colors duration-500 group-hover:text-black">
                <Search size={18} />
                Browse All AI Tools
              </span>
            </a>

            <a
              href="/submit-tool"
              className="relative group flex items-center justify-center gap-2 px-8 py-3 font-spaceGrotesk font-semibold rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-white scale-x-0 origin-center transform transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-md -z-10"></span>
              <span className="relative flex items-center gap-2 z-10 transition-colors duration-500 group-hover:text-black">
                <Send size={18} />
                Submit Your AI Tool
              </span>
            </a>
          </div>
        </div>

        {/* Hero Image - Static Server Rendered (LCP CANDIDATE 2) */}
        <div className="w-full mt-8 md:w-1/2 flex justify-center">
          <Image
            src="/landing.png"
            alt="AI Tools Illustration - Best AI Directory 2025"
            width={1200}
            height={800}
            priority={true} // Mandatory for LCP
            quality={90} // Reduce slightly from 100 to save bandwidth
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='1200' height='800' fill='%23f3e8ff'/%3E%3C/svg%3E"
            className="w-[90%] mt-1 sm:mt-12 md:w-[80%] lg:w-[60%] h-auto object-contain drop-shadow-2xl mb-20"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px" // Helping browser select right size
          />
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 -mb-16 bg-white">
        <div className="flex items-center gap-1 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
            <span className="text-sm font-spaceGrotesk font-medium text-gray-600">
              Explore Tools
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}