import { useState } from 'react';
import Header from '../header/header';
import { CameraIcon } from '@heroicons/react/24/outline';
import './ProfileSettings.scss';

export default function ProfileSettings({ setProfileImage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [localProfileImage, setLocalProfileImage] = useState(null);
  
  // Estados para mensagens de erro
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [houseNumberError, setHouseNumberError] = useState('');

  // Função de validação de email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Formato de e-mail inválido');
    } else {
      setEmailError('');
    }
  };

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
    
    // Verificação de campos obrigatórios
    if (!name) setNameError('Nome é obrigatório');
    if (!email || emailError) setEmailError('E-mail é obrigatório e deve estar no formato correto');
    if (!address) setAddressError('Endereço é obrigatório');
    if (!houseNumber) setHouseNumberError('Número da casa é obrigatório');

    if (name && validateEmail(email) && address && houseNumber) {
      console.log({ name, email, address, houseNumber, localProfileImage });
    }
  };

  return (
    <>
      <Header />
      <div className="profile-settings-container">
        <h1 className="profile-header">Configuração de Perfil</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-image-input">
            <CameraIcon className="h-6 w-6 text-gray-500" />
            <label>Imagem de Perfil:</label>
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
              onChange={(e) => {
                setName(e.target.value);
                setNameError(''); // Limpa o erro ao digitar
              }}
              placeholder="Seu Nome"
              required
            />
            {nameError && <p className="error-message">{nameError}</p>} {/* Mensagem de erro em vermelho */}
          </div>
          <div className="profile-input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email@exemplo.com.br"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>} {/* Mensagem de erro em vermelho */}
          </div>
          <div className="profile-input-group">
            <label>Endereço:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressError(''); // Limpa o erro ao digitar
              }}
              placeholder="Seu endereço"
              required
            />
            {addressError && <p className="error-message">{addressError}</p>} {/* Mensagem de erro em vermelho */}
          </div>
          <div className="profile-input-group">
            <label>Número da Casa:</label>
            <input
              type="text"
              value={houseNumber}
              onChange={(e) => {
                setHouseNumber(e.target.value);
                setHouseNumberError(''); // Limpa o erro ao digitar
              }}
              placeholder="Número da casa/apartamento/lote"
              required
            />
            {houseNumberError && <p className="error-message">{houseNumberError}</p>} {/* Mensagem de erro em vermelho */}
          </div>
          <button type="submit" className="profile-save-button">Salvar</button>
        </form>
      </div>
    </>
  );
}