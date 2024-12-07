import { Order } from "../models/order-model";
import { UpdateResult, DeleteResult } from "typeorm";

export interface OrderRepository {
  findAll(): Promise<Order[] | []>;
  findById(id: number): Promise<Order | null>;
  create(order: Order): Promise<Order | null>;
  update(id: number, order: Partial<Order>): Promise<UpdateResult | null>;
  delete(id: number): Promise<DeleteResult | null>;
}
