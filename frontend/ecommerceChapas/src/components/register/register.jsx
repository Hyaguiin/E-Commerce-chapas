import React, { useState } from 'react';
import '../../components/register/register.scss';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [age, setAge] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateName = (name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
    const validateCpf = (cpf) => /^\d{11}$/.test(cpf); // 11 dígitos
    const validatePassword = (password) => password.length >= 8;

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setEmailError('Formato de e-mail inválido');
        } else {
            setEmailError('');
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (!validateName(value)) {
            setNameError('Nome deve conter apenas letras');
        } else {
            setNameError('');
        }
    };

    const handleSurnameChange = (e) => {
        const value = e.target.value;
        setSurname(value);
        if (!validateName(value)) {
            setSurnameError('Sobrenome deve conter apenas letras');
        } else {
            setSurnameError('');
        }
    };

    const handleCpfChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        setCpf(value);
        if (!validateCpf(value)) {
            setCpfError('CPF deve ter exatamente 11 dígitos');
        } else {
            setCpfError('');
        }
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setAge(value);
        if (value && value < 18) {
            setAgeError('Você deve ter 18 anos ou mais');
        } else {
            setAgeError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação dos campos
        if (!validateEmail(email)) {
            setEmailError('Por favor, insira um e-mail válido.');
            return;
        }

        if (!validateName(name)) {
            setNameError('Nome deve conter apenas letras');
            return;
        }

        if (!validateName(surname)) {
            setSurnameError('Sobrenome deve conter apenas letras');
            return;
        }

        if (!validateCpf(cpf)) {
            setCpfError('CPF deve ter exatamente 11 dígitos');
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError('A senha deve ter pelo menos 8 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError('As senhas não coincidem');
            return;
        }
        setPasswordError('');

        if (age < 18) {
            setAgeError('Você deve ter 18 anos ou mais');
            return;
        }
        setAgeError('');

        // Se tudo estiver válido, imprima os dados
        console.log('Dados do registro:', { name, surname, email, cpf, age, password, confirmPassword });
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
                <p>Estilo e Elegância a Cada Passo</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group-nome">
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="nome" 
                                type="text" 
                                placeholder="Nome" 
                                value={name} 
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
                            {surnameError && <span className="error-message">{surnameError}</span>}
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
                        <input 
                            id="cpf" 
                            type="text" 
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
                            {passwordError && <span className="error-message">{passwordError}</span>}
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

                    <p>Já tem uma conta? <a href="/login" className="link">Entrar</a></p>
                </form>
            </div>

            <div className="image-container">
                <img src="https://cdn.shopify.com/s/files/1/0665/0308/2220/files/Peaky_Blinders_Blog_600x600.webp?v=1687809959" alt="Exemplo Grife" />
            </div>
        </div>
    );
};

export default Register;