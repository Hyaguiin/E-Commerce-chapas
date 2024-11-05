import { Request, Response } from "express";
import {
  authLogin,
  createUser,
  delteUserById,
  findUserByEmail,
  findUserById,
  updateUserById,
} from "../services/user-service";
import bcrypt from "bcrypt";

export async function addUser(req: Request, res: Response): Promise<void> {
  try {
    const user = req.body;
    const password = user.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    if (user) {
      const sameEmail = await findUserByEmail(user.email);
      if (!sameEmail) {
        const response = await createUser(user);
        if (response) {
          res.status(201).json({ msg: "Usuário criado", data: response });
          return;
        }
      } else {
        res.status(400).json({ erro: "Usuário com mesmo email já existe." });
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
      const response = await findUserById(id);
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
    const user = req.body;
    if (id && user) {
      const response = await updateUserById(id, user);
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
      const response = await delteUserById(id);
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
    const user = await findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ msg: "Email ou senha inválidos." });
      return;
    }

    const token = await authLogin(user._id, user.email, user.role);
    res.status(200).json({ msg: "Login bem-sucedido!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}
