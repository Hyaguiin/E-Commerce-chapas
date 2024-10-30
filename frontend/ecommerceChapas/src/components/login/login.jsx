import React, { useState } from 'react';
import '../../components/login/login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Adicionar lógica de autenticação aqui
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
                        <h1 className="login-whiteBelt"> White <span className="login-cor"> Belt</span></h1>
                    </div>
                </div>
                <h2>Bem-vindo ao White Belt!</h2>
                <p>
                    Venda de produtos de Grife
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="login-input-group" id="login-email">
                        <label htmlFor="email">Seu Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-input-group-senha">
                        <div className="login-input-group">
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
                    </div>

                    <div className="login-terms">
                        <input type="checkbox" id="termos" />
                        <label htmlFor="termos">Lembrar dispositivo</label>
                    </div>

                    <button type="submit" className="login-btn-primary">
                        <span className='login-entrar'>Entrar </span>
                    </button>

                    <p>Ainda não é registrado? <a href="#" className="login-link">Crie uma conta</a></p>
                </form>
            </div>

            <div className="login-image-container">
                <img src="https://cdn.shopify.com/s/files/1/0665/0308/2220/files/Peaky_Blinders_Blog_600x600.webp?v=1687809959" alt="Exemplo Drip" />
            </div>
        </div>
    );
};

export default Login;