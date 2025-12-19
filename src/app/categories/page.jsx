// app/categories/page.jsx
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";
import Link from "next/link";
import {
    Sparkles, TrendingUp, Zap, ArrowRight,
    Grid3x3, Search, Tag, LayoutGrid
} from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

// 🔥 SEO METADATA (Google will LOVE this)
export const metadata = {
    title: 'AI Tools Categories 2025 | Browse 80+ AI Tool Categories | Toolsverse',
    description: 'Explore 80+ AI tool categories including Image Generators, Writing Tools, Video Editing, Developer Tools, Business AI, and more. Find the perfect AI tool for your needs from our curated directory of 4000+ tools.',
    keywords: [
        'ai tools categories',
        'ai tool directory',
        'image generators',
        'writing tools ai',
        'video editing ai',
        'developer tools',
        'business ai tools',
        'ai categories 2025',
        'best ai tools by category',
        'ai tool finder'
    ],
    openGraph: {
        title: 'Browse 80+ AI Tool Categories | Toolsverse Directory 2025',
        description: 'Discover AI tools organized by category. From image generation to coding assistants, find the perfect AI tool for your workflow.',
        type: 'website',
        url: 'https://thetoolsverse.com/categories',
        images: [
            {
                url: 'https://thetoolsverse.com/og-categories.png',
                width: 1200,
                height: 630,
                alt: 'Toolsverse AI Categories Directory'
            }
        ],
        siteName: 'Toolsverse',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Browse 80+ AI Tool Categories | Toolsverse',
        description: 'Find AI tools by category - Image Generators, Writing, Video, Developer Tools & more',
        images: ['https://thetoolsverse.com/og-categories.png'],
    },
    alternates: {
        canonical: 'https://thetoolsverse.com/categories',
    },
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
    },
};

// Convert category to slug
function categoryToSlug(category) {
    return category
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Convert slug to display name
function slugToDisplayName(slug) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/\bAi\b/g, 'AI')
        .replace(/\bSeo\b/g, 'SEO')
        .replace(/\bAt\b/g, 'AT')
        .replace(/\b3d\b/g, '3D');
}

// Category icons mapping
const categoryIcons = {
    'image-generators': '🎨',
    'writing-and-web-seo': '✍️',
    'video-edition': '🎬',
    'developer-tools': '💻',
    'business': '💼',
    'chatbots': '💬',
    'music': '🎵',
    '3d-model': '🎭',
    'ai-agents': '🤖',
    'automation': '⚡',
    'marketing': '📈',
    'e-commerce': '🛒',
    'education-studies': '📚',
    'healthcare': '🏥',
    'finance': '💰',
    'productivity': '⚙️',
    'audio-editing': '🎧',
    'photo-editing': '📸',
    'text-to-speech': '🔊',
    'video-generators': '🎥',
    'logo-creation': '🎯',
    'seo': '🔍',
    'customer-support': '🎧',
    'data-and-analytics': '📊',
    'research-and-science': '🔬',
    'social-media-content': '📱',
    'translation': '🌐',
    'code': '👨‍💻',
    'design': '🎨',
    'ai-chat-and-assistant': '💭',
};

export default async function CategoriesPage() {
    let categories = [];
    let totalTools = 0;
    let featuredCategories = [];

    try {
        await connectDB();

        // Get all categories with tool counts
        const allCategories = await Tool.distinct("categories");

        // Get tool count for each category
        const categoryCounts = await Promise.all(
            allCategories.map(async (cat) => {
                const count = await Tool.countDocuments({
                    categories: { $regex: new RegExp(`^${cat}$`, 'i') }
                });
                return {
                    name: cat,
                    slug: categoryToSlug(cat),
                    count,
                    icon: categoryIcons[categoryToSlug(cat)] || '🔧'
                };
            })
        );

        // Sort by count (descending) and filter out empty
        categories = categoryCounts
            .filter(cat => cat.count > 0)
            .sort((a, b) => b.count - a.count);

        totalTools = await Tool.countDocuments({});

        // Featured categories (top 6)
        featuredCategories = categories.slice(0, 6);

        console.log(`✅ Categories Page: ${categories.length} categories, ${totalTools} total tools`);

    } catch (error) {
        console.error("❌ Categories page error:", error.message);
    }

    return (
        <>
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "AI Tools Categories Directory",
                        "description": "Browse AI tools organized by category",
                        "url": "https://thetoolsverse.com/categories",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Toolsverse",
                            "url": "https://thetoolsverse.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://thetoolsverse.com/logo.png"
                            }
                        },
                        "numberOfItems": categories.length,
                        "itemListElement": categories.slice(0, 20).map((cat, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Thing",
                                "name": cat.name,
                                "url": `https://thetoolsverse.com/categories/${cat.slug}`,
                                "description": `${cat.count} AI tools in ${cat.name} category`
                            }
                        }))
                    })
                }}
            />

            <main className="min-h-screen mt-16 bg-gradient-to-b from-gray-50 to-white">

                {/* Hero Section */}
                <section className="relative  bg-gradient-to-br from-blue-600  to-indigo-700 text-white py-20 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
                            backgroundSize: '60px 60px'
                        }} />
                    </div>

                    <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            <LayoutGrid className="w-4 h-4" />
                            <span>{categories.length}+ Categories</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-spaceGrotesk">
                            Browse AI Tools by Category
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Explore {totalTools.toLocaleString()}+ AI tools organized into {categories.length} specialized categories.
                            Find the perfect AI solution for your workflow.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="#all-categories"
                                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                <Grid3x3 className="w-5 h-5" />
                                Explore All Categories
                            </Link>
                            <Link
                                href="/browse-tools"
                                className="px-8 py-4 bg-purple-700/50 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-purple-700 transition-all flex items-center gap-2"
                            >
                                <Search className="w-5 h-5" />
                                Search All Tools
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className="max-w-7xl mx-auto px-4 py-16 -mt-12 relative z-20">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                        <div className="flex items-center gap-3 mb-8">
                            <TrendingUp className="w-6 h-6 text-purple-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Most Popular Categories</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredCategories.map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/categories/${category.slug}`}
                                    className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-4xl">{category.icon}</div>
                                            <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                                                {category.count} tools
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                            {category.name}
                                        </h3>

                                        <div className="flex items-center text-purple-600 font-medium text-sm">
                                            Explore Category
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Categories Grid */}
                <section id="all-categories" className="max-w-7xl mx-auto px-4 py-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Grid3x3 className="w-6 h-6 text-gray-700" />
                        <h2 className="text-3xl font-bold text-gray-900">All Categories</h2>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                            {categories.length}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/categories/${category.slug}`}
                                className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">{category.icon}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">{category.count} tools</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-5xl mx-auto px-4 py-20">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                backgroundSize: '30px 30px'
                            }} />
                        </div>

                        <div className="relative z-10">
                            <Sparkles className="w-12 h-12 mx-auto mb-4" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Can't Find What You're Looking For?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Browse all {totalTools.toLocaleString()}+ AI tools or search by keyword to find your perfect match
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    href="/browse-tools"
                                    className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Browse All Tools
                                </Link>
                                <Link
                                    href="/submit-tool"
                                    className="px-8 py-4 bg-purple-700 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-purple-800 transition-all"
                                >
                                    Submit Your Tool
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
