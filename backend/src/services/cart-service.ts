import { RedisShoppingCart } from "../database/cart-redis";
import { redisClient } from "../database/connection";
import { ShoppingCart } from "../models/cart-model";
import { OrderItem } from "../models/order-item-model";

const redisCart = new RedisShoppingCart(redisClient);

export async function getCartByUserId(userId: number): Promise<ShoppingCart | null> {
  const cart = await redisCart.getCartByUserId(userId);
  return cart;
}

export async function setCart(userId: number, cart: ShoppingCart): Promise<void> {
  await redisCart.setCart(userId, cart);
}

export async function deleteCart(userId: number): Promise<void> {
  await redisCart.deleteCart(userId);
}

export async function addItemToCart(userId: number, product: OrderItem): Promise<void> {
  const cart = await redisCart.getCartByUserId(userId);

  if (!cart) {
    const newCart: ShoppingCart = {
      items: [product],
      totalPrice: product.price * product.quantity,
    };
    await redisCart.setCart(userId, newCart);
  } else {
    const existingProductIndex = cart.items.findIndex(item => item.product_id === product.product_id);

    if (existingProductIndex > -1) {
      cart.items[existingProductIndex].quantity += product.quantity;
    } else {
      cart.items.push(product);
    }

    cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    await redisCart.setCart(userId, cart);
  }
}

export async function removeItemFromCart(userId: number, productId: string): Promise<void> {
  const cart = await redisCart.getCartByUserId(userId);

  if (!cart) {
    throw new Error("Cart not found.");
  }

  cart.items = cart.items.filter(item => item.product_id !== productId);

  cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  await redisCart.setCart(userId, cart);
}
