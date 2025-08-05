import express from "express";
import productController from "../controller/productController.js";

const router = express.Router();

router.get("/", productController.getProducts); // get all
router.get("/:id", productController.getProductById); // get one
router.post("/", productController.createProduct); // create
router.put("/:id", productController.updateProduct); // update
router.delete("/:id", productController.deleteProduct); // delete

export default router;
