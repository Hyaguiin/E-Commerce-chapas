import { Request, Response } from "express";
import { 
    getCartByUserId,
    addItemToCart,
    removeItemFromCart,
    deleteCart
} from "../services/cart-service";
import { OrderItem } from "../models/order-item-model";

export async function fetchCart(req: Request, res: Response): Promise<void> {
    try {
        const userId = Number(req.params.userId);
        const cart = await getCartByUserId(userId);
        if (cart && cart.items.length > 0) {
            res.status(200).json({ msg: "Carrinho encontrado", data: cart });
        } else {
            res.status(404).json({ msg: "Carrinho vazio ou não encontrado" });
        }
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function addItemToCartController(req: Request, res: Response): Promise<void> {
    try {
        const userId = Number(req.params.userId);
        const { product_id, product_name, quantity, price } = req.body;

        if (!product_id || quantity <= 0) {
            res.status(400).json({ msg: "Produto e quantidade são obrigatórios e quantidade deve ser maior que 0." });
            return;
        }

        const cartItem: OrderItem = { product_id, product_name, quantity, price };
        await addItemToCart(userId, cartItem);

        const updatedCart = await getCartByUserId(userId);
        res.status(200).json({ msg: "Produto adicionado ao carrinho com sucesso", data: updatedCart });
    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function updateItemInCart(req: Request, res: Response): Promise<void> {
    try {
        const userId = Number(req.params.userId);
        const { product_id, quantity } = req.body;

        if (!product_id || !quantity) {
            res.status(400).json({ msg: "Produto e quantidade são obrigatórios." });
            return;
        }

        await addItemToCart(userId, { product_id, product_name: "", quantity, price: 0 });
        const updatedCart = await getCartByUserId(userId);

        if (updatedCart) {
            res.status(200).json({ msg: "Carrinho atualizado com sucesso", data: updatedCart });
        } else {
            res.status(404).json({ msg: "Produto não encontrado no carrinho" });
        }
    } catch (error) {
        console.error("Error updating item in cart:", error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function removeItemFromCartController(req: Request, res: Response): Promise<void> {
    try {
        const userId = Number(req.params.userId);
        const { product_id } = req.body;

        if (!product_id) {
            res.status(400).json({ msg: "Produto é obrigatório." });
            return;
        }

        await removeItemFromCart(userId, product_id);

        const updatedCart = await getCartByUserId(userId);
        res.status(200).json({ msg: "Produto removido do carrinho com sucesso", data: updatedCart });
    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function clearUserCart(req: Request, res: Response): Promise<void> {
    try {
        const userId = Number(req.params.userId);
        await deleteCart(userId);

        res.status(200).json({ msg: "Carrinho esvaziado com sucesso" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}
