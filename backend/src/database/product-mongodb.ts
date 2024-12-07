import { Product, ProductModel } from "../models/product-model";
import { ProductInterface } from "../repositories/product-repository";

export class MongoProduct implements ProductInterface {
  async findAll(): Promise<Product[] | []> {
    return await ProductModel.find();
  }

  async findById(id: string): Promise<Product | null> {
    return await ProductModel.findById(id);
  }

  async create(product: Product): Promise<Product | null> {
    return await ProductModel.create(product);
  }

  async update(id: string, product: Product): Promise<Product | null> {
    return await ProductModel.findByIdAndUpdate(id, product, { new: true });
  }

  async delete(id: string): Promise<Product | null> {
    return await ProductModel.findByIdAndDelete(id);
  }
}
