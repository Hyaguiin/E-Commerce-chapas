import { MongoUser } from "../database/user-mongodb";
import { User } from "../models/user-model";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

const mongoUser = new MongoUser();

export async function createUser(user: User): Promise<User | undefined> {
  if (!user) {
    throw new Error("Missing user");
  }

  const addedUser = await mongoUser.create(user);

  if (addedUser) {
    return addedUser;
  }

  return;
}

export async function findUserById(id: string): Promise<User | null> {
  if (!id) {
    throw new Error("Missing id");
  }

  const user = await mongoUser.findById(id);

  if (user) {
    return user;
  }

  return null;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  if (!email) {
    throw new Error("Missing email");
  }

  const user = await mongoUser.findByEmail(email);

  if (user) {
    return user;
  }

  return null;
}

export async function updateUserById(id: string, user: User): Promise<User | null> {
  if (!id && !user) {
    throw new Error("Invalid data");
  }

  const updatedUser = await mongoUser.update(id, user);

  if (updatedUser) {
    return updatedUser;
  }

  return null;
}

export async function delteUserById(id: string): Promise<User | null> {
  if (!id) {
    throw new Error("Invalid id");
  }

  const deletedUser = await mongoUser.delete(id);

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
