import express from "express";
import config from "./config/config.js";
import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import productRoute from "./routes/productRoute.js";
// import todoRoutes from "./routes/todoRoute.js";
// import mongoose from "mongoose";

const app = express();

connectDB();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

app.use("/products", productRoute);
// app.use("/todos", todoRoutes);

app.listen(config.port, () => {
  console.log(`server running at port 5000......`);
});
