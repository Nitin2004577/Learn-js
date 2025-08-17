import express from "express";
import orderController from "../controller/orderController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//URL: /api/orders
router.get("/", auth,  orderController.getOrders);
router.post("/", auth, orderController.createOrders);

export default router;