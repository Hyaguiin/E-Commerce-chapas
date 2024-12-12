import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";
import { findUserById } from "../services/user-service";
import { User } from "../models/user-model";
declare global {
    namespace Express {
      interface Request {
        user?: User;
      }
    }
  }

export async function isLoggedIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { authorization } = req.headers;

        if(!authorization) {
            res.status(401).json({ msg: 'Para acessar este recurso, um token de autenticação válido deve ser enviado.' });
            return
        }
        const token = authorization.split(" ")[1];

        if (!token) {
            res.status(401).json({ msg: "Para acessar este recurso um token de autenticação válido deve ser enviado."});
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);

        if (typeof decodedToken === "object" && "id" in decodedToken) {
          const id: number = decodedToken.id;
          const user: User | null = await findUserById(id);
          if (!user) {
            res.status(404).json({ erro: "Usuário não encontrado." });
            return;
          }
          req.user = user;
        } else {
            res.status(401).json({ erro: "Token inválido." });
        }
        next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Ocorreu um erro inesperado" });
    }
}
