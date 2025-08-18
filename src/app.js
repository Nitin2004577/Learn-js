import express from "express";
import multer from "multer";

import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import productRoute from "./routes/productRoute.js";
import config from "./config/config.js";
import orderRoutes from "./routes/orderRoute.js";
import authRoute from "./routes/authRoute.js";
// import todoRoutes from "./routes/todoRoute.js";
// import mongoose from "mongoose";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";
import userRoutes from "./routes/userRoute.js";
import { ADMIN } from "./constants/roles.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

connectDB();
connectCloudinary();


app.use(bodyParser.json());
app.use(logger);
// app.use(auth);

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

app.use("/products", auth, productRoute);
app.use("/api/products", upload.array("images"), productRoute);
app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/users", auth, roleBasedAuth(ADMIN), userRoutes);

// app.use("/todos", todoRoutes);

app.listen(config.port, () => {
  console.log(`server running at port 5000......`);
});
