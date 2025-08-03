import express from "express";

const router = express.Router();

router.get("/products", (req, res) => {
  res.send("All Products");
});
export default router;
