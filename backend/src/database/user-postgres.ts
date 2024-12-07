import { Address } from "../models/address-model";
import { User } from "../models/user-model";
import { UserRespository } from "../repositories/user-repository";
import { postgresDataSource } from "./connection";

const userRepository = postgresDataSource.getRepository(User);
const addressRepository = postgresDataSource.getRepository(Address);

export class PostgresUser implements UserRespository {
  async findById(id: number): Promise<User | null> {
    return await userRepository.findOneBy({ id: id });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await userRepository.findOneBy({ email: email });
  }

  async findByCpf(cpf: string): Promise<User | null> {
    return await userRepository.findOneBy({ cpf: cpf });
  }

  async create(user: User): Promise<User> {
    return await userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User | null> {
    const updateResult = await userRepository.update(id, user);

    if (updateResult.affected === 0) {
      return null;
    }

    const updatedUser = await userRepository.findOne({ where: { id } });
    return updatedUser;
  }

  async delete(id: number): Promise<User | null> {
    const userToDelete = await userRepository.findOne({ where: { id } });

    if (!userToDelete) {
      return null;
    }

    const deleteResult = await userRepository.delete(id);

    if (deleteResult.affected === 0) {
      return null;
    }

    return userToDelete;
  }
}
