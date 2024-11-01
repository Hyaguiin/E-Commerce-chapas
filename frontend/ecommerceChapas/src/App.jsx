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
import { SiD } from 'react-icons/si';
import HomeAdmin from './components/homeAdmin/homeAdmin.jsx';
import Contact from './components/contact/contact.jsx';
{/*   o scroll cagado ta em  productList.scss  em, se lembra!*/}
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productView" element={<ProductView />} />
          <Route path="/chicoView" element={<ChicoView />} />
          <Route path="/cavalos" element={<CavaloList />} />
          <Route path="/charutos" element={<CharutoList />} />
          <Route path="/whiskies" element={< WhiskyList/>} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homeAdmin" element={<HomeAdmin />} />
          <Route path="/bestSelles" element={<BestSelles />} />

        
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
