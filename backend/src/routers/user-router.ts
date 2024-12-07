import express from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  login,
  updateUser,
} from "../controllers/user-controller";
import { adminAuth } from "../middleware/admin-validation";

const userRouter = express.Router();

userRouter.post("/user/login", login);
userRouter.post("/user", addUser);
userRouter.get("/user/:id", adminAuth, getUserById);
userRouter.put("/user/:id", adminAuth, updateUser);
userRouter.delete("/user/:id", adminAuth, deleteUser);

export default userRouter;
