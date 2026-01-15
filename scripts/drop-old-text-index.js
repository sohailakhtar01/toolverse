import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env variables
dotenv.config({ path: join(__dirname, "../.env.local") });

async function run() {
    if (!process.env.MONGODB_URI) {
        throw new Error("❌ MONGODB_URI not found in .env.local");
    }

    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);

    const collection = mongoose.connection.collection("tools");

    const indexes = await collection.getIndexes();
    console.log("📌 Existing indexes:", Object.keys(indexes));

    // 👇 Old text index name (already present in your DB)
    if (indexes["comprehensive_search_index"]) {
        console.log("🗑 Dropping old text index: comprehensive_search_index");
        await collection.dropIndex("comprehensive_search_index");
        console.log("✅ Old text index dropped");
    } else {
        console.log("ℹ No old text index found");
    }

    await mongoose.disconnect();
    process.exit(0);
}

run().catch((err) => {
    console.error("❌ Error:", err.message);
    process.exit(1);
});
