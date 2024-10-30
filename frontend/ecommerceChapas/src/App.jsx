import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login/login.jsx';
import Home from './components/home/home.jsx';
import Register from './components/register/register.jsx';
import ProductView from './components/productView/productView.jsx';
import ChicoView from './components/productView/chicoView.jsx';
import ProductList from './components/productList/productList.jsx';
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
          <Route path="/productList" element={<ProductList />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
