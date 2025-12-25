// app/api/tools/route.js
import dbConnect from "@/lib/mongodb";
import Tool from "@/models/Tool";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const skip = (page - 1) * limit;

    // Build query filter
    let filter = {};

    if (category) {
      filter.categories = { $in: [category] };
    }

    if (featured === 'true') {
      filter.isFeatured = true;
    }

    const [items, total] = await Promise.all([
      Tool.find(filter)
        .select('name displayName slug logo url categories pricingType rating isFeatured')
        .skip(skip)
        .limit(limit)
        .lean(),
      Tool.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit) || 1;

    return Response.json({
      items,
      totalPages,
      total,
      count: items.length
    }, { status: 200 });

  } catch (err) {
    console.error("API /api/tools error message:", err.message);
    console.error("API /api/tools error stack:", err.stack);
    return Response.json(
      {
        items: [],
        totalPages: 1,
        total: 0,
        error: "Failed to load tools",
      },
      { status: 500 }
    );
  }
}
  