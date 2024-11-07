import express from "express";
import { adminAuth } from "../middleware/admin-validation";
import { createNewEmployee, deleteEmployeeById, fetchAllEmployees, fetchEmployeeById, updateEmployeeById } from "../controllers/employee.-controller";

const employeeRouter = express.Router();

employeeRouter.get("/employee", adminAuth, fetchAllEmployees);
employeeRouter.get("/employee/:id", adminAuth, fetchEmployeeById);
employeeRouter.post("/employee", adminAuth, createNewEmployee);
employeeRouter.put("/employee/:id", adminAuth, updateEmployeeById);
employeeRouter.delete("/employee/:id", adminAuth, deleteEmployeeById);

export default employeeRouter;
