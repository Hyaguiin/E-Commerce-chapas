import { model, Schema } from "mongoose";

export interface Product {
  name: string;
  price: number;
  amount: number;
  description?: string | null;
  race?: string | null;
  images: string[];
}

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: false },
  race: { type: String, required: false },
  images: { type: [String] },
});

export const ProductModel = model("Product", productSchema);
