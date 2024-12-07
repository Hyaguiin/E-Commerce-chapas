import { OrderItem } from "./order-item-model";

export interface ShoppingCart {
  items: OrderItem[];
  totalPrice: number;
}
