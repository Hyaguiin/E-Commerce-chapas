import { model, Schema } from "mongoose";

export interface Product {
  name: string;
  price: number;
  amount: number;
  description?: string | null;
  category: "cavalo" | "whisky" | "charuto";
  color?: string | null;
  images: string[];
}

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: false },
  category: { type: String, enum: ["cavalo", "whisky", "charuto"], required: true },
  color: { type: String, required: false },
  images: { type: [String] },
});

export const ProductModel = model("Product", productSchema);
