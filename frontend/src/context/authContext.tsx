import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getUserById } from "../services/userService";

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decoded.exp * 1000;
      const currentTime = new Date().getTime();

      if (currentTime < expirationTime) {
        const user = await getUserById(decoded.id);
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div className="spinner-border animate-spin rounded-full border-t-4 border-yellow-500 w-16 h-16"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
