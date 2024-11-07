import axios from "axios";
import { USER_API_URL, LOGIN_API_URL } from "../constants/apiUrls";
import { User } from "../models/userModel";

export async function register(user: User): Promise<any> {
  try {
    const response = await axios.post(USER_API_URL, user);
    return response.data;
  } catch (error) {
    console.error(error);
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
