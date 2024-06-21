import axios from "axios";
import orderRepository from "../repositories/orderRepository.js";
import eventPublisher from "../publishers/eventPublisher.js";

export async function createOrder(userId) {
  try {
    const cartResponse = await axios.get(`your_cart_service_url/${userId}`);
    const cartItems = cartResponse.data.cart;

    const orderItems = cartItems.map((item) => ({
      productId: item.product._id,
      name: item.product.name,
      banner: item.product.banner,
      price: item.product.price,
      unit: item.unit,
    }));

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price * item.unit,
      0
    );

    const order = {
      userId,
      items: orderItems,
      totalAmount,
      status: "placed",
      createdAt: new Date(),
    };

    const savedOrder = await orderRepository.saveOrder(order);

    eventPublisher.publish("orderPlaced", { order: savedOrder, cartItems });

    return { order: savedOrder, cartItems };
  } catch (error) {
    console.error(`Failed to create order: ${error.message}`);
    throw new Error(`Failed to create order: ${error.message}`);
  }
}
