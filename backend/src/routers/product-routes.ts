import express from "express";
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controllers/product-controller";
import { adminAuth } from "../middleware/admin-validation";

const productRouter = express.Router();

productRouter.use(adminAuth);
productRouter.post("/product", addProduct);
productRouter.put("/product/:id", updateProductById);
productRouter.delete("/product/:id", deleteProductById);
productRouter.get("/product/:id", getProductById);
productRouter.get("/product", getAllProducts);

export default productRouter;