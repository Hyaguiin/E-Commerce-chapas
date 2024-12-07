import { MongoProduct } from "../database/product-mongodb";
import { Product } from "../models/product-model";

const mongoProduct = new MongoProduct();

export async function createProduct(product: Product): Promise<Product | null> {
    if (!product) {
        throw new Error("Invalid payload");
    }
    const addedProduct = await mongoProduct.create(product);
    return addedProduct || null;
}

export async function findAllProducts(): Promise<Product[] | []> {
    const products = await mongoProduct.findAll();
    return products;
}

export async function findProductById(id: string): Promise<Product | null> {
    if (!id) {
        throw new Error("Invalid ID");
    }
    const product = await mongoProduct.findById(id);
    return product || null;
}

export async function updateProduct(id: string, product: Product): Promise<Product | null> {
    if (!id || !product) {
        throw new Error("Invalid ID or product payload");
    }
    const updatedProduct = await mongoProduct.update(id, product);
    return updatedProduct || null;
}

export async function deleteProduct(id: string): Promise<Product | null> {
    if (!id) {
        throw new Error("Invalid ID");
    }
    const deletedProduct = await mongoProduct.delete(id);
    return deletedProduct || null;
}
