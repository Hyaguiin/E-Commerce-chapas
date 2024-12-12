import { Address } from "./addressModel";

export interface User {
  id: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
  address: Address[];
  role: "admin" | "user";
  age: number;
}

export interface LoginResponse {
  msg: string;
  token: string
}