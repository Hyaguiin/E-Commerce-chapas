import { Schema } from "mongoose";

export interface Address {
  country: string;
  state: string;
  city: string;
  street: string;
  number: number;
  zipCode: number;
}

export const addressSchema = new Schema(
  {
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    zipCode: { type: Number, required: true },
  },
  { _id: false }
);
