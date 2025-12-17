// app/api/tools/route.js
import dbConnect from "@/lib/mongodb";
import Tool from "@/models/Tool";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Tool.find({}, null, { skip, limit }).lean(),
      Tool.countDocuments(),
    ]);

    const totalPages = Math.ceil(total / limit) || 1;

    return Response.json({ items, totalPages }, { status: 200 });
  } catch (err) {
    console.error("API /api/tools error message:", err.message);
    console.error("API /api/tools error stack:", err.stack);
    return Response.json(
      {
        items: [],
        totalPages: 1,
        error: "Failed to load tools",
      },
      { status: 500 }
    );
  }
}
