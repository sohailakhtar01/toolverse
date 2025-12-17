import connectDB from "@/lib/mongodb";
import Tool from "@/models/Tool";

export async function GET() {
  try {
    await connectDB();

    const categories = await Tool.distinct("categories");

    return Response.json(categories.sort());
  } catch (error) {
    return Response.json([], { status: 500 });
  }
}
