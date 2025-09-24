// src/components/ToolList.jsx
"use client"; // <--- This is crucial for client-side functionality
import { useRouter } from 'next/navigation';

import React, { useState, useMemo } from 'react';

import ToolCard from './ToolCard'; // <--- Import ToolCard (adjust path if needed)

const ToolList = ({ tools, title = "Featured Tools", showSearch = true, showFilters = true }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState("grid");
  const router = useRouter();


  const categories = useMemo(() => {
  if (!Array.isArray(tools)) return []; // 🛡️ Safety guard
  const cats = [...new Set(tools.flatMap(tool => tool.category || []))];
  return cats.sort();
}, [tools]);

////////////
 const filteredTools = useMemo(() => {
  if (!tools || !Array.isArray(tools)) return [];

  let filtered = tools;

  if (searchTerm.trim() !== "") {
    filtered = filtered.filter((tool) =>
      tool.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tool.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  if (selectedCategory !== "all") {
    filtered = filtered.filter((tool) =>
      (tool.category || []).includes(selectedCategory)
    );
  }

  filtered.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);
      case "price":
        if (a.price === "Free" && b.price !== "Free") return -1;
        if (b.price === "Free" && a.price !== "Free") return 1;
        return (a.price || "").localeCompare(b.price || "");
      default:
        return 0;
    }
  });

  return filtered;
}, [tools, searchTerm, selectedCategory, sortBy]);

///////////////////
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {title}
            </h2>
            <p className="text-gray-600">
              Discover {filteredTools.length} amazing tools to boost your productivity
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all ${
                viewMode === "grid"
                  ? "bg-white cursor-pointer text-purple-600 shadow-sm"
                  : "text-gray-500 cursor-pointer hover:text-gray-700"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all ${
                viewMode === "list"
                  ? "bg-white cursor-pointer text-purple-600 shadow-sm"
                  : "text-gray-500 cursor-pointer hover:text-gray-700"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        {(showSearch || showFilters) && (
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            {showSearch && (
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
  placeholder="Search tools..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 ring-1 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                />
              </div>
            )}

            {/* Filters */}
            {showFilters && (
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Category Filter */}
                <select
  value={selectedCategory}
  onChange={(e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);

    if (selected !== 'all') {
      const slug = selected
        .toLowerCase()
        .replace(/ & /g, '-and-')  // Replace " & " with "-and-"
        .replace(/\s+/g, '-');     // Replace spaces with hyphens
      router.push(`/categories/${slug}`);
    }
  }}
  className="px-4 py-3 border cursor-pointer border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-white min-w-[150px]"
>
  <option value="all">All Categories</option>
  {categories.map((category) => (
    <option key={category} value={category}>{category}</option>
  ))}
</select>


                {/* Sort Filter */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 cursor-pointer border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-white min-w-[150px]"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                </select>
              </div>
            )}
          </div>
        )}

        {/* Active Filters Display */}
        {(searchTerm || selectedCategory !== "all") && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">Active filters:</span>
            {searchTerm && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm("")}
                  className="hover:text-purple-900"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-pink-900 cursor-pointer"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="px-6 cursor-pointer py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className={`${
  viewMode === "grid"
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    : "flex flex-col gap-4"
} animate-in fade-in duration-300`}>
  {filteredTools.map((tool, index) => (
    <div
      key={`${tool.slug}-${index}`} // <-- FIXED: ensures uniqueness
      className="animate-in slide-in-from-bottom-4 duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <ToolCard tool={tool} viewMode={viewMode} />
    </div>
  ))}
</div>

      )}

      {/* Load More Button (if needed) */}
      {filteredTools.length > 0 && tools.length > filteredTools.length && (
        <div className="text-center mt-12">
          {/* <button className="px-8 cursor-pointer py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            Load More Tools
          </button> */}
        </div>
      )}
    </div>
  );
};

export default ToolList; // <--- IMPORTANT: Export the component