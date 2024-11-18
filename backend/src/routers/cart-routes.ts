import { Router } from "express";
import {
  fetchCart,
  addItemToCartController,
  updateItemInCart,
  removeItemFromCartController,
  clearUserCart,
} from "../controllers/cart-controller";

const cartRouter = Router();

cartRouter.get("/cart/:userId", fetchCart);

cartRouter.post("/cart/:userId/add", addItemToCartController);

cartRouter.put("/cart/:userId/update", updateItemInCart);

cartRouter.delete("/cart/:userId/remove", removeItemFromCartController);

cartRouter.delete("/cart/:userId/clear", clearUserCart);

export default cartRouter;
