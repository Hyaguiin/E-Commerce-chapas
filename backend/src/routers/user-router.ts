import express from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/user/:id", getUserById);
userRouter.post("/user", addUser);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
