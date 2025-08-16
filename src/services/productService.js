import fs from "fs";
import Product from "../models/Product.js";

const getProducts = async (query) => {
  const {brands, category, min, max, limit, offset} = query;
  // console.log(query);
  // const limit = query.limit;



  const sort = JSON.parse(query.sort || "{}");
  // const offset = query.offset;

  const filters = {};

  // const brand = query.brand;
  // const category = query.category;
  // const min = query.min;
  // const max = query.max;

  if (brand)   filters.brand = { $in: brands.split(",") };

  if (category) filters.category = category;
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lte: max };

  const products = await Product.find({ filters })
    .sort(sort)
    .limit(limit)
    .skip(offset);
  return products;
};
 
const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const createProduct = async (data, createdBy) => {
  const product = await Product.create({ ...data, createdBy });
  return product;
};

const updateProduct = async (id, data, userId) => {
  const product = await getProductById(id);

  if (!product) {
    throw {
      statusCode: 404,
      message: "Product not found.",
    };
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
  }
  await Product.findByIdAndDelete(id);
};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
