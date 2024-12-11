import { useState } from 'react';
import Header from '../header/header';
import { CameraIcon } from '@heroicons/react/24/outline';
import './profileSettings.scss';
import { editUserProfile } from '../../services/userService'; // Importe o serviço de atualização de perfil
import { useEffect } from 'react'; // Para carregar dados iniciais
import { getUserById } from '../../services/userService'; // Para carregar os dados do usuário

export default function ProfileSettings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [localProfileImage, setLocalProfileImage] = useState(null);
  const [profileImage, setProfileImage] = useState('');
  
  // Estados para mensagens de erro
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [houseNumberError, setHouseNumberError] = useState('');

  // Carregue dados iniciais do usuário
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user")); // Substitua pelo ID do usuário real, talvez obtido via contexto ou autenticação
        console.log(user.id)
        const userData = await getUserById(user.id);
        if (userData) {
          setName(userData.name);
          setEmail(userData.email);
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

    if (name && validateEmail(email)) {
      try {
        const user = JSON.parse(localStorage.getItem("user")); // Substitua pelo ID do usuário real, talvez obtido via contexto ou autenticação
        const updatedUser = {
          name,
          email,
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
          <button type="submit" className="profile-save-button">Salvar</button>
        </form>
      </div>
    </>
  );
}
