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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-purple-600 transition">Home</Link>
            <span>/</span>

            {pageType === "category" ? (
              <>
                <Link href="/browse-tools" className="hover:text-purple-600 transition">Browse</Link>
                <span>/</span>
                <Link
                  href={`/categories/${categoryName.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-")}`}
                  className="hover:text-purple-600 transition"
                >
                  {categoryName}
                </Link>
                {pricingType && (
                  <>
                    <span>/</span>
                    <span className="text-purple-600 capitalize">{pricingType.replace("-", " ")}</span>
                  </>
                )}
              </>
            ) : pageType === "pricing" ? (
              <>
                <Link href="/browse-tools" className="hover:text-purple-600 transition">Browse</Link>
                <span>/</span>
                <span className="text-purple-600 capitalize">{pricingType.replace("-", " ")}</span>
              </>
            ) : (
              <span className="text-purple-600">Browse Tools</span>
            )}
          </nav>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {searchParams.q ? (
                <>Search: <span className="text-purple-600">"{searchParams.q}"</span></>
              ) : pageType === "category" ? (
                <>
                  {categoryName}{pricingType && <span className="capitalize"> {pricingType.replace("-", " ")}</span>} <span className="text-purple-600">AI Tools</span>
                </>
              ) : pageType === "pricing" ? (
                <>
                  <span className="text-purple-600 capitalize">{pricingType.replace("-", " ")}</span> AI Tools
                </>
              ) : (
                <>Browse <span className="text-purple-600">4000+ AI Tools</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600">
              {isPending ? "Loading..." : `${totalCount.toLocaleString()} tools found`}
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{totalCount}+</div>
              <div className="text-sm text-gray-500">Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">10K+</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.9</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <HomeSearchBar allCategories={allCategories} />

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
