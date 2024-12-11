import { useState, useEffect } from 'react';
import Header from '../header/header';
import './profileSettings.scss';
import { editUserProfile, getUserById } from '../../services/userService'; // Importe os serviços

export default function ProfileSettings() {
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

  // Carregar dados iniciais do usuário
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user")); // Obtém o ID do usuário
        const userData = await getUserById(user.id);
        if (userData) {
          setName(userData.name);
          setEmail(userData.email);
          setAddress(userData.address || '');  // Defina o valor do endereço, se disponível
          setHouseNumber(userData.houseNumber || '');  // Defina o valor do número da casa, se disponível
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
      }
    };

    loadUserData();
  }, []);

  // Função de validação de email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Formato de e-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificação de campos obrigatórios
    if (!name) setNameError('Nome é obrigatório');
    if (!email || emailError) setEmailError('E-mail é obrigatório e deve estar no formato correto');
    if (!address) setAddressError('Endereço é obrigatório');
    if (!houseNumber) setHouseNumberError('Número da casa é obrigatório');

    if (name && validateEmail(email) && address && houseNumber) {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        
        // Verificando o ID do usuário antes da requisição
        console.log("ID do usuário:", user.id); // Aqui está a verificação do ID

        const updatedUser = {
          name,
          email,
          address,
          houseNumber,
        };
        
        const response = await editUserProfile(user.id, updatedUser);
        console.log("Perfil atualizado com sucesso:", response);
        alert("Perfil atualizado com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar o perfil:", error);
        alert("Erro ao atualizar o perfil. Tente novamente.");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="profile-settings-container">
        <h1 className="profile-header">Configuração de Perfil</h1>
        <form onSubmit={handleSubmit} className="profile-form">
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
            {nameError && <p className="error-message">{nameError}</p>}
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
            {emailError && <p className="error-message">{emailError}</p>}
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
              placeholder="Seu Endereço"
              required
            />
            {addressError && <p className="error-message">{addressError}</p>}
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
              placeholder="Número da Casa"
              required
            />
            {houseNumberError && <p className="error-message">{houseNumberError}</p>}
          </div>
          <button type="submit" className="profile-save-button">Salvar</button>
        </form>
      </div>
    </>
  );
}
