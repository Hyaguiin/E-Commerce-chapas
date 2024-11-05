import { Request, Response } from "express";
import { createProduct, findProductById, updateProduct, deleteProduct, findAllProducts } from "../services/product-service";

export async function addProduct(req: Request, res: Response): Promise<void> {
  try {
    const product = req.body;
    if (product) {
      const response = await createProduct(product);
      if (response) {
        res.status(201).json({ msg: "Produto adicionado com sucesso!", data: response });
        return;
      }
    }
    res.status(400).json({ erro: "Produto inválido." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado." });
  }
}

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await findAllProducts();
        if (products.length > 0 ) {
            res.status(200).json({ data: products });
            return;
        }
        res.status(404).json({ erro: "Nenhum produto encontrado." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function getProductById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const product = await findProductById(id);
    if (product) {
      res.status(200).json({ data: product });
    } else {
      res.status(404).json({ erro: "Produto não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado." });
  }
}

export async function updateProductById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const productUpdates = req.body;
    const updatedProduct = await updateProduct(id, productUpdates);
    
    if (updatedProduct) {
      res.status(200).json({ msg: "Produto atualizado com sucesso!", data: updatedProduct });
    } else {
      res.status(404).json({ erro: "Produto não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado." });
  }
}

export async function deleteProductById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    
    if (deletedProduct) {
      res.status(200).json({ msg: "Produto deletado com sucesso!", data: deletedProduct });
    } else {
      res.status(404).json({ erro: "Produto não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado." });
  }
}
