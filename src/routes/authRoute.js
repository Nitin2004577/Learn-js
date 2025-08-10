import express from "express";
// import authService from "../services/authService.js";
import authController from "../controller/authController.js";

const router = express.Router();

// URL" /api/auth/register
router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
