// app/categories/page.jsx
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import Link from "next/link";
import Image from "next/image";
import {
    TrendingUp, ArrowRight, Search, 
    Sparkles, ChevronRight, Award, Grid3x3
} from "lucide-react";

export const revalidate = 3600;

// 🔥 ENHANCED SEO METADATA
export const metadata = {
    title: 'Browse 100+ AI Tool Categories | Complete AI Directory 2025 - ToolsVerse',
    description: 'Explore 100+ organized AI tool categories with 4000+ vetted tools. From Image Generation to Code Assistants, Marketing to Video Editing - find the perfect AI tool for your workflow. Updated daily.',
    keywords: [
        'ai tools categories', 'ai tool directory 2025', 'best ai tools by category',
        'image generators ai', 'writing tools ai', 'video editing ai tools',
        'developer ai tools', 'business ai software', 'ai categories directory'
    ],
    openGraph: {
        title: 'Browse 100+ AI Tool Categories | ToolsVerse AI Directory 2025',
        description: 'Discover 4000+ AI tools organized by category. Find the perfect AI solution.',
        type: 'website',
        url: 'https://thetoolsverse.com/categories',
        images: [{ url: 'https://thetoolsverse.com/og-categories.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://thetoolsverse.com/categories' },
    robots: { index: true, follow: true },
};

function categoryToSlug(category) {
    return category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+|-+$/g, '');
}

// 🎨 PROFESSIONAL CATEGORY HIERARCHY WITH SOFT COLORS [web:65][web:68]
const CATEGORY_HIERARCHY = {
    "Content Creation": {
        gradient: "from-purple-400/90 to-pink-400/90",
        bgColor: "bg-purple-50",
        iconBg: "from-purple-100 to-pink-100",
        borderColor: "border-purple-200/50",
        hoverBorder: "hover:border-purple-300",
        textColor: "text-purple-700",
        image: "/categories/content-creation.jpg", // Add your image
        subcategories: ["writing-and-web-seo", "copywriting", "text-to-speech", "translation", "summarizer"]
    },
    "Visual & Design": {
        gradient: "from-blue-400/90 to-cyan-400/90",
        bgColor: "bg-blue-50",
        iconBg: "from-blue-100 to-cyan-100",
        borderColor: "border-blue-200/50",
        hoverBorder: "hover:border-blue-300",
        textColor: "text-blue-700",
        image: "/categories/visual-design.jpg",
        subcategories: ["image-generators", "logo-creation", "photo-editing", "design", "3d-model"]
    },
    "Video & Audio": {
        gradient: "from-rose-400/90 to-orange-400/90",
        bgColor: "bg-rose-50",
        iconBg: "from-rose-100 to-orange-100",
        borderColor: "border-rose-200/50",
        hoverBorder: "hover:border-rose-300",
        textColor: "text-rose-700",
        image: "/categories/video-audio.jpg",
        subcategories: ["video-edition", "video-generators", "audio-editing", "music", "voice-cloning"]
    },
    "Development": {
        gradient: "from-emerald-400/90 to-teal-400/90",
        bgColor: "bg-emerald-50",
        iconBg: "from-emerald-100 to-teal-100",
        borderColor: "border-emerald-200/50",
        hoverBorder: "hover:border-emerald-300",
        textColor: "text-emerald-700",
        image: "/categories/development.jpg",
        subcategories: ["developer-tools", "code", "low-code-no-code", "ui-ux-models", "websites-and-design"]
    },
    "Business & Marketing": {
        gradient: "from-indigo-400/90 to-violet-400/90",
        bgColor: "bg-indigo-50",
        iconBg: "from-indigo-100 to-violet-100",
        borderColor: "border-indigo-200/50",
        hoverBorder: "hover:border-indigo-300",
        textColor: "text-indigo-700",
        image: "/categories/business-marketing.jpg",
        subcategories: ["marketing", "seo", "e-commerce", "social-media-content", "sales-and-conversion"]
    },
    "AI Assistants": {
        gradient: "from-violet-400/90 to-fuchsia-400/90",
        bgColor: "bg-violet-50",
        iconBg: "from-violet-100 to-fuchsia-100",
        borderColor: "border-violet-200/50",
        hoverBorder: "hover:border-violet-300",
        textColor: "text-violet-700",
        image: "/categories/ai-assistants.jpg",
        subcategories: ["chatbots", "ai-chat-and-assistant", "ai-agents", "legal-assistants", "life-assistants"]
    },
    "Productivity": {
        gradient: "from-amber-400/90 to-yellow-400/90",
        bgColor: "bg-amber-50",
        iconBg: "from-amber-100 to-yellow-100",
        borderColor: "border-amber-200/50",
        hoverBorder: "hover:border-amber-300",
        textColor: "text-amber-700",
        image: "/categories/productivity.jpg",
        subcategories: ["productivity", "automation", "email-assistant", "spreadsheets", "presentations"]
    },
    "Specialized Tools": {
        gradient: "from-teal-400/90 to-cyan-400/90",
        bgColor: "bg-teal-50",
        iconBg: "from-teal-100 to-cyan-100",
        borderColor: "border-teal-200/50",
        hoverBorder: "hover:border-teal-300",
        textColor: "text-teal-700",
        image: "/categories/specialized.jpg",
        subcategories: ["data-and-analytics", "research-and-science", "healthcare", "education-studies", "finance"]
    }
};

export default async function CategoriesPage() {
    let categories = [];
    let totalTools = 0;
    let categoryData = {};

    try {
        await connectDB();
        const allCategories = await Tool.distinct("categories");
        const categoryCounts = await Promise.all(
            allCategories.map(async (cat) => {
                const count = await Tool.countDocuments({
                    categories: { $regex: new RegExp(`^${cat}$`, 'i') }
                });
                return { name: cat, slug: categoryToSlug(cat), count };
            })
        );

        categories = categoryCounts.filter(cat => cat.count > 0).sort((a, b) => b.count - a.count);
        categoryData = categories.reduce((acc, cat) => { acc[cat.slug] = cat; return acc; }, {});
        totalTools = await Tool.countDocuments({});

    } catch (error) {
        console.error("❌ Categories error:", error.message);
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "AI Tools Categories Directory",
                        "url": "https://thetoolsverse.com/categories",
                        "numberOfItems": categories.length
                    })
                }}
            />

            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

                {/* 🎯 PROFESSIONAL HERO SECTION */}
                <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
                    
                    {/* Elegant Background */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e0e0e0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
                        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-pink-200/15 rounded-full blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
                        <div className="text-center max-w-7xl mx-auto">
                            
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-purple-200/60 rounded-full text-sm font-semibold text-purple-700 mb-8 shadow-sm">
                                <Grid3x3 size={16} className="text-purple-600" />
                                <span>{categories.length}+ Organized Categories</span>
                            </div>

                            {/* Hero Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold">
                                <span className="block text-gray-900 mb-2">Discover AI Tools</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
                                    by Category
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Browse {totalTools.toLocaleString()}+ hand-curated AI tools organized into {categories.length} specialized categories. Find exactly what you need, faster.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                                <Link
                                    href="#explore-categories"
                                    className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Explore Categories
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href="/browse-tools"
                                    className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-xl hover:bg-white hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <Search size={18} />
                                    Search All Tools
                                </Link>
                            </div>

                            {/* Trust Line */}
                            <p className="text-sm text-gray-500 font-medium">
                                ✓ Verified tools • Updated daily • Trusted by 10,000+ users
                            </p>

                        </div>
                    </div>
                </section>

                {/* 🎨 MAIN CATEGORY CARDS - HIERARCHICAL DESIGN [web:57][web:61][web:62] */}
                <section id="explore-categories" className="relative py-16 sm:py-20 lg:py-24">
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Section Header */}
                        <div className="text-center -mt-30 mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Browse by Category
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Organized hierarchically for intuitive discovery
                            </p>
                        </div>

                        {/* Parent Categories Grid */}
                        <div className="space-y-16">
                            {Object.entries(CATEGORY_HIERARCHY).map(([parentName, parentData]) => {
                                const subcats = parentData.subcategories.filter(slug => categoryData[slug]);
                                if (subcats.length === 0) return null;

                                return (
                                    <div key={parentName} className="group/parent">
                                        
                                        {/* Parent Category Header Card [web:61][web:62] */}
                                        <div className={`relative overflow-hidden rounded-2xl mb-8 ${parentData.bgColor} border ${parentData.borderColor} p-8 sm:p-10`}>
                                            
                                            {/* Decorative gradient overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${parentData.gradient} opacity-5`} />
                                            
                                            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                                
                                                {/* Icon/Image Container - Ready for real images */}
                                                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${parentData.iconBg} shadow-lg flex items-center justify-center overflow-hidden`}>
                                                    {/* Replace this div with <Image> when you have real images */}
                                                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                                                        {/* <Image src={parentData.image} alt={parentName} fill className="object-cover" /> */}
                                                        {parentName.split(' ')[0][0]}
                                                    </div>
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1">
                                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                                        {parentName}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-600">
                                                        {subcats.length} specialized {subcats.length === 1 ? 'category' : 'categories'} • {subcats.reduce((sum, slug) => sum + (categoryData[slug]?.count || 0), 0).toLocaleString()} tools
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        {/* Subcategory Cards Grid [web:57][web:61] */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                                            {subcats.map(slug => {
                                                const cat = categoryData[slug];
                                                if (!cat) return null;

                                                return (
                                                    <Link
                                                        key={slug}
                                                        href={`/categories/${slug}`}
                                                        className={`group/card relative bg-white rounded-xl p-6 border ${parentData.borderColor} ${parentData.hoverBorder} hover:shadow-xl transition-all duration-300 overflow-hidden`}
                                                    >
                                                        {/* Hover gradient effect [web:61] */}
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${parentData.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-300`} />
                                                        
                                                        <div className="relative">
                                                            
                                                            {/* Category Name & Arrow */}
                                                            <div className="flex items-start justify-between mb-4">
                                                                <h4 className="font-semibold text-gray-900 group-hover/card:text-gray-700 transition-colors text-base sm:text-lg leading-tight pr-2 flex-1">
                                                                    {cat.name}
                                                                </h4>
                                                                <ArrowRight 
                                                                    size={20} 
                                                                    className={`${parentData.textColor} opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all duration-300 flex-shrink-0`}
                                                                />
                                                            </div>

                                                            {/* Tool Count Badge [web:57] */}
                                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${parentData.bgColor} ${parentData.borderColor} border rounded-lg`}>
                                                                <span className={`text-sm font-semibold ${parentData.textColor}`}>
                                                                    {cat.count}
                                                                </span>
                                                                <span className="text-xs text-gray-600">
                                                                    {cat.count === 1 ? 'tool' : 'tools'}
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </section>

                {/* 🏆 POPULAR CATEGORIES SPOTLIGHT [web:66] */}
                <section className="relative py-16 sm:py-20">
                    
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-amber-700" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Most Popular</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories.slice(0, 6).map((cat, idx) => {
                                const parentKey = Object.keys(CATEGORY_HIERARCHY).find(key => 
                                    CATEGORY_HIERARCHY[key].subcategories.includes(cat.slug)
                                );
                                const parentData = parentKey ? CATEGORY_HIERARCHY[parentKey] : CATEGORY_HIERARCHY["Specialized Tools"];

                                return (
                                    <Link
                                        key={cat.slug}
                                        href={`/categories/${cat.slug}`}
                                        className="group bg-white rounded-2xl p-8 border border-gray-200/60 hover:border-gray-300 hover:shadow-2xl transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-5">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${parentData.iconBg} shadow-md flex items-center justify-center text-2xl font-bold text-gray-400`}>
                                                {cat.name[0]}
                                            </div>
                                            <div className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 text-purple-700 rounded-full text-sm font-semibold">
                                                #{idx + 1}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                                            {cat.name}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4">
                                            {cat.count.toLocaleString()} tools available
                                        </p>

                                        <div className="flex items-center text-purple-600 font-semibold text-sm">
                                            Explore
                                            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                    </div>
                </section>

                {/* 🎯 ELEGANT CTA SECTION [web:66] */}
                <section className="py-20 sm:py-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        
                        <div className="relative overflow-hidden rounded-3xl">
                            
                            {/* Background */}
                            <div className="absolute inset-0 -z-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-50/30" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
                                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-200/15 rounded-full blur-3xl" />
                            </div>

                            {/* Content */}
                            <div className="relative bg-white/70 backdrop-blur-2xl p-10 sm:p-14 lg:p-20 text-center border border-gray-200/60">
                                
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 rounded-full text-sm font-semibold text-purple-700 mb-6">
                                    <Sparkles size={16} />
                                    <span>Can't Find What You Need?</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    <span className="block text-gray-900 mb-2">Explore All</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
                                        {totalTools.toLocaleString()}+ AI Tools
                                    </span>
                                </h2>

                                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                                    Browse our complete directory or use advanced search to discover AI tools you never knew existed
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/browse-tools"
                                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        Browse All Tools
                                        <Search size={18} />
                                    </Link>

                                    <Link
                                        href="/submit-tool"
                                        className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <Award size={18} />
                                        Submit Your Tool
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    );
}
