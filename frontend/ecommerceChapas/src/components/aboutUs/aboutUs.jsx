import React from 'react';
import { FaStar, FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';
import '../aboutUs/aboutUs.scss';

const AboutUs = () => {
    const images = [
        'https://blog.charutosonline.com/wp-content/uploads/2022/03/partagas-marca.jpg?w=500', // Charuto
        'https://emporiodarkdebebidas.com.br/wp-content/uploads/2022/03/IMG_1532-scaled.jpeg', // Whisky
        'https://img.freepik.com/fotos-premium/cavalo-mustang-preto-lindo-cavalo-equestre-simbolo-de-liberdade-gerar-ai_98402-89736.jpg', // Cavalo
    ];

    // Informações da equipe
    const teamMembers = [
        {
            name: 'Thomile Chelbo',
            role: 'Agiota',
            img: 'https://conteudo.imguol.com.br/c/parceiros/5b/2021/09/28/criador-de-peaky-blinders-queria-astro-de-os-mercenarios-como-thomas-shelby-1632868757942_v2_450x600.jpg',
        },
        {
            name: 'Artu Xelbe',
            role: 'Traficante de Besouro',
            img: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/01/31114943/Paul-Anderson-Arthur-Shelby-Peaky-blinders.jpg',
        },
        {
            name: 'Cleito Rasta',
            role: 'Dj do Baile Chernobyl',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNRxZBzlyJP-FnAatFVkuh-t9WiR31Snedw&s',
        },
        {
            name: 'Chicoins',
            role: 'Nem Tenteeei!!!',
            img: 'https://s2-g1.glbimg.com/6bGVrLKBYj18TqdzbOqXpHG0t0A=/0x0:755x578/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/D/C9TdGTRX6NXnaALACp0g/chico.jpg',
        },
    ];

    return (
        <div className="container mx-auto px-6 py-10">
            {/* Seção de Introdução */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-gray-800 mb-4" style={{ color: 'rgb(0,0,0)' }}>Sobre Nós</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                    Na nossa loja, oferecemos uma seleção refinada de charutos, whiskies e cavalos. Cada produto é escolhido com cuidado para proporcionar uma experiência única e sofisticada.
                </p>
            </div>

            {/* Seção de Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
                <div className=" card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FaLightbulb className="text-4xl mb-4 text-black" />
                    <h3 className="font-bold text-xl" style={{ color: 'rgb(232, 202, 5)' }}>Inovação</h3>
                    <p className="text-gray-600">Buscamos novas soluções e abordagens.</p>
                </div>
                <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FaUsers className="text-4xl mb-4 text-black" />
                    <h3 className="font-bold text-xl" style={{ color: 'rgb(232, 202, 5)' }}>Colaboração</h3>
                    <p className="text-gray-600">Trabalhamos juntos para alcançar nossos objetivos.</p>
                </div>
                <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FaCogs className="text-4xl mb-4 text-black" />
                    <h3 className="font-bold text-xl" style={{ color: 'rgb(232, 202, 5)' }}>Qualidade</h3>
                    <p className="text-gray-600">Comprometemo-nos com a excelência.</p>
                </div>
                <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FaStar className="text-4xl mb-4 text-black" />
                    <h3 className="font-bold text-xl" style={{ color: 'rgb(232, 202, 5)' }}>Transparência</h3>
                    <p className="text-gray-600">Valorizamos a honestidade em nossas relações.</p>
                </div>
            </div>

            {/* Seção de Estilo de Vida */}
            <h2 className="text-3xl font-semibold text-center mb-6" style={{ color: 'rgb(0, 0, 0)' }}>
                Nosso Estilo de Vida
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-10 mb-10">
                <div className="flex-1 max-w-md mb-4">
                    <h3 className="text-xl font-bold mb-2">Charutos</h3>
                    <p className="text-gray-600 mb-4">
                        Nossos charutos são selecionados com rigor, oferecendo uma variedade de sabores que encanta até os mais exigentes.
                    </p>
                    <a href="/productList">
                        <img src={images[0]} alt="Charuto" className="w-full h-64 object-cover rounded shadow-lg transition-transform duration-300 hover:scale-105" />
                    </a>
                </div>
                <div className="flex-1 max-w-lg mb-4">
                    <h3 className="text-xl font-bold mb-2">Whisky</h3>
                    <p className="text-gray-600 mb-4">
                        Apresentamos uma coleção de whiskies de alta qualidade, cada um com uma história única, perfeita para momentos especiais.
                    </p>
                    <a href="/productList">
                        <img src={images[1]} alt="Whisky" className="w-full h-80 object-cover rounded shadow-lg transition-transform duration-300 hover:scale-105" />
                    </a>
                </div>
                <div className="flex-1 max-w-md mb-4">
                    <h3 className="text-xl font-bold mb-2">Cavalos</h3>
                    <p className="text-gray-600 mb-4">
                        Acreditamos na beleza e na força dos cavalos. Trabalhamos com criadores renomados para oferecer os melhores animais.
                    </p>
                    <a href="/productList">
                        <img src={images[2]} alt="Cavalo" className="w-full h-64 object-cover rounded shadow-lg transition-transform duration-300 hover:scale-105" />
                    </a>
                </div>
            </div>

            {/* Seção da Equipe */}
            <h2 className="text-3xl font-semibold text-center mb-6" style={{ color: 'rgb(0,0,0)' }}>
                Nossa Equipe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            style={{ objectFit: 'cover' }}
                        />
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>

            {/* Botão de Ação */}
            <div className="mt-10 text-center">
                <button className="bg-black text-white font-semibold py-2 px-6 rounded">
                    <span className='Contato hover:text-[rgb(232,202,5)] transition duration-300'> Entre em Contato </span>
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
