import { Address } from "./addressModel";

export interface User {
  name: string;
  email: string;
  cpf: string;
  password: string;
  address: Address[];
  role: "admin" | "user";
  age: number;
}
