export interface Product {
  _id?: string;
  name: string;
  price: number;
  amount: number;
  description?: string | null;
  category: "cavalo" | "whisky" | "charuto" | "";
  color?: string | null;
  images: string[];
}
