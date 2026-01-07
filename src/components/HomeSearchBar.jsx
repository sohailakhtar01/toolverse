"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useMemo, useTransition } from "react";

export default function HomeSearchBar({ allCategories }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  // 🔹 Helper to capitalize words
  const toTitleCase = (str) => {
    if (!str) return "";
    return str.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  // 🔹 Slug generator
  const categoryToSlug = (category) => {
    return category
      .toLowerCase()
      .trim()
      .replace(/&/g, "-and-")
      .replace(/\//g, "-")
      .replace(/\s*\(\s*/g, "-(")
      .replace(/\s*\)\s*/g, ")-")
      .replace(/[^a-z0-9()]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      startTransition(() => {
        router.push(`/browse-tools?q=${encodeURIComponent(searchQuery.trim())}`);
      });
    }
  };

  // 🔹 Deduplication & Sorting Logic
  const sortedUniqueCategories = useMemo(() => {
    if (!allCategories || !Array.isArray(allCategories)) return [];

    const uniqueMap = new Map();

    allCategories.forEach((cat) => {
      if (!cat) return;
      const normalizedKey = cat.toLowerCase().trim().replace(/\s+/g, " ");
      if (!uniqueMap.has(normalizedKey)) {
        uniqueMap.set(normalizedKey, toTitleCase(normalizedKey));
      }
    });

    return Array.from(uniqueMap.values()).sort((a, b) => a.localeCompare(b));
  }, [allCategories]);

  return (
    <section className="relative max-w-7xl mt-17 mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
      <div className="absolute inset-0 -z-10"></div>

      <div
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl 
        shadow-[0_8px_30px_rgba(99,102,241,0.08)] 
        border border-indigo-100/50
        p-4 sm:p-8 lg:p-10 space-y-6
        hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)]
        transition-all duration-500"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-b-full shadow-lg" />

        {/* ================= SEARCH BAR ================= */}
        <form onSubmit={handleSearchSubmit} className="w-full">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-20" />

            <div
              className="relative flex items-center gap-2 sm:gap-3
                px-3 py-2 sm:px-6 sm:py-4
                bg-gradient-to-br from-gray-50 to-indigo-50/30
                border-2 border-indigo-100/60 rounded-full
                hover:border-indigo-200
                focus-within:bg-white
                focus-within:border-indigo-300
                focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]
                transition-all duration-300"
            >
              <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search over 4000+ AI tools..."
                className="flex-1 bg-transparent outline-none
                  text-sm sm:text-base text-gray-700
                  placeholder-gray-400"
              />

              <button
                type="submit"
                disabled={isPending}
                className="px-4 sm:px-6 py-1.5 sm:py-2.5
                  bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                  text-white text-xs sm:text-sm font-medium
                  rounded-full cursor-pointer
                  hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700
                  active:scale-95
                  shadow-lg shadow-indigo-500/30
                  hover:shadow-xl hover:shadow-indigo-500/40
                  transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Searching..." : "Search"}
              </button>
            </div>
          </div>
        </form>

        {/* ================= FILTERS ROW ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left: Dropdown Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto">
            {/* ✅ OPTIMIZED CATEGORY SELECT WITH PREFETCH */}
            <select
              onChange={(e) => {
                if (e.target.value !== "all") {
                  startTransition(() => {
                    router.push(`/categories/${categoryToSlug(e.target.value)}`);
                  });
                }
              }}
              disabled={isPending}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700
                bg-gradient-to-br from-white to-indigo-50/20
                border border-indigo-200/60 rounded-xl
                hover:bg-white hover:border-indigo-300
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                cursor-pointer transition-all duration-200
                shadow-sm hover:shadow-md
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="all">
                {isPending ? "Loading..." : "All Categories"}
              </option>

              {sortedUniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* ✅ OPTIMIZED SORT SELECT */}
            <select
              onChange={(e) => {
                startTransition(() => {
                  router.push(`/browse-tools?sort=${e.target.value}`);
                });
              }}
              disabled={isPending}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700
                bg-gradient-to-br from-white to-indigo-50/20
                border border-indigo-200/60 rounded-xl
                hover:bg-white hover:border-indigo-300
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                cursor-pointer transition-all duration-200
                shadow-sm hover:shadow-md
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="rating">Sort by Rating</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Right: Pricing Filter Pills */}
          <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              {
                label: "Free",
                href: "/free",
                gradient: "from-emerald-500 to-green-500",
                bg: "bg-emerald-50",
              },
              {
                label: "Freemium",
                href: "/freemium",
                gradient: "from-amber-500 to-orange-500",
                bg: "bg-amber-50",
              },
              {
                label: "Paid",
                href: "/paid",
                gradient: "from-rose-500 to-red-500",
                bg: "bg-rose-50",
              },
              {
                label: "Free Trial",
                href: "/free-trial",
                gradient: "from-violet-500 to-purple-500",
                bg: "bg-violet-50",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700
                  ${item.bg} border border-gray-200/60 rounded-lg
                  hover:text-white hover:border-transparent
                  overflow-hidden group whitespace-nowrap
                  shadow-sm hover:shadow-md
                  transition-all duration-300`}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} 
                    translate-y-full group-hover:translate-y-0 
                    transition-transform duration-300 ease-out`}
                />
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="pt-4 border-t border-indigo-100/50">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="font-semibold text-gray-500">Popular:</span>

            <Link
              href="/categories/image-generators"
              className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline decoration-2 underline-offset-2 transition-colors"
            >
              Image Generation
            </Link>
            <span className="text-indigo-200">•</span>

            <Link
              href="/categories/writing-and-web-seo"
              className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline decoration-2 underline-offset-2 transition-colors"
            >
              Writing & SEO
            </Link>
            <span className="text-indigo-200">•</span>

            <Link
              href="/categories/video-edition"
              className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline decoration-2 underline-offset-2 transition-colors"
            >
              Video Editing
            </Link>
            <span className="text-indigo-200">•</span>

            <Link
              href="/categories/developer-tools"
              className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline decoration-2 underline-offset-2 transition-colors"
            >
              Developer Tools
            </Link>

            <Link
              href="/browse-tools"
              className="ml-auto font-semibold text-indigo-700 hover:text-indigo-800 
                inline-flex items-center gap-1 group"
            >
              Browse All
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
