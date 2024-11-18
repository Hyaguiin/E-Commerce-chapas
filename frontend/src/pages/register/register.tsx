import React, { FormEvent, SyntheticEvent, useState } from "react";
import "./register.scss";
import { register } from "../../services/userService";
import InputMask from "react-input-mask";
import { Address } from "../../models/addressModel";
import { User } from "../../models/userModel";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // Existing state variables
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [age, setAge] = useState(0);

  // New state variables for address
  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    street: "",
    number: 0,
    zipCode: 0,
  });

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");

  // Address error states
  const [addressError, setAddressError] = useState({
    country: "",
    state: "",
    city: "",
    street: "",
    number: 0,
    zipCode: 0,
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
  const validateCpf = (cpf: string) => /^\d{11}$/.test(cpf); // 11 dígitos
  const validatePassword = (password: string) => password.length >= 8;

  // Address validation functions
  const validateAddressField = (field: string | number) =>
    typeof field === "string" ? field.length > 0 : field > 0;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Formato de e-mail inválido");
    } else {
      setEmailError("");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    if (!validateName(value)) {
      setNameError("Nome deve conter apenas letras");
    } else {
      setNameError("");
    }
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSurname(value);
    if (!validateName(value)) {
      setSurnameError("Sobrenome deve conter apenas letras");
    } else {
      setSurnameError("");
    }
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove everything that is not a number
    setCpf(value);
    if (!validateCpf(value)) {
      setCpfError("CPF deve ter exatamente 11 dígitos");
    } else {
      setCpfError("");
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value);
    setAge(value);
    if (value && value < 18) {
      setAgeError("Você deve ter 18 anos ou mais");
    } else {
      setAgeError("");
    }
  };

  // Address input change handlers
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });

    // Validate address fields
    if (!validateAddressField(value)) {
      setAddressError((prev) => ({
        ...prev,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } é obrigatório.`,
      }));
    } else {
      setAddressError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação dos campos
    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
      return;
    }

    if (!validateName(firstName)) {
      setNameError("Nome deve conter apenas letras");
      return;
    }

    if (!validateName(surname)) {
      setSurnameError("Sobrenome deve conter apenas letras");
      return;
    }

    if (!validateCpf(cpf)) {
      setCpfError("CPF deve ter exatamente 11 dígitos");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }
    setPasswordError("");

    if (age < 18) {
      setAgeError("Você deve ter 18 anos ou mais");
      return;
    }
    setAgeError("");

    // Validate address fields
    for (const key in address) {
      if (!validateAddressField(address[key as keyof Address])) {
        setAddressError((prev) => ({
          ...prev,
          [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} é obrigatório.`,
        }));
        return;
      }
    }

    // Unifying all information into registerPayload
    const name = `${firstName} ${surname}`;
    const registerPayload: User = {
      name,
      email,
      password,
      cpf,
      age,
      address: [
        {
          country: address.country,
          state: address.state,
          city: address.city,
          street: address.street,
          number: Number(address.number),
          zipCode: Number(address.zipCode),
        },
      ],
      role: "user",
    };

    try {
      await register(registerPayload);
      toast.success("Cadastro realizado com sucesso!");  // Show success toast
    } catch (error: any) {
      const errorMessage = error?.response?.data?.erro || "Erro ao realizar o cadastro."; 
      toast.error(errorMessage);  // Show error toast
    }
  };

  return (
    <div className="cadastro-container">
      <div className="form-container">
        <div className="logo">
          <div className="container-name">
            <img
              className="logoFacisa"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/diamante-dourado-10703026-8796428.png"
              alt="Logo Facisa"
            />
            <h1 className="whiteBelt">
              White<span className="cor">Belt</span>
            </h1>
          </div>
        </div>
        <h2>Bem-vindo ao White Belt!</h2>
        <p>Estilo e Elegância a Cada Passo</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group-nome">
            <div className="input-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                value={firstName}
                onChange={handleNameChange}
                required
              />
              {nameError && <span className="error-message">{nameError}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                id="sobrenome"
                type="text"
                placeholder="Sobrenome"
                value={surname}
                onChange={handleSurnameChange}
                required
              />
              {surnameError && (
                <span className="error-message">{surnameError}</span>
              )}
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Seu Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email@mail.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="cpf">CPF</label>
            <InputMask
              id="cpf"
              mask="999.999.999-99"
              placeholder="CPF (máx 11 dígitos)"
              value={cpf}
              onChange={handleCpfChange}
              required
            />
            {cpfError && <span className="error-message">{cpfError}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="age">Idade</label>
            <input
              id="age"
              type="number"
              placeholder="Idade"
              value={age}
              onChange={handleAgeChange}
              required
            />
            {ageError && <span className="error-message">{ageError}</span>}
          </div>

          {/* Address Fields */}
          <div className="input-group">
            <label htmlFor="country">País</label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="País"
              value={address.country}
              onChange={handleAddressChange}
              required
            />
            {addressError.country && (
              <span className="error-message">{addressError.country}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="state">Estado</label>
            <input
              id="state"
              name="state"
              type="text"
              placeholder="Estado"
              value={address.state}
              onChange={handleAddressChange}
              required
            />
            {addressError.state && (
              <span className="error-message">{addressError.state}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Cidade"
              value={address.city}
              onChange={handleAddressChange}
              required
            />
            {addressError.city && (
              <span className="error-message">{addressError.city}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="street">Rua</label>
            <input
              id="street"
              name="street"
              type="text"
              placeholder="Rua"
              value={address.street}
              onChange={handleAddressChange}
              required
            />
            {addressError.street && (
              <span className="error-message">{addressError.street}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="number"
              placeholder="Número"
              value={address.number}
              onChange={handleAddressChange}
              required
            />
            {addressError.number && (
              <span className="error-message">{addressError.number}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              placeholder="CEP"
              value={address.zipCode}
              onChange={handleAddressChange}
              required
            />
            {addressError.zipCode && (
              <span className="error-message">{addressError.zipCode}</span>
            )}
          </div>

          <div className="input-group-senha">
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="Sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="senhaConfirm">Confirmar Senha</label>
              <input
                id="senhaConfirm"
                type="password"
                placeholder="Sua Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {passwordError && (
                <span className="error-message">{passwordError}</span>
              )}
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" id="termos" required />
            <label htmlFor="termos">
              Eu aceito os{" "}
              <a href="#" className="link">
                Termos e Condições
              </a>
            </label>
          </div>

          <button type="submit" className="btn-primary">
            <span className="cadastrar">Cadastrar</span>
          </button>

          <p>
            Já tem uma conta?{" "}
            <a href="/login" className="link">
              Entrar
            </a>
          </p>
        </form>
      </div>

      <div className="image-container">
        <img
          src="https://cdn.shopify.com/s/files/1/0665/0308/2220/files/Peaky_Blinders_Blog_600x600.webp?v=1687809959"
          alt="Exemplo Grife"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
