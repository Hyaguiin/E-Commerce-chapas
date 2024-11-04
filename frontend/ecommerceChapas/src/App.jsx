import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { CartProvider } from './components/cart/CartContext.jsx'; // ajuste o caminho conforme necessário
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import Register from './pages/register/register.jsx';
import ProductView from './components/productView/productView.jsx';
import ChicoView from './components/productView/chicoView.jsx';
import CavaloList from './components/productList/cavalo.jsx';
import CharutoList from './components/productList/charuto.jsx';
import WhiskyList from './components/productList/whisky.jsx';
import ProfileSettings from './components/profileSettings/profileSettings.jsx';
import Cart from './components/cart/cart.jsx';
import BestSelles from './pages/homeAdmin/homeAdmin.jsx';
import HomeAdmin from './pages/homeAdmin/homeAdmin.jsx';
import Contact from './components/contact/contact.jsx';
import Employer from './components/employer/employer.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Cart></Cart>
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
