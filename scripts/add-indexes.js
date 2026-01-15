import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// 👇 IMPORTANT: model import (schema + indexes register hota hai)
import Tool from "../src/models/Tool.js";

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
    console.log("✅ Connected");

    console.log("🏗️ Creating indexes from Tool schema...");
    await Tool.createIndexes();

    const indexes = await Tool.collection.getIndexes();
    console.log("✅ Indexes created successfully:");
    console.log(Object.keys(indexes));

    await mongoose.disconnect();
    process.exit(0);
}

run().catch((err) => {
    console.error("❌ Error:", err.message);
    process.exit(1);
});
