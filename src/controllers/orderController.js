import { createOrder } from "../services/orderService.js";

export const handleCreateOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const orderData = await createOrder(userId);
    res.status(201).json(orderData);
  } catch (error) {
    console.error("Failed to create order:", error.message);
    res.status(500).json({ error: "Failed to create order" });
  }
};
