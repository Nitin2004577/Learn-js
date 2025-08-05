import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  createdAt: Date,
});
const model = mongoose.model("product", productSchema);

export default model;