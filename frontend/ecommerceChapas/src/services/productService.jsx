import axios from "axios";
import { PRODUCT_API_URL } from "../constants/apiUrls";

export async function getAllProducts() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(PRODUCT_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function addProduct(product) {
  try {
    const token = localStorage.getItem("token");
    const response = axios.post(PRODUCT_API_URL, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteProduct(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${PRODUCT_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
