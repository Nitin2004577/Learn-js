import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: [true, "Order tracking number is required"],
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User id is required"],
  },
  orderItems: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: [true, "Product id is required"],
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  status: {
    type: String,
    default: "",
    enum: [],

    totalPrice: {
      type: Number,
      required: [true, "Total price is required."],
    },
  },
  shippingAddress: {
    city: {
      type: String,
      required: [true, "Shipping city address is required."],
    },
    country: {
      type: String,
      default: "Nepal",
    },
    province: {
      type: String,
      required: [true, "Shipping province is required."],
    },
    street: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true, // Prevents modification after creation
  },
});

const model = mongoose.model("Order", orderSchema);

export default model;
