import express from "express";
import { adminAuth } from "../middleware/admin-validation";
import { 
    createNewOrder, 
    deleteOrderById, 
    fetchAllOrders, 
    fetchOrderById, 
    updateOrderById 
} from "../controllers/order-controller";

const orderRouter = express.Router();

orderRouter.get("/orders", adminAuth, fetchAllOrders);
orderRouter.get("/orders/:id", adminAuth, fetchOrderById);
orderRouter.post("/orders", adminAuth, createNewOrder);
orderRouter.put("/orders/:id", adminAuth, updateOrderById);
orderRouter.delete("/orders/:id", adminAuth, deleteOrderById);

export default orderRouter;
