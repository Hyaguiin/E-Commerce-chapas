import { useState } from 'react';
import Header from '../header/header';
import { CameraIcon } from '@heroicons/react/24/outline'; // Importando ícone

export default function ProfileSettings({ setProfileImage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState(''); // Novo estado para cargo
  const [localProfileImage, setLocalProfileImage] = useState(null); // Mantenha a imagem localmente

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLocalProfileImage(imageUrl);
      setProfileImage(imageUrl); // Atualiza o estado no componente pai
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, address, position, localProfileImage }); // Incluindo o cargo nos dados enviados
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Profile Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center">
            <label className="mr-4 text-gray-600 flex items-center">
              <CameraIcon className="h-6 w-6 text-gray-500 mr-2" />
              Profile Image:
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="border rounded-md p-2 text-gray-600"
            />
          </div>
          {localProfileImage && (
            <img
              src={localProfileImage}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full border-2 border-blue-400 shadow-md"
            />
          )}
          <div>
            <label className="block mb-2 text-gray-600">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md p-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded-md p-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Position:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border rounded-md p-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your position"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white font-semibold py-2 px-6 rounded hover:text-[rgb(232,202,5)] transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
