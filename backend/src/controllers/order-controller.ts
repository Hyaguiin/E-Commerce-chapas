import { Request, Response } from "express";
import { 
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder 
} from "../services/order-service";
import { Order } from "../models/order-model";

export async function fetchAllOrders(req: Request, res: Response): Promise<void> {
    try {
        const orders = await getAllOrders();
        if (orders && orders.length > 0) {
            res.status(200).json({ msg: "Pedidos encontrados", data: orders });
            return;
        }
        res.status(404).json({ msg: "Nenhum pedido encontrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function fetchOrderById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const order = await getOrderById(Number(id));
        if (order) {
            res.status(200).json({ msg: "Pedido encontrado", data: order });
        } else {
            res.status(404).json({ msg: "Pedido não encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function createNewOrder(req: Request, res: Response): Promise<void> {
    try {
        const { user_name, user_email, total_amount, order_items } = req.body;
        const newOrder = { user_name, user_email, total_amount, order_items };
        const createdOrder = await createOrder(newOrder);

        if (createdOrder) {
            res.status(201).json({ msg: "Pedido criado com sucesso", data: createdOrder });
        } else {
            res.status(400).json({ msg: "Falha ao criar pedido" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function updateOrderById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const { user_name, user_email, total_amount, order_items } = req.body;
        const updatedOrder: Partial<Order> = { user_name, user_email, total_amount, order_items };

        const order = await updateOrder(Number(id), updatedOrder);
        if (order) {
            res.status(200).json({ msg: "Pedido atualizado com sucesso", data: order });
        } else {
            res.status(404).json({ msg: "Pedido não encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function deleteOrderById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const success = await deleteOrder(Number(id));

        if (success) {
            res.status(200).json({ msg: "Pedido excluído com sucesso" });
        } else {
            res.status(404).json({ msg: "Pedido não encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}
