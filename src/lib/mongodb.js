import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI not defined in environment variables");
}

// 🔥 OPTIMIZED CONNECTION POOLING FOR MILLIONS OF USERS [web:45][web:54][web:58]
const options = {
  bufferCommands: false,
  maxPoolSize: process.env.NODE_ENV === "production" ? 30 : 10,
  minPoolSize: 2,               // Always keep 2 connections ready
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  retryWrites: true,            // Auto-retry failed writes
  retryReads: true,             // Auto-retry failed reads
  w: 'majority',                // Write concern for data safety
};

// Global cache to reuse connection across serverless invocations [web:47][web:56]
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Create connection promise if not exists
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, options)
      .then((mongoose) => {
        console.log("✅ MongoDB Connected - Connection Pool Ready");
        return mongoose;
      })
      .catch((error) => {
        console.error("❌ MongoDB Connection Failed:", error.message);
        cached.promise = null; // Reset on failure
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
