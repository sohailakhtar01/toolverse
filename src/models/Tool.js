import mongoose from "mongoose";

const ToolSchema = new mongoose.Schema({}, { strict: false });

// 3rd argument "tools" = collection name
const Tool =
  mongoose.models.Tool || mongoose.model("Tool", ToolSchema, "tools");

export default Tool;
