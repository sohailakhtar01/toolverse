// components/BrowseClient.jsx
"use client";
import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HomeSearchBar from "@/components/HomeSearchBar";

import Link from "next/link";
import ToolCard from "./ToolCard";

export default function BrowseClient({
  initialTools,
  allCategories,
  currentPage,
  totalPages,
  totalCount,
  searchParams = {},
  pageType = "browse",
  categoryName = "",
  pricingType = ""
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState(searchParams.q || "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Build URL with updated params
  const buildURL = (updates) => {
    const newParams = new URLSearchParams(params);

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "rating") {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    // Always reset to page 1 on filter change
    if (!updates.page) {
      newParams.delete('page');
    }

    // Determine base path
    let basePath = "/browse-tools";

    if (pageType === "category") {
      const slug = categoryName.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
      basePath = pricingType ? `/categories/${slug}/${pricingType}` : `/categories/${slug}`;
    } else if (pageType === "pricing") {
      basePath = `/${pricingType}`;
    }

    const queryString = newParams.toString();
    return queryString ? `${basePath}?${queryString}` : basePath;
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const selected = e.target.value;

    startTransition(() => {
      if (selected === "all") {
        router.push(pageType === "pricing" && pricingType ? `/${pricingType}` : "/browse-tools");
      } else {
        const slug = selected.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
        const path = (pageType === "pricing" && pricingType)
          ? `/categories/${slug}/${pricingType}`
          : `/categories/${slug}`;
        router.push(path);
      }
    });
  };

  // Handle pricing button click
  const handlePricingClick = (pricing) => {
    startTransition(() => {
      if (pageType === "category" && categoryName) {
        const slug = categoryName.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
        router.push(`/categories/${slug}/${pricing}`);
      } else {
        router.push(`/${pricing}`);
      }
    });
  };

  // Handle sort change (instant, no Apply button)
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    startTransition(() => {
      router.push(buildURL({ sort: sortValue }));
    });
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      router.push(buildURL({ q: searchQuery.trim() }));
    });
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    startTransition(() => {
      router.push(buildURL({ q: "" }));
    });
  };

  // Pagination
  const goToPage = (page) => {
    startTransition(() => {
      router.push(buildURL({ page: page.toString() }));
    });
  };

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
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

  // Determine active pricing
  const currentPricing = pageType === "pricing" ? pricingType :
    (pageType === "category" && pricingType) ? pricingType : null;

  return (
    <div className="min-h-screen ">

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/30 to-white">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient mesh overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
          linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px)
        `,
              backgroundSize: '80px 80px'
            }}
          ></div>

          {/* Gradient orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors duration-200">
              Home
            </Link>
            <span className="text-slate-400">/</span>

            {pageType === "category" ? (
              <>
                <Link href="/browse-tools" className="hover:text-indigo-600 transition-colors duration-200">
                  Browse
                </Link>
                <span className="text-slate-400">/</span>
                <Link
                  href={`/categories/${categoryName.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-")}`}
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {categoryName}
                </Link>
                {pricingType && (
                  <>
                    <span className="text-slate-400">/</span>
                    <span className="text-indigo-600 font-semibold capitalize">
                      {pricingType.replace("-", " ")}
                    </span>
                  </>
                )}
              </>
            ) : pageType === "pricing" ? (
              <>
                <Link href="/browse-tools" className="hover:text-indigo-600 transition-colors duration-200">
                  Browse
                </Link>
                <span className="text-slate-400">/</span>
                <span className="text-indigo-600 font-semibold capitalize">
                  {pricingType.replace("-", " ")}
                </span>
              </>
            ) : (
              <span className="text-indigo-600 font-semibold">Browse Tools</span>
            )}
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
            {/* Main Content */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                {searchParams.q ? (
                  <>
                    Search Results for{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      "{searchParams.q}"
                    </span>
                  </>
                ) : pageType === "category" ? (
                  <>
                    {categoryName}
                    {pricingType && <span className="capitalize"> {pricingType.replace("-", " ")}</span>}{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      AI Tools
                    </span>
                  </>
                ) : pageType === "pricing" ? (
                  <>
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent capitalize">
                      {pricingType.replace("-", " ")}
                    </span>{" "}
                    AI Tools
                  </>
                ) : (
                  <>
                    Discover{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      4000+ AI Tools
                    </span>
                  </>
                )}
              </h1>

              <p className="relative inline-block text-lg sm:text-xl text-slate-600 mb-6 leading-relaxed">
                <span className="relative">
                  {isPending ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading tools...
                    </span>
                  ) : (
                    <>
                      <span className="font-semibold text-slate-900">{totalCount.toLocaleString()}</span> curated AI tools to boost your productivity
                    </>
                  )}

                  {/* Classic underline - animates from left, matches text width */}
                  <span className="absolute bottom-0 left-0 h-[24px] w-0 rounded-xl bg-gradient-to-r from-indigo-500/15 via-indigo-600/20 to-indigo-500/15 animate-[slideIn_1.2s_ease-out_0.3s_forwards]"></span>                </span>
              </p>




              {/* Quick Stats Badges */}
              <div className="flex flex-nowrap items-center justify-center gap-1.5 md:gap-3 w-full overflow-x-auto no-scrollbar px-2">

                {/* Badge 1: Free Access */}
                <span className="inline-flex flex-shrink-0 items-center px-2 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-semibold bg-emerald-50/90 backdrop-blur-sm text-emerald-700 border border-emerald-200 shadow-sm whitespace-nowrap">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Free Access
                </span>

                {/* Badge 2: Updated Daily */}
                <span className="inline-flex flex-shrink-0 items-center px-2 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-semibold bg-blue-50/90 backdrop-blur-sm text-blue-700 border border-blue-200 shadow-sm whitespace-nowrap">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  Updated Daily
                </span>

                {/* Badge 3: Users */}
                <span className="inline-flex flex-shrink-0 items-center px-2 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-semibold bg-purple-50/90 backdrop-blur-sm text-purple-700 border border-purple-200 shadow-sm whitespace-nowrap">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  50K+ Users
                </span>

              </div>

            </div>

            {/* Stats Cards - Desktop */}
            <div className="hidden lg:grid grid-cols-1 gap-4 flex-shrink-0">
              <div className="group relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>


              </div>

              <div className="group relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>


              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Filters Section */}
      <div className="-mt-40"><HomeSearchBar allCategories={allCategories} />
      </div>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {initialTools.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">No tools found</p>
            <button
              onClick={() => router.push("/browse-tools")}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {initialTools.map((tool) => (
                <ToolCard key={tool._id} tool={tool} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {currentPage > 1 && (
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={isPending}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
                  >
                    ← Prev
                  </button>
                )}

                {getPaginationRange().map((pageNum, idx) => {
                  if (pageNum === '...') {
                    return <span key={`dots-${idx}`} className="px-2 text-gray-400">...</span>;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      disabled={isPending}
                      className={`px-4 py-2 rounded-lg font-medium transition ${pageNum === currentPage
                        ? 'bg-purple-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {currentPage < totalPages && (
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={isPending}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
                  >
                    Next →
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
