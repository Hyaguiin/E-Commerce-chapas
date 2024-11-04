import React from 'react';

const ProductAdd = () => {
    const items = [
        { id: 1, title: 'Produto 1', description: 'Descrição do produto 1' },
        { id: 2, title: 'Produto 2', description: 'Descrição do produto 2' },
        { id: 3, title: 'Produto 3', description: 'Descrição do produto 3' },
        { id: 4, title: 'Produto 4', description: 'Descrição do produto 4' },
        { id: 5, title: 'Produto 5', description: 'Descrição do produto 5' },
        { id: 6, title: 'Produto 6', description: 'Descrição do produto 6' },
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Lista de Produtos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>z
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAdd;
