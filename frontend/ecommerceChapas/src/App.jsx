import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login/login.jsx';
import Home from './components/home/home.jsx';
import Register from './components/register/register.jsx';
import ProductView from './components/productView/productView.jsx';
import ChicoView from './components/productView/chicoView.jsx';
import CavaloList from './components/productList/cavalo.jsx';
import CharutoList from './components/productList/charuto.jsx';
import WhiskyList from './components/productList/whisky.jsx';
import ProfileSettings from './components/profileSettings/profileSettings.jsx';
import Cart from './components/cart/cart.jsx';
import BestSelles from './components/homeAdmin/dashboard/bestSelles/bestSelles.jsx';
import HomeAdmin from './components/homeAdmin/homeAdmin.jsx';
import Contact from './components/contact/contact.jsx';
import Employer from './components/homeAdmin/employer/employer.jsx';
import { CartProvider } from './components/cart/CartContext.jsx';

function App() {
  return (
    <CartProvider> 
      <Router>
        <div>
        <Cart />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productView" element={<ProductView />} />
            <Route path="/chicoView" element={<ChicoView />} />
            <Route path="/cavalos" element={<CavaloList />} />
            <Route path="/charutos" element={<CharutoList />} />
            <Route path="/whiskies" element={<WhiskyList />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/homeAdmin" element={<HomeAdmin />} />
            <Route path="/bestSelles" element={<BestSelles />} />
            <Route path="/employer" element={<Employer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
