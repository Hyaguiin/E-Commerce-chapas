import { Request, Response } from "express";
import {
  createUser,
  delteUserById,
  findUserById,
  updateUserById,
} from "../services/user-service";

export async function addUser(req: Request, res: Response): Promise<void> {
  try {
    const user = req.body;
    if (user) {
      const response = await createUser(user);
      if (response) {
        res.status(201).json({ msg: "Usuário criado", data: response });
        return;
      }
    }
    res.status(400).json({ msg: "Usuário inválido." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: error });
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
    res.status(500).json({ erro: error });
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
    res.status(500).json({ erro: error });
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
    res.status(500).json({ erro: error });
  }
}
