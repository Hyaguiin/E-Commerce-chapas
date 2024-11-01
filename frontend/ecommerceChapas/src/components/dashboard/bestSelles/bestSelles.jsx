import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const BestSelles = () => {
  const salesData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Vendas Totais',
        data: [120, 190, 300, 250, 500, 420],
        backgroundColor: 'rgba(232, 202, 5, 0.6)', // Cor alterada aqui
      },
    ],
  };

  const productSalesData = {
    labels: ['Charuto', 'Whisky', 'Cavalo'],
    datasets: [
      {
        label: 'Mais Vendidos',
        data: [300, 150, 100], // Ajuste os valores conforme necessário
        backgroundColor: ['#000', '#808080', '#FFCE56'], // Cores para cada produto
      },
    ],
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-black text-white font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            Adicionar Produto
          </button>
          <button className="bg-black text-white font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            Adicionar Promoção
          </button>
          <button className="bg-black text-white font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            Adicionar Funcionário
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-semibold mb-2">Vendas Totais (Últimos 6 meses)</h2>
          <Bar data={salesData} />
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-semibold mb-2">Mais Vendidos</h2>
          <Pie data={productSalesData} />
        </div>
      </div>
    </div>
  );
};

export default BestSelles;
