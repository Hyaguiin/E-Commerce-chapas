import React, { useState } from 'react';
import '../../components/login/login.scss'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        //Dps meter auth aqui 
    };

    return (
        <>
            <div className="login-container">
                <div className="form-container">
                    <div className="logo">
                        <div className="container-name">
                            <img
                                className="logoFacisa"
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/diamante-dourado-10703026-8796428.png"
                                alt="Logo Facisa"
                            />
                            <h1 className = "whiteBelt"> White <span className="cor"> Belt</span></h1>
                        </div>
                    </div>
                    <h2>Bem-vindo ao White Belt!</h2>
                    <p>
                        Venda de produtos de Grife
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group" id="email">
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
                        </div>

                        <div className="terms">
                            <input type="checkbox" id="termos" />
                            <label htmlFor="termos">Lembrar dispositivo</label>
                        </div>

                        <button type="submit" className="btn-primary"><span className='entrar' >Entrar </span></button>

                        <p>Ainda não é registrado? <a href="#" className="link">Crie uma conta</a></p>
                    </form>
                </div>

                <div className="image-container">
                    <img src="https://cdn.shopify.com/s/files/1/0665/0308/2220/files/Peaky_Blinders_Blog_600x600.webp?v=1687809959" alt="Exemplo Drip" />
                </div>
            </div>
        </>
    );
};

export default Login;
