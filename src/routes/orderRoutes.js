import express from "express";
import { handleCreateOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/orders",
  authMiddleware.handle.bind(authMiddleware),
  handleCreateOrder
);

export default router;
