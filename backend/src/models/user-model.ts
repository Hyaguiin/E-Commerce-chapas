import { Document, Schema, model } from "mongoose";
import { Address, addressSchema } from "./address-model";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  address: Address;
  role: "admin" | "user";
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: addressSchema, required: true },
  role: { type: String, enum: ["admin", "user"], required: true },
});

export const UserModel = model("User", userSchema);
