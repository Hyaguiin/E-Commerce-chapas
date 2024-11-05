import { User, UserModel } from "../models/user-model";
import { UserInterface } from "../repositories/user-repository";

export class MongoUser implements UserInterface {
  async findById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({ email: email });
  }

  async findByCpf(cpf: string): Promise<User | null> {
    return await UserModel.findOne({ cpf: cpf });
  }

  async create(user: User): Promise<User> {
    return await UserModel.create(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    return await UserModel.findByIdAndUpdate(id, user);
  }

  async delete(id: string): Promise<User | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
