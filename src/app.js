import express from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config

const app = express();

// app.get("/", (request, response) => {
//     request.end("hello");

// });

app.get("/products", (req, res) => {
   try {
    const products = fs.readFileSync("./src/data/products.json", "utf8");

    // res.send("Iphone 16 pro");
    const productsObj = JSON.parse(products);
    res.json(productsObj);
}catch (err) {
    res.status(500).send("Error loading products");
}
});
app.listen(5000, () => {
    console.log("server running at port 5000......");
});