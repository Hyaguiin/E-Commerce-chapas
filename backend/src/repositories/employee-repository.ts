import { Employee } from "../models/employee-model";
import { UpdateResult, DeleteResult } from "typeorm";

export interface EmployeeRepository {
  findAll(): Promise<Employee[] | []>;
  findById(id: number): Promise<Employee | null>;
  create(employee: Employee): Promise<Employee | null>;
  update(id: number, employee: Partial<Employee>): Promise<UpdateResult | null>;
  delete(id: number): Promise<DeleteResult | null>;
}
