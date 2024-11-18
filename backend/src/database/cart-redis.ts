import { RedisClientType } from "@redis/client";
import { CartRepository } from "../repositories/cart-repository";
import { ShoppingCart } from "../models/cart-model";

export class RedisShoppingCart implements CartRepository {
  private TTL: number = 1800;
  constructor(private redisClient: RedisClientType) {}

  async getCartByUserId(userId: number): Promise<ShoppingCart | null> {
    const cartData = await this.redisClient.get(`cart:${userId}`);
    return cartData ? JSON.parse(cartData) : null;
  }

  async setCart(userId: number, cart: ShoppingCart): Promise<void> {
    await this.redisClient.set(`cart:${userId}`, JSON.stringify(cart));
    await this.redisClient.expire(`cart:${userId}`, this.TTL);
  }

  async deleteCart(userId: number): Promise<void> {
    await this.redisClient.del(`cart:${userId}`);
  }
}
