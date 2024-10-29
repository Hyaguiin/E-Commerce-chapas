// src/components/register/register.jsx
import React, { useState } from 'react';
import '../../components/register/register.scss';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione sua lógica de envio aqui, como uma requisição para uma API.
        console.log('Dados do registro:', { name, surname, email, password, confirmPassword });
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

                        <h1 className='whiteBelt'>White<span className="cor">Belt</span></h1>
                    </div>
                </div>
                <h2>Bem-vindo ao White Belt!</h2>
                <p>Venda de produtos de Grife</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group-nome">
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="nome" 
                                type="text" 
                                placeholder="Nome" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        
                        <div className="input-group">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input 
                                id="sobrenome" 
                                type="text" 
                                placeholder="Sobrenome" 
                                value={surname} 
                                onChange={(e) => setSurname(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="input-group">
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
                        </div>
                    </div>

                    <div className="terms">
                        <input type="checkbox" id="termos" required />
                        <label htmlFor="termos">
                            Eu aceito os <a href="#" className="link">Termos e Condições</a>
                        </label>
                    </div>

                    <button type="submit" className="btn-primary">
                        <span className='cadastrar'>Cadastrar</span>
                    </button>

                    <p>Já tem uma conta? <a href="#" className="link">Entrar</a></p>
                </form>
            </div>

            <div className="image-container">
                <img src="https://cdn.shopify.com/s/files/1/0665/0308/2220/files/Peaky_Blinders_Blog_600x600.webp?v=1687809959" alt="Exemplo Grife" />
            </div>
        </div>
    );
};

export default Register;
