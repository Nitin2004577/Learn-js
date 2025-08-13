import express from "express";

import auth from "../middlewares/auth.js";
import productController from "../controller/productController.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { MERCHANT } from "../constants/roles.js";

const router = express.Router();

// Ensure all controller methods exist and are functions
if (
  !productController.getProducts ||
  !productController.getProductById ||
  !productController.createProduct ||
  !productController.updateProduct ||
  !productController.deleteProduct
) {
  throw new Error(
    "One or more productController methods are missing or not exported correctly."
  );
}

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post(
  "/",
  auth,
  roleBasedAuth(MERCHANT),
  productController.createProduct
);

router.put(
  "/:id",
  auth,
  roleBasedAuth(MERCHANT),
  productController.updateProduct
);

router.delete(
  "/:id",
  auth,
  roleBasedAuth(MERCHANT),
  productController.deleteProduct
);

export default router;
