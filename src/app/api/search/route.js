// app/api/search/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // Always fresh results

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get("q") || "";
        const category = searchParams.get("category") || "all";
        const pricing = searchParams.get("pricing") || "";
        const sort = searchParams.get("sort") || "rating";
        const page = parseInt(searchParams.get("page") || "1");
        const limit = 20;
        const skip = (page - 1) * limit;

        await connectDB();

        // Build MongoDB query
        let filter = {};

        // Full-text search (if query exists)
        if (query.trim()) {
            filter.$text = { $search: query };
        }

        // Category filter
        if (category !== "all") {
            filter.categories = category;
        }

        // Pricing filter
        if (pricing) {
            filter.pricingType = pricing.toLowerCase();
        }

        // Build sort object
        let sortObj = {};
        switch (sort) {
            case "rating":
                sortObj = { rating: -1 };
                break;
            case "az":
                sortObj = { name: 1 };
                break;
            case "za":
                sortObj = { name: -1 };
                break;
            case "pricing":
                sortObj = { pricingType: 1 };
                break;
            default:
                sortObj = query.trim() ? { score: { $meta: "textScore" } } : { rating: -1 };
        }

        // Add text score for relevance sorting
        const projection = query.trim()
            ? { score: { $meta: "textScore" } }
            : {};

        // Execute query with pagination
        const [tools, totalCount] = await Promise.all([
            Tool.find(filter, projection)
                .sort(sortObj)
                .skip(skip)
                .limit(limit)
                .select("id displayName name shortDescription rating categories pricingType tags slug logo")
                .lean(),
            Tool.countDocuments(filter)
        ]);

        // Map to consistent format
        const mappedTools = tools.map(tool => ({
            _id: tool._id.toString(),
            name: tool.displayName || tool.name || "Untitled Tool",
            logo: tool.logo || "/default-tool-icon.png",
            shortDescription: tool.shortDescription || "Explore this AI tool",
            rating: tool.rating || 4.5,
            categories: tool.categories || [],
            pricingType: tool.pricingType || "freemium",
            slug: tool.slug,
            tags: tool.tags || []
        }));

        return NextResponse.json({
            success: true,
            tools: mappedTools,
            pagination: {
                total: totalCount,
                page,
                pages: Math.ceil(totalCount / limit),
                hasMore: page * limit < totalCount
            },
            query: {
                search: query,
                category,
                pricing,
                sort
            }
        }, {
            headers: {
                "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120"
            }
        });

    } catch (error) {
        console.error("❌ Search API Error:", error);
        return NextResponse.json(
            { success: false, error: "Search failed" },
            { status: 500 }
        );
    }
}
