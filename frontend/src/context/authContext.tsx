import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  
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
  
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
  
      if (token) {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        const expirationTime = decoded.exp * 1000;
        const currentTime = new Date().getTime();
  
        if (currentTime < expirationTime) {
          setIsLoggedIn(true);
        } else {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
      console.log("Logado:", isLoggedIn);
    };
  
    useEffect(() => {
      checkAuthStatus();
    }, [isLoggedIn]);
  
    return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
  };
  