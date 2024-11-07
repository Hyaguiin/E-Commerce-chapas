import { Request, Response } from "express";
import { 
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee 
} from "../services/employee-service";
import { Employee } from "../models/employee-model";

export async function fetchAllEmployees(req: Request, res: Response): Promise<void> {
    try {
        const employees = await getAllEmployees();
        if (employees && employees.length > 0) {
            res.status(200).json({ msg: "Funcionários encontrados", data: employees });
            return;
        }
        res.status(404).json({ msg: "Nenhum funcionário encontrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function fetchEmployeeById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const employee = await getEmployeeById(Number(id));
        if (employee) {
            res.status(200).json({ msg: "Funcionário encontrado", data: employee });
        } else {
            res.status(404).json({ msg: "Funcionário não encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function createNewEmployee(req: Request, res: Response): Promise<void> {
    try {
        const { name, role, salary } = req.body;
        const newEmployee = { name, role, salary };
        const createdEmployee = await createEmployee(newEmployee);

        if (createdEmployee) {
            res.status(201).json({ msg: "Funcionário criado com sucesso", data: createdEmployee });
        } else {
            res.status(400).json({ msg: "Falha ao criar funcionário" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function updateEmployeeById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const { name, role, salary } = req.body;
        const updatedEmployee: Employee = { name, role, salary };

        const employee = await updateEmployee(Number(id), updatedEmployee);
        if (employee) {
            res.status(200).json({ msg: "Funcionário atualizado com sucesso", data: employee });
        } else {
            res.status(404).json({ msg: "Funcionário não encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}

export async function deleteEmployeeById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const success = await deleteEmployee(Number(id));

        if (success) {
            res.status(200).json({ msg: "Funcionário excluído com sucesso" });
        } else {
            res.status(404).json({ msg: "Funcionário não encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Ocorreu um erro inesperado." });
    }
}
