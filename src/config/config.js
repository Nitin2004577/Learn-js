import dotenv from "dotenv";
// import jwt from "../utils/jwt.js";
// import config from "../config/config.js";

dotenv.config();

const config = {
  mongoDBUrl: process.env.MONGODB_URL || "",
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || "0.0.1",
  jwtSecret: process.env.JWT_SECRET || "secret",
};
export default config;
