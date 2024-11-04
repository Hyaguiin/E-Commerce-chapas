import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const BestSelles = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    color: '',
    breed: '',
    imageSrc: '',
  });

  const salesData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Vendas Totais',
        data: [120, 190, 300, 250, 500, 420],
        backgroundColor: 'rgba(232, 202, 5, 0.6)',
      },
    ],
  };

  const productSalesData = {
    labels: ['Charuto', 'Whisky', 'Cavalo'],
    datasets: [
      {
        label: 'Mais Vendidos',
        data: [300, 150, 100],
        backgroundColor: ['#000', '#808080', '#FFCE56'],
      },
    ],
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFormData({ name: '', price: '', description: '', color: '', breed: '', imageSrc: '' }); // Reset form data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do produto:', formData);
    setSelectedProduct(null);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setFormData({ name: '', price: '', description: '', color: '', breed: '', imageSrc: '' }); // Reset form data
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <div className="flex flex-wrap space-x-2">
          <button onClick={() => handleProductSelect('Cavalo')} className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none">
            Adicionar Cavalo
          </button>
          <button onClick={() => handleProductSelect('Whisky')} className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none">
            Adicionar Whisky
          </button>
          <button onClick={() => handleProductSelect('Charuto')} className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none">
            Adicionar Charuto
          </button>
        </div>
      </header>

      {selectedProduct && (
        <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
          <h2 className="font-semibold mb-2 text-lg md:text-xl">Adicionar {selectedProduct}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder={`Nome do ${selectedProduct}`} required />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
              <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder={`Preço do ${selectedProduct}`} required />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder={`Descrição do ${selectedProduct}`} rows="3" required />
            </div>

            <div className="mb-4">
              <label htmlFor="color" className="block text-sm font-medium text-gray-700">Cor</label>
              <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder={`Cor do ${selectedProduct}`} required />
            </div>

            {/* Exibir campo "raça" apenas se o produto selecionado for "Cavalo" */}
            {selectedProduct === 'Cavalo' && (
              <div className="mb-4">
                <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Raça</label>
                <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Raça do Cavalo" required />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="imageSrc" className="block text-sm font-medium text-gray-700">Imagem URL</label>
              <input type="text" id="imageSrc" name="imageSrc" value={formData.imageSrc} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder={`URL da imagem do ${selectedProduct}`} required />
            </div>

            <div className="flex space-x-2">
              <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300">
                Cadastrar {selectedProduct}
              </button>
              <button type="button" onClick={handleCancel} className="w-full bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold mb-2 text-lg md:text-xl">Vendas Totais (Últimos 6 meses)</h2>
          <div className="h-64">
            <Bar data={salesData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold mb-2 text-lg md:text-xl">Mais Vendidos</h2>
          <div className="h-64">
            <Pie data={productSalesData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelles;
