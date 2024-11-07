import { UpdateResult, DeleteResult } from "typeorm";
import { Employee } from "../models/employee-model";
import { EmployeeRepository } from "../repositories/employee-repository";
import { postgresDataSource } from "./connection";

const employeeRepository = postgresDataSource.getRepository(Employee);

export class PostgresEmployee implements EmployeeRepository {

    async findAll(): Promise<Employee[] | []> {
        return await employeeRepository.find();
    }

    async findById(id: number): Promise<Employee | null> {
        return await employeeRepository.findOneBy({ id: id });
    }

    async create(employee: Employee): Promise<Employee | null> {
        return await employeeRepository.save(employee);
    }

    async update(id: number, employee: Partial<Employee>): Promise<UpdateResult | null> {
        return await employeeRepository.update(id, employee);
    }

    async delete(id: number): Promise<DeleteResult | null> {
        return await employeeRepository.delete(id);
    }
}
