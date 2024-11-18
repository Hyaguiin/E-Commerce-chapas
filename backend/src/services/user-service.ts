import { PostgresUser } from "../database/user-postgres";
import { User } from "../models/user-model";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

const postgresUser = new PostgresUser();

export async function createUser(user: User): Promise<User | undefined> {
  if (!user) {
    throw new Error("Missing user");
  }

  const addedUser = await postgresUser.create(user);
  if (addedUser) {
    return addedUser;
  }

  return;
}

export async function findUserById(id: number): Promise<User | null> {
  if (!id) {
    throw new Error("Missing id");
  }

  const user = await postgresUser.findById(id);

  if (user) {
    return user;
  }

  return null;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  if (!email) {
    throw new Error("Missing email");
  }

  const user = await postgresUser.findByEmail(email);

  if (user) {
    return user;
  }

  return null;
}

export async function findUserByCpf(cpf: string): Promise<User | null> {
  if (!cpf) {
    throw new Error("Missing cpf");
  }

  const user = await postgresUser.findByCpf(cpf);

  if (user) {
    return user;
  }

  return null;
}

export async function updateUserById(id: number, user: User): Promise<User | null> {
  if (!id && !user) {
    throw new Error("Invalid data");
  }

  const updatedUser = await postgresUser.update(id, user);

  if (updatedUser) {
    return updatedUser;
  }

  return null;
}

export async function delteUserById(id: number): Promise<User | null> {
  if (!id) {
    throw new Error("Invalid id");
  }

  const deletedUser = await postgresUser.delete(id);

  if (deletedUser) {
    return deletedUser;
  }

  return null;
}

export async function authLogin(id: string | unknown, email: string, role: string): Promise<string | null> {
  if (!id || !email || !role) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: id,
      email: email,
      role: role,
    },
    JWT_SECRET,
    {
      expiresIn: "6h",
    }
  );

  if (token) {
    return token;
  }

  return null;
}
