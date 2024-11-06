import { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { addProduct } from '../../services/productService';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const BestSales = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    color: '', // For Cavalo (Horse)
    images: [], // Image URLs as an array
    amount: '', // New field for quantity
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

  const handleProductSelect = (category) => {
    setSelectedProduct(category);
    setFormData({
      name: '',
      price: '',
      description: '',
      category: category,
      color: '',
      images: [],
      amount: '', // Reset the quantity field
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageSrcAdd = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const newUrl = e.target.value.trim();
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, newUrl],
      }));
      e.target.value = '';
    }
  };

  const handleImageRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(formData);
    setSelectedProduct(null);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setFormData({
      name: '',
      price: '',
      description: '',
      category: '',
      color: '',
      images: [],
      amount: '', // Reset the quantity field
    });
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <button
            onClick={() => handleProductSelect(null)}
            className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none"
          >
            Adicionar Produto
          </button>
        </div>
      </header>

      {selectedProduct === null && (
        <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
          <h2 className="font-semibold mb-2 text-lg md:text-xl">Selecione o Tipo de Produto</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => handleProductSelect('cavalo')}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Cavalo
            </button>
            <button
              onClick={() => handleProductSelect('whisky')}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Whisky
            </button>
            <button
              onClick={() => handleProductSelect('charuto')}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Charuto
            </button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
          <h2 className="font-semibold mb-2 text-lg md:text-xl">Adicionar {selectedProduct}</h2>
          <form onSubmit={handleSubmit}>
            {/* Conditionally render 'Nome' or 'Raça' field based on product selection */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {selectedProduct === 'cavalo' ? 'Raça' : 'Nome'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder={selectedProduct === 'cavalo' ? 'Raça do Cavalo' : `Nome do ${selectedProduct}`}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder={`Preço do ${selectedProduct}`}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder={`Descrição do ${selectedProduct}`}
                rows="3"
                required
              />
            </div>

            {/* Show 'Color' field only for Cavalo (Horse) */}
            {selectedProduct === 'cavalo' && (
              <div className="mb-4">
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">Cor</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Cor do Cavalo"
                  required
                />
              </div>
            )}

            {/* Add the amount (quantity) field */}
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Quantidade</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Quantidade disponível"
                required
              />
            </div>

            {/* Image URLs input field */}
            <div className="mb-4">
              <label htmlFor="imageSrc" className="block text-sm font-medium text-gray-700">Imagem URLs</label>
              <input
                type="text"
                id="imageSrc"
                name="imageSrc"
                onKeyDown={handleImageSrcAdd}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder={`Pressione Enter para adicionar URLs para ${selectedProduct}`}
              />
              <div className="mt-2">
                {formData.images.map((url, index) => (
                  <div key={index} className="flex items-center space-x-2 mt-1">
                    <span>{url}</span>
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="text-red-500"
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
              >
                Cadastrar {selectedProduct}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="w-full bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
              >
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

export default BestSales;
