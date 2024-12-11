import axios from "axios";
import { USER_API_URL, LOGIN_API_URL } from "../constants/apiUrls";
import { User } from "../models/userModel";

export async function getUserById(userId: number): Promise<User | undefined> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${USER_API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  }
}

export async function register(user: User): Promise<any> {
  try {
    const response = await axios.post(USER_API_URL, user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
}

export async function login(email: string, password: string): Promise<any> {
  try {
    const payload = {
      email: email,
      password: password,
    };
    const response = await axios.post(LOGIN_API_URL, payload);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function editUserProfile(userId: string, updatedUser: Partial<User>): Promise<any> {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token de autenticação não encontrado.");
    }

    const response = await axios.put(
      `${USER_API_URL}/${userId}`,
      updatedUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao editar perfil:", error);
    throw error;
  }
}