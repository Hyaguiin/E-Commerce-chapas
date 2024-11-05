import axios from "axios";
import { USER_API_URL, LOGIN_API_URL } from "../constants/apiUrls";

export async function register(user) {
  try {
    const response = await axios.post(USER_API_URL, user);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function login(email, password) {
  try {
    const payload = {
      email: email,
      password: password,
    };
    const response = await axios.post(LOGIN_API_URL, payload);
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
