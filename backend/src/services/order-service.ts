import { PostgresOrder } from "../database/order-postgres";
import { Order } from "../models/order-model";

const pgOrder: PostgresOrder = new PostgresOrder();

export async function getAllOrders(): Promise<Order[]> {
  const orders = await pgOrder.findAll();
  return orders;
}

export async function getOrderById(id: number): Promise<Order | null> {
  const order = await pgOrder.findById(id);
  return order;
}

export async function createOrder(order: Order): Promise<Order | null> {
  const createdOrder = await pgOrder.create(order);
  return createdOrder;
}

export async function updateOrder(id: number, order: Partial<Order>): Promise<Order | null> {
  const updatedOrder = await pgOrder.update(id, order);
  if (updatedOrder) {
    const order = await pgOrder.findById(id);
    return order;
  }
  return null;
}

export async function deleteOrder(id: number): Promise<boolean> {
  const result = await pgOrder.delete(id);
  return result ? true : false;
}
