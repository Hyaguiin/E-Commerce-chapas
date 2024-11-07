import axios from "axios";
import { PRODUCT_API_URL } from "../constants/apiUrls";
import { Product } from "../models/productModel";

export async function getAllProducts(): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(PRODUCT_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addProduct(product: Product): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(PRODUCT_API_URL, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id: string | undefined): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${PRODUCT_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
