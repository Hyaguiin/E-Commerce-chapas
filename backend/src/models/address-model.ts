import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user-model";

export interface IAddress {
  country: string;
  state: string;
  city: string;
  street: string;
  number: number;
  zipCode: number;
  user_id?: number;
}

@Entity("address")
export class Address implements IAddress {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 56 })
  country!: string;

  @Column({ type: "varchar", length: 50 })
  state!: string;

  @Column({ type: "varchar", length: 255 })
  city!: string;

  @Column({ type: "varchar", length: 255 })
  street!: string;

  @Column({ type: "int" })
  number!: number;

  @Column({ type: "int" })
  zipCode!: number;

  @ManyToOne(() => User, (user) => user.address)
  @JoinColumn()
  user!: User;
}
