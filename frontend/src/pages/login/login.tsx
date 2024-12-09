import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import "./login.scss";
import { login } from "../../services/userService";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setIsLoggedIn } = useAuth();

  const navigate = useNavigate(); // Inicialize o hook de navegação

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Formato de e-mail inválido");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => password.length >= 8;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres");
      return;
    }

    const data = await login(email, password);
    console.log(data.msg);
    if (data.msg === "Login bem-sucedido!") {
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <div className="login-logo">
          <div className="login-container-name">
            <img
              className="login-logoFacisa"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/diamante-dourado-10703026-8796428.png"
              alt="Logo WhiteBelt"
            />
            <h1 className="login-whiteBelt">
              {" "}
              White <span className="login-cor"> Belt</span>
            </h1>
          </div>
        </div>
        <h2>Bem-vindo ao White Belt!</h2>
        <p>Venda de produtos de Grife</p>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group" id="login-email">
            <label htmlFor="email">Seu Email</label>
            <input
              id="email"
              type="email"
              placeholder="email@exemplo.com.br"
              value={email}
              onChange={handleEmailChange}
              required
              className={emailError ? "error" : ""}
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="login-input-group" id="login-password">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Sua Senha"
              value={password}
              onChange={handlePasswordChange}
              required
              className={passwordError ? "error" : ""}
            />
            {passwordError && (
              <span className="error-message">{passwordError}</span>
            )}
          </div>

          <div className="login-terms">
            <input type="checkbox" id="termos" />
            <label htmlFor="termos">Lembrar dispositivo</label>
          </div>

          <button type="submit" className="login-btn-primary">
            <span className="login-entrar">Entrar</span>
          </button>

          <p>
            Ainda não é registrado?{" "}
            <a href="/register" className="login-link">
              Crie uma conta
            </a>
          </p>
        </form>
      </div>

      <div className="login-image-container">
        <img
          src="https://cdn.shopify.com/s/files/1/0665/0308/2220/files/Peaky_Blinders_Blog_600x600.webp?v=1687809959"
          alt="Exemplo Drip"
        />
      </div>
    </div>
  );
};

export default Login;
