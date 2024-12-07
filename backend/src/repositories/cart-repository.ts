import { ShoppingCart } from "../models/cart-model";

export interface CartRepository {
  getCartByUserId(userId: number): Promise<ShoppingCart | null>;
  setCart(userId: number, cart: ShoppingCart): Promise<void>;
  deleteCart(userId: number): Promise<void>;
}
