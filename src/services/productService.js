import fs from "fs";
import Product from "../models/Product.js";
import productController from "../controller/productController.js";


// const getProducts = () => {
//   const rawData = fs.readFileSync("./src/data/products.json", "utf8");
//   const products = JSON.parse(rawData);
//   const filteredProducts = products.filter((product) => product.price < 100000);
//   return filteredProducts;
// };
// const getProductById = (id) => {
//   return { id };
// };
// export default { getProducts, getProductById };


const getProducts = async (query) => {
  const products = await productController.find();
  return products;
};

const getProductById = async (id) => {
  const product = await productController.findById(id);
  return product;
};

const createProduct = async (data, createdBy) => {
  const product = await Product.create({ ...data, createdBy });
  return product;
};

const updateProduct = async (id, data, userId) => {
  const product = await getProductById(id);

  if (!product)  {
    throw {
      statusCode: 404,
      message: "Product not found.",
    }
  }
  if (product.createBy != userId) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }
   const updatedProduct = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedProduct;

};
const deleteProduct = async (id, user) => {
  const product = await getProductById(id);

  if (!product) {
    throw {
      statusCode: 404,
      message: "Product not found.",
    };
  }
  if (product.createdBy != user._id && user.roles.includes("ADMIN")) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  };
};

  await Product.findByIdAndDelete(id);

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
