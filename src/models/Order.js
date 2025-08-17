import mongoose from "mongoose";
import {
  ORDER_STATUSES_PENDING,
  ORDER_STATUSES_CONFORMED,
  ORDER_STATUSES_DELIVERED,
  ORDER_STATUSES_SHIPPED,
} from "../constants/orderStatuses.js";

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
    default: ORDER_STATUSES_PENDING,
    enum: [
      ORDER_STATUSES_PENDING,
      ORDER_STATUSES_CONFORMED,
      ORDER_STATUSES_DELIVERED,
      ORDER_STATUSES_SHIPPED,
    ],

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
