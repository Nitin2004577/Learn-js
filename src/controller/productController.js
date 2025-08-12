import productService from "../services/productService.js";

const getProducts = async (req, res) => {
  //Request query 
  const product = await productService.getProducts(req.query);
  console.log(req.headers.cookie);
  console.log(req.query);
  const products = productService.getProducts();
  res.status(200).json(products);
};

const getProductById = (req, res) => {
  // Request params
  const id = req.params.id;
  const product = productService.getProductById(id);

  res.json(product);
};

const createProduct = (req, res) => {
  res.send("create a product");
};
const updateProduct = (req, res) => {
  res.send("update a products");
};
const deleteProduct = (req, res) => {
  res.send("delete a products");
};
export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
