// src/components/register/register.jsx
import React, { useState } from 'react';
import '../../components/register/register.scss'

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione sua lógica de envio aqui, como uma requisição para um API.
        console.log('Dados do registro:', { name, surname, email, password, confirmPassword, role });
    };

    return (
        <div className="cadastro-container">
            <div className="form-container">
                <div className="logo">
                    <div className="container-name">
                        <img 
                            className="logoFacisa" 
                            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Unifacisabasquete.png" 
                            alt="Logo Facisa" 
                        />
                        <h1>Gestão <span className="cor">Nupex</span></h1>
                    </div>
                </div>
                <h2>Bem-vindo ao Nupex!</h2>
                <p>
                    Transforme a gestão dos seus projetos educacionais com o Nupex, a
                    plataforma completa para coordenadores e professores.
                </p>
  
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
                            />
                        </div>
                    </div>
  
                    <div className="radio-group">
                        <label>
                            <input 
                                type="radio" 
                                name="cargo" 
                                value="coordenador" 
                                onChange={(e) => setRole(e.target.value)} 
                            />
                            Coordenador
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="cargo" 
                                value="professor" 
                                onChange={(e) => setRole(e.target.value)} 
                            />
                            Professor
                        </label>
                    </div>
  
                    <div className="input-group">
                        <label htmlFor="email">Seu Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Email@mail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
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
                            />
                        </div>
                    </div>
  
                    <div className="terms">
                        <input type="checkbox" id="termos" required />
                        <label htmlFor="termos">
                            Eu aceito os <a href="#" className="link">Termos e Condições</a>
                        </label>
                    </div>
  
                    <button type="submit" className="btn-primary">Cadastrar</button>
  
                    <p>Já tem uma conta? <a href="#" className="link">Entrar</a></p>
                </form>
            </div>
  
            <div className="image-container">
                <img src="../../../assets/img/nupex.PNG" alt="Exemplo Nupex" />
            </div>
        </div>
    );
};

export default Register;
