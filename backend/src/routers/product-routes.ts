import express from "express";
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controllers/product-controller";
import { adminAuth } from "../middleware/admin-validation";

const productRouter = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", adminAuth, getProductById);
productRouter.post("/product", adminAuth, addProduct);
productRouter.put("/product/:id", adminAuth, updateProductById);
productRouter.delete("/product/:id", adminAuth, deleteProductById);


export default productRouter;
