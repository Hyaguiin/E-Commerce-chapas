import React from 'react';
import { HomeIcon, UserIcon, ShoppingCartIcon, Cog8ToothIcon, ArrowRightOnRectangleIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';

const AdminControll = () => {
  const [active, setActive] = React.useState('home');

  const handleSetActive = (item) => {
    setActive(item);
  };

  return (
    <div className="flex flex-col w-64 h-screen bg-black text-white shadow-lg">
      {/* Cabeçalho */}
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <img 
          className="logoFacisa" 
          src="https://cdn3d.iconscout.com/3d/premium/thumb/diamante-dourado-10703026-8796428.png" 
          alt="Logo Facisa" 
        />
        <h1 className='whiteBelt'>
          White<span className="cor">Belt  <br /> admin</span>
        </h1>
      </div>

      {/* Seção de Perfil */}
      <div className="flex items-center px-4 py-6 border-b border-gray-700">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVoGy6JXR-Zu1xLzy0z57ow-9GhafWeQYWQ&s"
            alt="User Avatar"
          />
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">Thomile Shelbe</p>
          <p className="text-xs text-gray-400">Thomil@Xueiible.com</p>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex-1 px-2 py-4">
        <ul>
          <li className="my-2">
            <a
              href="/homeAdmin"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'home' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('home')}
            >
              <HomeIcon className="h-6 w-6 mr-3" />
              Home
            </a>
          </li>
          <li className="my-2">
            <a
              href="/employer"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'employer' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('employer')}
            >
              <UserIcon className="h-6 w-6 mr-3" />
              Funcionários
            </a>
          </li>
          <li className="my-2">
            <a
              href="/produtos"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'cart' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('cart')}
            >
              <ShoppingCartIcon className="h-6 w-6 mr-3" />
              Produtos
            </a>
          </li>
          <li className="my-2">
            <a
              href="/promocoes"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'promocao' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('promocao')}
            >
              <TagIcon className="h-6 w-6 mr-3" /> {/* Ícone de promoção */}
              Promoções
            </a>
          </li>
          <li className="my-2">
            <a
              href="/settings"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'settings' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('settings')}
            >
              <Cog8ToothIcon className="h-6 w-6 mr-3" />
              Configurações
            </a>
          </li>
          <li className="my-2">
            <a
              href="/bestSelles"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'dashboard' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('dashboard')}
            >
              <ChartBarIcon className="h-6 w-6 mr-3" />
              Dashboard
            </a>
          </li>
          <li className="my-2">
            <a
              href="/"
              className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${active === 'logout' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => handleSetActive('logout')}
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
              Logout <span aria-hidden="true">&rarr;</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Rodapé */}
      <div className="flex items-center justify-center h-20 border-t border-gray-700">
        <p className="text-gray-400">© 2024 White Belt</p>
      </div>
    </div>
  );
};

export default AdminControll;
