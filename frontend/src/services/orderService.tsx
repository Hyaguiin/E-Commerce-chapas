import axios from "axios";
import { ORDER_API_URL } from "../constants/apiUrls";
import { OrderModel } from "../models/orderModel";

// Função para criar um novo pedido
export async function createOrder(order: OrderModel): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${ORDER_API_URL}`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
  }
}

// Função para buscar todos os pedidos do usuário
export async function fetchUserOrders(): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${ORDER_API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
  }
}

// Função para buscar um pedido específico
export async function fetchOrderById(orderId: string): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${ORDER_API_URL}/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
  }
}

// Função para cancelar um pedido
export async function cancelOrder(orderId: string): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${ORDER_API_URL}/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error canceling order:", error);
  }
}
