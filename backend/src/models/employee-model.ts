import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface EmployeeModel {
    id?: number;
    name: string;
    role: string;
    salary: number;
  }

@Entity("employee")
export class Employee implements EmployeeModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  role: string;

  @Column({ type: "decimal" })
  salary: number;

  constructor(name: string, role: string, salary: number) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }
}
