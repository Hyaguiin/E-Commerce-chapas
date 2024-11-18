import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { OrderItem } from "./order-item-model";

export interface OrderModel {
  user_name: string;
  user_email: string;
  order_date?: Date;
  total_amount: number;
  order_items: OrderItem[];
}

@Entity("orders")
export class Order implements OrderModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar")
  user_name!: string;

  @Column("varchar")
  user_email!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  order_date?: Date;

  @Column("decimal", { precision: 10, scale: 2 })
  total_amount!: number;

  @Column("jsonb")
  order_items!: OrderItem[];
}
