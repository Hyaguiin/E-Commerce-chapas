import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import "./App.css";
import { CartProvider } from "./components/cart/CartContext";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import ProductView from "./components/productView/productView";
import ChicoView from "./components/productView/chicoView";
import CavaloList from "./components/productList/cavalo";
import CharutoList from "./components/productList/charuto";
import WhiskyList from "./components/productList/whisky";
import ProfileSettings from "./components/profileSettings/profileSettings";
import Cart from "./components/cart/cart";
import HomeAdmin from "./pages/homeAdmin/homeAdmin";
import Contact from "./components/contact/contact";
import Employer from "./components/employer/employer";
import ProductAdd from "./components/productListAdmin/productListAdmin";

interface ProtectedRouteProps {
  children: ReactNode; // Tipando children como ReactNode
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const decodeJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      const decoded = decodeJwt(token);
      const expirationTime = decoded.exp * 1000;
      const currentTime = new Date().getTime();

      if (currentTime < expirationTime) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const savedLoginState = localStorage.getItem("isLoggedIn");
    if (savedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CartProvider>
      <Router>
        <div>
          <Cart />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/productView" element={<ProtectedRoute><ProductView /></ProtectedRoute>} />
            <Route path="/chicoView" element={<ProtectedRoute><ChicoView /></ProtectedRoute>} />
            <Route path="/cavalos" element={<ProtectedRoute><CavaloList /></ProtectedRoute>} />
            <Route path="/charutos" element={<ProtectedRoute><CharutoList /></ProtectedRoute>} />
            <Route path="/whiskies" element={<ProtectedRoute><WhiskyList /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/homeAdmin" element={<ProtectedRoute><HomeAdmin /></ProtectedRoute>} />
            <Route path="/employer" element={<ProtectedRoute><Employer /></ProtectedRoute>} />
            <Route path="/productAdd" element={<ProtectedRoute><ProductAdd /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
