"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import ToolCard from "./ToolCard";

const PRICING_PAGES = {
  free: "/free",
  freemium: "/freemium",
  paid: "/paid",
  "free trial": "/free-trial",
};

const ToolList = ({
  tools = [],
  allCategories = [],
  title = "Browse AI Tools",
  showSearch = true,
  showFilters = true,
  isLoading = false,
}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedPricing, setSelectedPricing] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const categories = allCategories;
  

  const filteredTools = useMemo(() => {
    if (!Array.isArray(tools) || tools.length === 0) return [];

    let filtered = tools;

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name?.toLowerCase().includes(term) ||
          tool.description?.toLowerCase().includes(term) ||
          (tool.tags || []).some((tag) => tag.toLowerCase().includes(term))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) =>
        (tool.categories || []).includes(selectedCategory)
      );
    }

    if (selectedPricing) {
      const pricingLower = selectedPricing.toLowerCase();
      filtered = filtered.filter(
        (tool) => tool.pricingType?.toLowerCase() === pricingLower
      );
    }

    filtered = [...filtered];

   filtered.sort((a, b) => {
  switch (sortBy) {
    case "rating":
      return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);

    case "az":
      return (a.name || "").localeCompare(b.name || "");

    case "za":
      return (b.name || "").localeCompare(a.name || "");

    case "pricing": {
      const order = { free: 1, "free trial": 2, freemium: 3, paid: 4 };
      return (order[a.pricingType?.toLowerCase()] || 99) - (order[b.pricingType?.toLowerCase()] || 99);
    }

    case "default":
    default:
      return 0;
  }
});


    return filtered;
  }, [tools, searchTerm, selectedCategory, sortBy, selectedPricing]);

  const isDisabled = isLoading;

  return (
    <section className="relative w-full py-16 px-3 sm:px-6 mt-20 bg-gradient-to-br from-white to-purple-100 rounded-t-[40px] shadow-lg overflow-hidden">
      {/* Glow effects – unchanged */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/100 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/100 rounded-full blur-[120px]"></div>
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-500/30 rounded-full blur-[90px]"></div>
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-500/30 rounded-full blur-[90px]"></div>

      {/* Header */}
      <div className="relative z-10 text-center px-3 mb-10">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spaceGrotesk leading-snug sm:leading-tight
    text-white sm:bg-gradient-to-r sm:from-purple-600 sm:to-pink-600 sm:bg-clip-text sm:text-transparent drop-shadow-sm">
    {title}
  </h2>
  
  <p className="text-white sm:text-black mt-2 text-lg font-spaceGrotesk">
    Discover 4000+ amazing tools to boost your productivity
  </p>
</div>


      {/* Search, Filters & Pricing */}
      <div className="relative z-10 flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-sm">
        {/* Search */}
        {showSearch && (
          <div className="relative w-full sm:flex-1 min-w-[240px] sm:min-w-[280px] sm:max-w-[420px]">
  <input
    type="text"
    placeholder={isLoading ? "Loading tools..." : "Search over 4000+ AI tools"}
    value={searchTerm}
    onChange={(e) => !isDisabled && setSearchTerm(e.target.value)}
    disabled={isDisabled}
    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full 
               focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
               outline-none transition text-gray-700 text-sm sm:text-base 
               bg-white disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
  />

  {/* Search Button */}
  <button
    type="button"
    disabled={isDisabled}
    className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 
               h-10 w-10 flex items-center justify-center 
               rounded-full bg-gray-100 hover:bg-gray-200 transition
               disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <svg
      className="h-5 w-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </button>
</div>

        )}

        {/* Filters + Sort */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center sm:justify-start items-center gap-3 sm:gap-4">
          {showFilters && (
            <select
              value={selectedCategory}
              onChange={(e) => {
                if (isDisabled) return;
                const selected = e.target.value;
                document.body.style.cursor = "wait";

                if (selected === "all") {
                  router.push("/");
                } else {
                  const slug = selected
                    .toLowerCase()
                    .replace(/ & /g, "-and-")
                    .replace(/\s+/g, "-");
                  router.push(`/categories/${slug}`);
                }

                setTimeout(() => {
                  document.body.style.cursor = "default";
                }, 400);
              }}
              disabled={isDisabled}
              className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-purple-500 outline-none bg-white text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}

          <select value={sortBy} onChange={(e) => !isDisabled && setSortBy(e.target.value)} disabled={isDisabled} className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-purple-500 outline-none bg-white text-sm sm:text-base disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
  <option value="default">Sort by Default</option>
  <option value="rating">Rating</option>
  <option value="az">Alphabet A to Z</option>
  <option value="za">Alphabet Z to A</option>
  <option value="pricing">Pricing</option>
</select>

        </div>

        {/* Pricing buttons – unchanged, only disabled during loading */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {["Free", "Freemium", "Paid", "Free Trial"].map((type) => {
            const typeKey = type.toLowerCase();
            const href = PRICING_PAGES[typeKey];
            const isActive = pathname === href;

            return (
              <button
                key={type}
                onClick={() => !isDisabled && router.push(href)}
                disabled={isDisabled}
                className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:shadow-md hover:bg-purple-50 disabled:hover:bg-white"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active filters – hidden while loading */}
      {!isLoading && (searchTerm || selectedCategory !== "all" || selectedPricing) && (
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {searchTerm && (
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              Search: {searchTerm}
              <button
                onClick={() => setSearchTerm("")}
                className="hover:text-purple-900"
              >
                ×
              </button>
            </span>
          )}
          {selectedCategory !== "all" && (
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              {selectedCategory}
              <button onClick={() => setSelectedCategory("all")}>×</button>
            </span>
          )}
          {selectedPricing && (
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              {selectedPricing.charAt(0).toUpperCase() + selectedPricing.slice(1)}
              <button onClick={() => setSelectedPricing("")}>×</button>
            </span>
          )}
        </div>
      )}

      {/* Results */}
      <div className="relative z-10 mt-12">
        {isLoading ? (
          // Skeletons with same layout → no CLS, good for Core Web Vitals[web:23][web:24]
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-4 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-3 mx-auto w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredTools.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-800">No tools found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedPricing("");
              }}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredTools.map((tool, index) => (
              <div
                key={`${tool.slug}-${index}`}
                className="animate-in slide-in-from-bottom-4 duration-300"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolList;
