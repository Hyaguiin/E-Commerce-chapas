import { OrderItem } from "./orderItem";

export interface OrderModel {
    user_name: string;
    user_email: string;
    order_date?: Date;
    total_amount: number;
    order_items: OrderItem[];
  }