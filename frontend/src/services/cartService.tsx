import axios from "axios";
import { CART_API_URL } from "../constants/apiUrls";
import { OrderItem } from "../models/orderItem";

// Função para buscar os itens do carrinho
export async function fetchCart(userId: number): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${CART_API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
}

// Função para adicionar item ao carrinho
export async function addItemToCart(userId: string, product: OrderItem): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${CART_API_URL}/${userId}/add`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
}

// Função para atualizar item no carrinho
export async function updateItemInCart(userId: number, product: Partial<OrderItem>): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${CART_API_URL}/${userId}/update`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating item in cart:", error);
  }
}

// Função para remover item do carrinho
export async function removeItemFromCart(userId: number, product_id: string): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${CART_API_URL}/${userId}/remove`, {
      data: { product_id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
}

// Função para limpar o carrinho
export async function clearUserCart(userId: number): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${CART_API_URL}/${userId}/clear`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
}
