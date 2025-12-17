// app/api/add-tools/route.js
import dbConnect from "@/lib/mongodb";
import Tool from "@/models/Tool";

export async function POST(req) {
  try {
    await dbConnect();
    
    const body = await req.json();
    const toolsToAdd = body.tools; // Expect array of 12 tools
    
    if (!Array.isArray(toolsToAdd) || toolsToAdd.length === 0) {
      return Response.json({ error: "No tools provided" }, { status: 400 });
    }

    // Step 1: Check duplicates (slug OR url)
    const existingSlugs = await Tool.find({ 
      slug: { $in: toolsToAdd.map(t => t.slug) } 
    }).select('slug').lean();
    
    const existingUrls = await Tool.find({ 
      url: { $in: toolsToAdd.map(t => t.url) } 
    }).select('url').lean();

    const duplicateSlugs = existingSlugs.map(t => t.slug);
    const duplicateUrls = existingUrls.map(t => t.url);
    
    // Filter out duplicates
    const cleanTools = toolsToAdd.filter(tool => 
      !duplicateSlugs.includes(tool.slug) && !duplicateUrls.includes(tool.url)
    );

    if (cleanTools.length === 0) {
      return Response.json({ 
        message: "All tools already exist", 
        duplicates: toolsToAdd.length 
      }, { status: 200 });
    }

    // Step 2: Add new tools (assign next ID)
    const lastId = await Tool.findOne().sort({ id: -1 }).select('id').lean() || { id: 0 };
    const nextId = lastId.id + 1;
    
    const toolsWithId = cleanTools.map((tool, index) => ({
      ...tool,
      id: nextId + index,
      isVerified: false,
      isFeatured: false,
      featuredRank: 0,
      rating: tool.rating || 4.5 // Default rating
    }));

    // Step 3: Bulk insert
    await Tool.insertMany(toolsWithId);
    
    return Response.json({ 
      message: `${cleanTools.length} new tools added!`,
      added: cleanTools.length,
      skipped: toolsToAdd.length - cleanTools.length
    }, { status: 201 });

  } catch (err) {
    console.error("Add tools error:", err);
    return Response.json({ error: "Failed to add tools" }, { status: 500 });
  }
}
