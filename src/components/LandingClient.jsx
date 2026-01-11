// components/LandingClient.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Star, Send } from "lucide-react";
export default function LandingClient({ totalCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <main className="relative min-h-screen flex flex-col bg-white">
      {/* Background layer */}
      <div
        className="absolute h-screen mt-16 inset-0 rounded-br-full rounded-bl-full
        bg-gradient-to-br from-white/10 to-transparent
        before:content-[''] before:absolute before:inset-0
        before:bg-[linear-gradient(to_right,rgba(255,105,180,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,105,180,0.15)_1px,transparent_1px)]
        before:bg-[size:40px_40px]
        before:mask-image-[radial-gradient(ellipse_at_top_left,black_40%,transparent_80%)]
        z-0 pointer-events-none"
      />



      {/* Hero section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 lg:px-12 gap-10 pt-20">
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30 w-full text-center px-4">
          <button
            onClick={() =>
              document.getElementById("partner-tools")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group cursor-pointer relative inline-flex p-[2px] overflow-hidden rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {/* THE REVOLVING 'COMET' BORDER LAYER
      - animate-spin: Makes it rotate 360 degrees.
      - conic-gradient: Creates the colorful trail (Red -> Yellow -> Green -> Blue -> Transparent).
      - inset-[-100%]: Makes the gradient layer huge so corners don't clip during rotation.
    */}
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] 
      bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ff4b1f_60%,#ff9068_70%,#43e97b_80%,#38f9d7_90%,transparent_100%)]"
            />

            {/* THE INNER CONTENT MASK 
      - bg-white: Covers the center of the spinning gradient so only the edge is visible.
    */}
            <span className="relative inline-flex h-full w-full items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-700 group-hover:bg-slate-50 transition-colors">

              {/* Icon (Sparkles) */}
              <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>

              <span>View our recommended tools</span>

              {/* Arrow */}
              <span className="ml-1 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all">
                →
              </span>
            </span>
          </button>
        </div>


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

        <div className="w-full mt-8 md:w-1/2 flex justify-center">
          <Image
            src="/landing.png"
            alt="AI Tools Illustration - Best AI Directory 2025"
            width={1200}
            height={800}
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='1200' height='800' fill='%23f3e8ff'/%3E%3C/svg%3E"
            className="w-[90%] mt-1 sm:mt-12 md:w-[80%] lg:w-[60%] h-auto object-contain drop-shadow-2xl mb-20"
          />
        </div>
      </section>

      {/* Divider Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 -mb-20 bg-white">
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
      </section>


    </main>
  );
}
