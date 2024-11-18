import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address, IAddress } from "./address-model";

export interface IUser {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
  address: IAddress[];
  role: "admin" | "user";
  age: number;
}

@Entity("user")
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255 })
  email!: string;

  @Column({ type: "varchar", length: 11 })
  cpf!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @OneToMany(() => Address, (address) => address.user, { cascade: true })
  address!: Address[];

  @Column({ type: "enum", enum: ["admin", "user"] })
  role!: "admin" | "user";

  @Column("int")
  age!: number;
}
