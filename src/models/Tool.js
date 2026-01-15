import mongoose from "mongoose";

const ToolSchema = new mongoose.Schema(
  {
    // Core identity
    id: Number, // legacy numeric id
    name: { type: String, required: true },
    displayName: String,
    slug: { type: String, required: true, unique: true, index: true },

    // URLs & media
    logo: String,
    image: String,
    logoUrl: String,
    url: { type: String, required: true },

    // Content
    shortDescription: String,
    longDescription: String,
    overview: String,

    // Taxonomy (SEO + filters)
    categories: { type: [String], index: true },
    tags: [String],
    keywords: [String],
    features: [String],

    // Business
    pricingType: {
      type: String,
      enum: ["free", "paid", "freemium", "free-trial", "free trial"],
      index: true,
    },

    pricing: String,

    // Metrics
    rating: { type: Number, default: 0, index: true },
    ratingCount: { type: Number, default: 0 },
    visits: Number,

    // Trust & featured
    isVerified: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false, index: true },
    featuredRank: { type: Number, default: 0 },

    // SEO
    seo: {
      metaTitle: String,
      metaDescription: String,
    },

    // FAQs
    faqs: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  {
    strict: false, // ❗ data loss se bachata hai
    timestamps: true,
  }
);

/* ---------- PERFORMANCE INDEXES ---------- */

// Category pages
ToolSchema.index({ categories: 1, rating: -1 });

// Pricing filters
ToolSchema.index({ pricingType: 1, rating: -1 });

// Homepage featured
ToolSchema.index({ isFeatured: -1, featuredRank: 1 });

// Text search (VERY IMPORTANT)
ToolSchema.index(
  {
    name: "text",
    displayName: "text",
    keywords: "text",
    tags: "text",
    categories: "text",
    shortDescription: "text",
    overview: "text",
  },
  {
    weights: {
      name: 10,
      displayName: 10,
      keywords: 8,
      tags: 5,
      categories: 5,
      shortDescription: 3,
      overview: 1,
    },
    name: "tool_search_index",
  }
);

const Tool =
  mongoose.models.Tool || mongoose.model("Tool", ToolSchema, "tools");

export default Tool;
