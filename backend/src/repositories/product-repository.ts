import { Product } from "../models/product-model";

export interface ProductInterface {
  findAll(): Promise<Product[] | []>;
  findById(id: string): Promise<Product | null>;
  create(product: Product): Promise<Product | null>;
  update(id: string, product: Product): Promise<Product | null>;
  delete(id: string): Promise<Product | null>;
}
