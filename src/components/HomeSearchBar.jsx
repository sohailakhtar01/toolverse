// components/HomeSearchBar.jsx
"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeSearchBar({ allCategories }) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/browse-tools?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    // Convert category name to URL-friendly slug
    const categoryToSlug = (category) => {
        return category
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    return (
        <section className="max-w-7xl mx-auto px-4 pb-10 mt-23 relative">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full 
                bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
                bg-[size:24px_24px]"
            />

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl 
                shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] 
                border border-gray-100/50
                p-8 space-y-8 
                transition-all duration-300">

                {/* ================= SEARCH (PRIMARY) ================= */}
                <form onSubmit={handleSearchSubmit} className="w-full flex justify-center">
                    <div className="w-full">
                        <div className="flex items-center gap-3 px-6 py-4 
                            border border-gray-300 rounded-full bg-white 
                            shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                            hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)]
                            focus-within:ring-1 focus-within:ring-purple-500 
                            focus-within:shadow-[0_8px_24px_rgba(139,92,246,0.2)]
                            transition-all duration-300">

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search over 4000+ AI tools"
                                className="flex-1 bg-transparent outline-none text-[18px] text-gray-800 placeholder-gray-400 leading-tight"
                            />

                            <button
                                type="submit"
                                className="w-10 h-10 cursor-pointer flex items-center justify-center 
                                    rounded-full bg-gradient-to-br from-purple-50 to-purple-100
                                    hover:from-purple-100 hover:to-purple-200
                                    shadow-[0_2px_8px_rgba(139,92,246,0.15)]
                                    hover:shadow-[0_4px_12px_rgba(139,92,246,0.25)]
                                    transition-all duration-300"
                            >
                                <Search className="w-5 h-5 text-purple-700" />
                            </button>
                        </div>
                    </div>
                </form>

                {/* ================= FILTERS ROW ================= */}
                <div className="flex flex-wrap items-center justify-between gap-6">

                    {/* Left: Dropdown Filters */}
                    <div className="flex flex-wrap gap-4">
                        <select
                            onChange={(e) => {
                                if (e.target.value !== "all") {
                                    router.push(`/categories/${categoryToSlug(e.target.value)}`);
                                }
                            }}
                            className="px-4 py-1 border border-gray-300 rounded-lg bg-white text-md
                                shadow-[0_2px_8px_rgba(0,0,0,0.05)] cursor-pointer
                                hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]
                                hover:border-purple-300
                                focus:ring-2 focus:ring-purple-500 outline-none 
                                transition-all duration-300"
                        >
                            <option value="all">All Categories</option>
                            {allCategories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        <select
                            onChange={(e) => router.push(`/browse-tools?sort=${e.target.value}`)}
                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm
                                shadow-[0_2px_8px_rgba(0,0,0,0.05)] cursor-pointer
                                hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]
                                hover:border-purple-300
                                focus:ring-2 focus:ring-purple-500 outline-none 
                                transition-all duration-300"
                        >
                            <option value="rating">Sort by Rating</option>
                            <option value="az">Alphabet A–Z</option>
                            <option value="za">Alphabet Z–A</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>

                    {/* Right: Pricing Filters */}
                    <div className="flex gap-3">
                        {[
                            { label: "Free", href: "/free", color: "bg-green-100" },
                            { label: "Freemium", href: "/freemium", color: "bg-orange-100" },
                            { label: "Paid", href: "/paid", color: "bg-red-100" },
                            { label: "Free Trial", href: "/free-trial", color: "bg-purple-100" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group relative px-4 py-2 text-sm font-medium text-gray-700
                                    border border-gray-200 rounded-md overflow-hidden
                                    shadow-[0_2px_8px_rgba(0,0,0,0.05)] cursor-pointer
                                    hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                                    hover:border-gray-300
                                    transition-all duration-300"
                            >
                                <span
                                    className={`absolute inset-[-60%] ${item.color} rotate-12
                                        translate-x-[-100%] translate-y-[100%]
                                        transition-transform duration-700 ease-in-out
                                        group-hover:translate-x-0 group-hover:translate-y-0`}
                                />
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ================= QUICK LINKS ================= */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                    <span>Popular:</span>

                    <Link href="/categories/image-generators" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                        Image Generation
                    </Link>
                    <span>•</span>

                    <Link href="/categories/writing-and-web-seo" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                        Writing
                    </Link>
                    <span>•</span>

                    <Link href="/categories/video-edition" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                        Video Editing
                    </Link>
                    <span>•</span>

                    <Link href="/categories/developer-tools" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                        Coding
                    </Link>
                    <span>•</span>

                    <Link href="/browse-tools" className="font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors">
                        Browse All →
                    </Link>
                </div>

            </div>
        </section>
    );
}
