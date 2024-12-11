import { OrderItem } from "./orderItem";

export interface ShoppingCart {
  items: OrderItem[];
  totalPrice: number;
}
