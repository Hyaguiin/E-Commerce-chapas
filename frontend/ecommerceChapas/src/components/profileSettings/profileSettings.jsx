import { useState } from 'react';
import Header from '../header/header';
import { CameraIcon } from '@heroicons/react/24/outline';
import './ProfileSettings.scss';

export default function ProfileSettings({ setProfileImage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [localProfileImage, setLocalProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLocalProfileImage(imageUrl);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, address, position, localProfileImage });
  };

  return (
    <>
      <Header />
      <div className="profile-settings-container">
        <h1 className="profile-header">Configuração de Perfil</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-image-input">
            <CameraIcon className="h-6 w-6 text-gray-500" />
            <label>Imagen de Perfil:</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          {localProfileImage && (
            <img
              src={localProfileImage}
              alt="Profile Preview"
              className="profile-image-preview"
            />
          )}
          <div className="profile-input-group">
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu Nome"
              required
            />
          </div>
          <div className="profile-input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email@exemplo.com.br"
              required
            />
          </div>
          <div className="profile-input-group">
            <label>Endereço:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Seu endereço"
              required
            />
          </div>
          <div className="profile-input-group">
            <label>Position:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Enter your position"
              required
            />
          </div>
          <button type="submit" className="profile-save-button">Salvar</button>
        </form>
      </div>
    </>
  );
}