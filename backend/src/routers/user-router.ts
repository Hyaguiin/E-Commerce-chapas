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
userRouter.use(adminAuth);
userRouter.get("/user/:id", getUserById);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
