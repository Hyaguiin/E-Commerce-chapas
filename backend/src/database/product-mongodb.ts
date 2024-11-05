import { Product, ProductModel } from "../models/product-model";
import { ProductInterface } from "../repositories/product-repository";

export class MongoProduct implements ProductInterface {
  async findAll(): Promise<Product[] | []> {
    return ProductModel.find();
  }

  async findById(id: string): Promise<Product | null> {
    return ProductModel.findById(id);
  }

  async create(product: Product): Promise<Product | null> {
    return ProductModel.create(product);
  }

  async update(id: string, product: Product): Promise<Product | null> {
    return ProductModel.findByIdAndUpdate(id, product, { new: true });
  }

  async delete(id: string): Promise<Product | null> {
    return ProductModel.findByIdAndDelete(id);
  }
}
