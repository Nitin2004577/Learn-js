import express from "express";
import orderController from "../controller/orderController.js";

const router = express.Router();

//URL: /api/orders
router.get("/", orderController.getOrders);
router.post("/", orderController.createOrders);

export default router;