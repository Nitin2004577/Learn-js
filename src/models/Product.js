import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name is required"],
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "product category is required"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
  },
  createdAt: {
    type: Date,
    required: [true, "product createdAt is required"],
  },
  // password: {
  //   type: String,
  //   required: [true, "product password is required"],

  // },
});
const model = mongoose.model("product", productSchema);

export default model;
