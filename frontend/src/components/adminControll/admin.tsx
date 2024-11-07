import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, UserIcon, ShoppingCartIcon, Cog8ToothIcon, ArrowRightOnRectangleIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';
import { User } from '../../models/userModel';

interface AdminControllProps {
  setCurrentComponent: (component: string) => void;
}

const AdminControll = ({ setCurrentComponent }: AdminControllProps) => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState('home');
  const userString = localStorage.getItem("user");
  const user: User | null = userString ? JSON.parse(userString) : null;

  React.useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSetActive = (component: string) => {
    setActive(component);
    setCurrentComponent(component);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleProducts = () => {
    setCurrentComponent('productList');
    setActive('cart');
  };

  const handleAddProduct = () => {
    setActive('addProduct');
  };

  return (
    <div className="flex flex-col w-64 h-screen bg-black text-white shadow-lg">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <img className="logoFacisa" src="https://cdn3d.iconscout.com/3d/premium/thumb/diamante-dourado-10703026-8796428.png" alt="Logo Facisa" width={64} />
        <h1 className='whiteBelt'>
          White<span className="cor"> Belt  <br /> admin</span>
        </h1>
      </div>

      <div className="flex items-center px-4 py-6 border-b border-gray-700">
        <div className="flex-shrink-0">
          <img className="h-12 w-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVoGy6JXR-Zu1xLzy0z57ow-9GhafWeQYWQ&s" alt="User Avatar" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="text-xs text-gray-400">{user?.email}</p>
        </div>
      </div>

      <nav className="flex-1 px-2 py-4">
        <ul>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'home' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={() => handleSetActive('home')}>
              <HomeIcon className="h-6 w-6 mr-3" />
              Home
            </button>
          </li>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'employee' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={() => handleSetActive('employee')}>
              <UserIcon className="h-6 w-6 mr-3" />
              Funcionários
            </button>
          </li>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'cart' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={handleProducts}>
              <ShoppingCartIcon className="h-6 w-6 mr-3" />
              Produtos
            </button>
          </li>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'addProduct' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={handleAddProduct}>
              <TagIcon className="h-6 w-6 mr-3" />
              Adicionar Produto
            </button>
          </li>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'settings' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={() => handleSetActive('settings')}>
              <Cog8ToothIcon className="h-6 w-6 mr-3" />
              Configurações
            </button>
          </li>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'dashboard' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={() => handleSetActive('dashboard')}>
              <ChartBarIcon className="h-6 w-6 mr-3" />
              Dashboard
            </button>
          </li>
          <li className="my-2">
            <button className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'logout' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`} onClick={handleLogout}>
              <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
              Logout <span aria-hidden="true">&rarr;</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center h-20 border-t border-gray-700">
        <p className="text-gray-400">© 2024 White Belt</p>
      </div>
    </div>
  );
};

export default AdminControll;
