// components/BrowseClient.jsx
"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import ToolList from "@/components/ToolList";

export default function BrowseClient({ tools, currentPage, totalPages, totalCount, allCategories = [] }) {
  const router = useRouter();
  const pathname = usePathname();
  const [clientTools, setClientTools] = useState(tools);
  const [loadingMore, setLoadingMore] = useState(false);

  // 🔥 SMOOTH SCROLL ON MOUNT & PAGE CHANGE (No Hash in URL)
  useEffect(() => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [pathname]); // Triggers when URL changes

  // 🔥 CUSTOM NAVIGATION WITH SMOOTH SCROLL
  const handlePageClick = (pageNum, e) => {
    e.preventDefault(); // Prevent default Link behavior
    
    const href = pageNum === 1 ? '/browse-tools' : `/browse-tools/page/${pageNum}`;
    
    // Navigate without scroll
    router.push(href, { scroll: false });
  };

  const handleLoadMore = async () => {
    if (currentPage >= totalPages) return;
    
    setLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const res = await fetch(`/api/tools?page=${nextPage}&limit=24`);
      const data = await res.json();
      
      setClientTools(prev => [...prev, ...data.items]);
    } catch (error) {
      console.error("Load more error:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen mt-[16px] bg-gradient-to-br from-purple-50 via-white to-pink-50 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-purple-600 transition">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-purple-600 font-medium">Browse Tools</span>
              {currentPage > 1 && (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-600">Page {currentPage}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-spaceGrotesk lg:text-6xl font-bold text-gray-900 mb-6">
              Discover the{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Best AI Tools
              </span>
              <br className="hidden sm:block" />
              for Your Business
            </h1>

            <p className="text-xl text-gray-600 font-spaceGrotesk max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore thousands of carefully curated AI tools. Page {currentPage} of {totalPages}
            </p>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">{totalCount}+</div>
                <div className="text-sm font-spaceGrotesk text-gray-500 uppercase tracking-wide">Tools Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-spaceGrotesk font-bold text-pink-600 mb-1">10K+</div>
                <div className="text-sm font-spaceGrotesk text-gray-500 uppercase tracking-wide">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-spaceGrotesk font-bold text-blue-600 mb-1">4.9</div>
                <div className="text-sm font-spaceGrotesk text-gray-500 uppercase tracking-wide">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools List Section */}
      <div className="relative mt-[-66px]">
        <div className="max-w-8xl mx-auto px-7 pb-20">
          {/* 🔥 SCROLL TARGET (Hidden from URL) */}
          <div id="tools-section" className="scroll-mt-24" />

          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              <span className="text-sm font-medium font-spaceGrotesk text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <ToolList 
  tools={clientTools}
  allCategories={allCategories}
  title="Browse AI Tools"
  showSearch={true}
  showFilters={true}
  isLoading={false}
/>


          {/* 🔥 CLEAN PAGINATION (No Hash in URLs) */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {/* Previous Button */}
              {currentPage > 1 && (
                <button
                  onClick={(e) => handlePageClick(currentPage - 1, e)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300 transition cursor-pointer"
                >
                  ← Previous
                </button>
              )}

              {/* Page Numbers */}
              {getPaginationRange().map((pageNum, idx) => {
                if (pageNum === '...') {
                  return <span key={`dots-${idx}`} className="px-2 text-gray-400">...</span>;
                }

                const isActive = pageNum === currentPage;

                return (
                  <button
                    key={pageNum}
                    onClick={(e) => handlePageClick(pageNum, e)}
                    className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'border border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              {currentPage < totalPages && (
                <button
                  onClick={(e) => handlePageClick(currentPage + 1, e)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300 transition cursor-pointer"
                >
                  Next →
                </button>
              )}
            </div>

            {/* Optional Load More */}
            {currentPage < totalPages && (
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingMore ? 'Loading...' : 'Load More Tools'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-spaceGrotesk font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl font-spaceGrotesk text-purple-100 mb-8">
            Submit your favorite AI tool and help the community discover amazing resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/featured" className="inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition">
              Featured Tools
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/submit-tool" className="inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition border border-white/30">
              Submit Your AI Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
