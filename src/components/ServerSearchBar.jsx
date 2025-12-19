// components/ServerSearchBar.jsx
"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useTransition } from "react";

const PRICING_PAGES = {
    free: "/free",
    freemium: "/freemium",
    paid: "/paid",
    "free trial": "/free-trial",
};

export default function ServerSearchBar({ allCategories = [], totalCount = 0 }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
    const [sortBy, setSortBy] = useState(searchParams.get("sort") || "rating");
    const [selectedPricing, setSelectedPricing] = useState(searchParams.get("pricing") || "");

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchTerm.trim()) params.set("q", searchTerm);
        if (selectedCategory !== "all") params.set("category", selectedCategory);
        if (selectedPricing) params.set("pricing", selectedPricing);
        if (sortBy !== "rating") params.set("sort", sortBy);

        startTransition(() => {
            router.push(`/browse-tools?${params.toString()}`);
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <section className="relative w-full py-12 px-3 sm:px-6 mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg overflow-hidden">
            {/* Glow effects */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-400/30 rounded-full blur-[100px]"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-400/30 rounded-full blur-[100px]"></div>

            {/* Header */}
            <div className="relative z-10 text-center px-3 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spaceGrotesk bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Search {totalCount}+ AI Tools
                </h2>
                <p className="text-gray-600 text-base sm:text-lg font-spaceGrotesk">
                    Find the perfect AI tool for your needs
                </p>
            </div>

            {/* Search & Filters */}
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-md">

                {/* Search Bar */}
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder={`Search ${totalCount}+ AI tools by name, category, or feature...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-6 pr-16 py-4 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-gray-700 text-base sm:text-lg bg-white placeholder:text-gray-400"
                    />
                    <button
                        type="button"
                        onClick={handleSearch}
                        disabled={isPending}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-50"
                    >
                        {isPending ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 sm:gap-4">

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full sm:w-auto min-w-[200px] px-4 py-3 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-purple-500 outline-none bg-white text-sm sm:text-base"
                    >
                        <option value="all">All Categories</option>
                        {allCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {/* Sort Filter */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full sm:w-auto min-w-[180px] px-4 py-3 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-purple-500 outline-none bg-white text-sm sm:text-base"
                    >
                        <option value="rating">Sort by Rating</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to A</option>
                        <option value="pricing">Pricing</option>
                    </select>

                    {/* Pricing Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {["Free", "Freemium", "Paid", "Free Trial"].map((type) => {
                            const isActive = selectedPricing.toLowerCase() === type.toLowerCase();
                            return (
                                <button
                                    key={type}
                                    onClick={() => setSelectedPricing(isActive ? "" : type)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${isActive
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105 border-transparent"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:border-purple-300"
                                        }`}
                                >
                                    {type}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Filters */}
                {(searchTerm || selectedCategory !== "all" || selectedPricing) && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                        {searchTerm && (
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                Search: "{searchTerm}"
                                <button onClick={() => setSearchTerm("")} className="hover:text-purple-900 font-bold">×</button>
                            </span>
                        )}
                        {selectedCategory !== "all" && (
                            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                {selectedCategory}
                                <button onClick={() => setSelectedCategory("all")} className="hover:text-pink-900 font-bold">×</button>
                            </span>
                        )}
                        {selectedPricing && (
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                {selectedPricing}
                                <button onClick={() => setSelectedPricing("")} className="hover:text-indigo-900 font-bold">×</button>
                            </span>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
