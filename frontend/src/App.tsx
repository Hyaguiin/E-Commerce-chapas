import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import { CartProvider } from "./components/cart/CartContext";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import Cart from "./components/cart/cart";

// Importação dinâmica (lazy loading) das páginas e componentes
const Login = lazy(() => import("./pages/login/login"));
const Home = lazy(() => import("./pages/home/home"));
const Register = lazy(() => import("./pages/register/register"));
const ProductView = lazy(() => import("./components/productView/productView"));
const ChicoView = lazy(() => import("./components/productView/chicoView"));
const CavaloList = lazy(() => import("./components/productList/cavalo"));
const CharutoList = lazy(() => import("./components/productList/charuto"));
const WhiskyList = lazy(() => import("./components/productList/whisky"));
const ProfileSettings = lazy(() => import("./components/profileSettings/profileSettings"));
const HomeAdmin = lazy(() => import("./pages/homeAdmin/homeAdmin"));
const Contact = lazy(() => import("./components/contact/contact"));
const EmployeeComponent = lazy(() => import("./components/employee/employee"));
const ProductAdd = lazy(() => import("./components/productListAdmin/productListAdmin"));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Cart />
          <Suspense fallback={
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="spinner-border animate-spin rounded-full border-t-4 border-yellow-500 w-16 h-16"></div>
            </div>
          }>
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
              <Route path="/employee" element={<ProtectedRoute><EmployeeComponent /></ProtectedRoute>} />
              <Route path="/productAdd" element={<ProtectedRoute><ProductAdd /></ProtectedRoute>} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
