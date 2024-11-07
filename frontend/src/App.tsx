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
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

function App() {
  
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div>
            <Cart />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/productView" element={<ProtectedRoute><ProductView /></ProtectedRoute>} />
              <Route path="/chicoView" element={<ProtectedRoute><ChicoView /></ProtectedRoute>} />
              <Route path="/cavalos" element={<CavaloList />} />
              <Route path="/charutos" element={<CharutoList />} />
              <Route path="/whiskies" element={<WhiskyList />} />
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
    </ AuthProvider>
  );
}

export default App;
