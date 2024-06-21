class OrderRepository {
  constructor() {
    this.orders = [];
  }

  async saveOrder(order) {
    this.orders.push(order);
    return order;
  }

  async getOrders() {
    return this.orders;
  }
}

const orderRepository = new OrderRepository();
export default orderRepository;
