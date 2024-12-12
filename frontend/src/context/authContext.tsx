import React, { createContext, useState, useEffect, useContext } from "react";
import { login } from "../services/userService";

// Tipo do contexto
type AuthContextType = {
  user: { id: string; email: string; role: string } | null;
  userLogin: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor do contexto
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{
    id: string;
    email: string;
    role: string;
  } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para realizar login
  const userLogin = async (email: string, password: string) => {
    try {
      // Utilizando a função de login do service
      const responseData = await login(email, password);

      // Decodificar o token para obter os dados do usuário
      const decodedToken = (responseData !== null) ? JSON.parse(atob(responseData.token.split(".")[1])) : "";

      // Atualizar estado do usuário
      setUser(decodedToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      throw new Error("Credenciais inválidas");
    }
  };

  // Função para realizar logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Verificar se o usuário já está autenticado ao carregar o aplicativo
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setUser(decodedToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, userLogin, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
