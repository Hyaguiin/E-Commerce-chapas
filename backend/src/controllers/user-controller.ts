import { Request, Response } from "express";
import {
  authLogin,
  createUser,
  delteUserById,
  findUserByCpf,
  findUserByEmail,
  findUserById,
  updateUserById,
} from "../services/user-service";
import bcrypt from "bcrypt";
import { User } from "../models/user-model";

export async function addUser(req: Request, res: Response): Promise<void> {
  try {
    const user: User = req.body;
    const password = user.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    if (user) {
      const emailExists = await findUserByEmail(user.email);
      const cpfExists = await findUserByCpf(user.cpf);
      if (emailExists) {
        res.status(400).json({ erro: "Usuário com mesmo email já existe." });
        return;
      }
      if (cpfExists) {
        res.status(400).json({ erro: "Usuário com mesmo cpf já existe." });
        return;
      }
      const response = await createUser(user);
      if (response) {
        res.status(201).json({ msg: "Usuário criado", data: response });
        return;
      }
    }
    res.status(400).json({ msg: "Usuário inválido." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    if (id) {
      const numericId = Number(id);
      const response = await findUserById(numericId);
      if (response) {
        res.status(200).json({ msg: "Usuário encontrado", data: response });
        return;
      }
    }
    res.status(404).json({ msg: "Usuário não encontrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const user: User = req.body;
    if (id && user) {
      const numericId = Number(id);
      const response = await updateUserById(numericId, user);
      if (response) {
        res.status(200).json({ msg: "Usuário atualizado", data: response });
        return;
      }
    }
    res.status(404).json({ msg: "Usuário não encontrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    if (id) {
      const numericId = Number(id);
      const response = await delteUserById(numericId);
      if (response) {
        res.status(200).json({ msg: "Usuário excluído", data: response });
        return;
      }
    }
    res.status(404).json({ msg: "Usuário não encontrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;
    const user: User | null = await findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ msg: "Email ou senha inválidos." });
      return;
    }

    const token = await authLogin(user.id, user.email, user.role);
    res.status(200).json({ msg: "Login bem-sucedido!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}
