// scripts/createSearchIndex.js
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory (ES Modules equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local from project root
dotenv.config({ path: join(__dirname, '..', '.env.local') });

async function createSearchIndex() {
    try {
        console.log('🔄 Connecting to MongoDB...');

        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI not found in .env.local');
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const db = mongoose.connection.db;
        const toolsCollection = db.collection('tools');

        // Drop old text indexes
        try {
            const indexes = await toolsCollection.indexes();
            console.log('📋 Current indexes:', indexes.map(i => i.name).join(', '));

            for (const idx of indexes) {
                if (idx.name.includes('text')) {
                    await toolsCollection.dropIndex(idx.name);
                    console.log(`🗑️  Dropped: ${idx.name}`);
                }
            }
        } catch (e) {
            console.log('ℹ️  No old text indexes to drop');
        }

        // Create new comprehensive index
        console.log('🔄 Creating search index...');
        await toolsCollection.createIndex(
            {
                name: "text",
                displayName: "text",
                shortDescription: "text",
                longDescription: "text",
                description: "text",
                tags: "text",
                features: "text",
                categories: "text"
            },
            {
                weights: {
                    name: 10,
                    displayName: 10,
                    tags: 8,
                    categories: 7,
                    features: 5,
                    shortDescription: 3,
                    longDescription: 2,
                    description: 2
                },
                name: "comprehensive_search_index"
            }
        );

        console.log('✅ Index created successfully!');

        // Test it
        const test = await toolsCollection.find({
            $text: { $search: "3d" }
        }).limit(2).toArray();

        console.log(`\n🧪 Test: Found ${test.length} tools for "3d"`);
        if (test.length > 0) {
            console.log(`   → ${test[0].displayName || test[0].name}`);
        }

        await mongoose.connection.close();
        console.log('\n✅ Done! Your search is now supercharged! 🚀\n');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error(error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

createSearchIndex();
