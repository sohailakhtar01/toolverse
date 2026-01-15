import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../.env.local") });

async function run() {
    await mongoose.connect(process.env.MONGODB_URI);

    const collection = mongoose.connection.collection("tools");

    const duplicates = await collection.aggregate([
        { $group: { _id: "$slug", count: { $sum: 1 } } },
        { $match: { count: { $gt: 1 } } },
    ]).toArray();

    console.log("❌ Duplicate slugs found:");
    duplicates.forEach(d => {
        console.log(`slug="${d._id}" → ${d.count} documents`);
    });

    await mongoose.disconnect();
    process.exit(0);
}

run();
