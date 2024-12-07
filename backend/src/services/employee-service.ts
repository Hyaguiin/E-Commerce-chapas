import { PostgresEmployee } from "../database/employee-postgres";
import { Employee } from "../models/employee-model";

const pgEmployee = new PostgresEmployee();

export async function getAllEmployees(): Promise<Employee[]> {
  const employees = await pgEmployee.findAll();
  return employees;
}

export async function getEmployeeById(id: number): Promise<Employee | null> {
  const employee = await pgEmployee.findById(id);
  return employee;
}

export async function createEmployee(employee: Employee): Promise<Employee | null> {
  const createdEmployee = await pgEmployee.create(employee);
  return createdEmployee;
}

export async function updateEmployee(id: number, employee: Employee): Promise<Employee | null> {
  const updatedEmployee = await pgEmployee.update(id, employee);
  if (updatedEmployee) {
    const employee = await pgEmployee.findById(id);
    return employee;
  }
  return null;
}

export async function deleteEmployee(id: number): Promise<boolean> {
  const result = await pgEmployee.delete(id);
  return result ? true : false;
}
