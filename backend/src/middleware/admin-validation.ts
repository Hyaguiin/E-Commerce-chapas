import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { findUserById } from "../services/user-service";
import { JWT_SECRET } from "../config/config";
import { User } from "../models/user-model";

export async function adminAuth(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).json({ msg: 'Para acessar este recurso, um token de autenticação válido deve ser enviado.' });
      return;
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      res.status(401).json({ msg: "Para acessar este recurso, um token de autenticação válido deve ser enviado." });
      return;
    }

    const decodedToken = jwt.verify(token, JWT_SECRET);

    if (typeof decodedToken === "object" && "id" in decodedToken) {
      const id: string = decodedToken.id;
      const user: User | null = await findUserById(id);

      if (!user) {
        res.status(404).json({ erro: "Usuário não encontrado." });
        return;
      }

      req.user = user;

      if (user.role !== "admin") {
        res.status(403).json({ msg: "Acesso negado. Somente administradores podem acessar este recurso." });
        return;
      }

      return next();
    } else {
      res.status(401).json({ erro: "Token inválido." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Ocorreu um erro inesperado" });
  }
}
