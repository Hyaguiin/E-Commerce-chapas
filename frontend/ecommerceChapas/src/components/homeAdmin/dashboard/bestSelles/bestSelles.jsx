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

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <div className="flex flex-wrap space-x-2">
          <button className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none">
            Adicionar Produto
          </button>
          <button className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none">
            Adicionar Promoção
          </button>
          <button className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:text-yellow-500 transition duration-300 focus:outline-none">
            Adicionar Funcionário
          </button>
        </div>
      </header>

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
