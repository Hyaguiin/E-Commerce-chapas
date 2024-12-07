import { UpdateResult, DeleteResult } from "typeorm";
import { Order } from "../models/order-model";
import { OrderRepository } from "../repositories/order-repository";
import { postgresDataSource } from "./connection";

const orderRepository = postgresDataSource.getRepository(Order);

export class PostgresOrder implements OrderRepository {

    async findAll(): Promise<Order[] | []> {
        return await orderRepository.find();
    }

    async findById(id: number): Promise<Order | null> {
        return await orderRepository.findOneBy({ id: id });
    }

    async create(order: Order): Promise<Order | null> {
        return await orderRepository.save(order);
    }

    async update(id: number, order: Partial<Order>): Promise<UpdateResult | null> {
        return await orderRepository.update(id, order);
    }

    async delete(id: number): Promise<DeleteResult | null> {
        return await orderRepository.delete(id);
    }
}
