import React from 'react';

const Employer = () => {
    const data = [
        { id: 1, name: 'Pedro', funcionalidade: 'QA', salario: '$15000' },
        { id: 2, name: 'Luisao', funcionalidade: 'Design', salario: '$2000' },
        { id: 3, name: 'Gambeiro', funcionalidade: 'Faxineiro', salario: "$1958" },
        { id: 4, name: 'Vidal', funcionalidade: 'Jogador', salario: "$8562" },
    ];

    return (
        <div className="overflow-x-auto p-6">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        {['ID', 'Nome', 'Funcionalidade', 'Salário'].map((header) => (
                            <th key={header} className="bg-black py-3 px-6 text-left transition-colors duration-200 hover:bg-yellow-500">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((employer) => (
                        <tr key={employer.id} className="hover:bg-gray-100 transition duration-200">
                            <td className="py-4 px-6 border-b border-gray-200">{employer.id}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{employer.name}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{employer.funcionalidade}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{employer.salario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employer;
