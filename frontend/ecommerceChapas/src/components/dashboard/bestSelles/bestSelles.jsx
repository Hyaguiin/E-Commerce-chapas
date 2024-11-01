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
    labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
    datasets: [
      {
        label: 'Mais Vendidos',
        data: [300, 50, 100, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Nova Ação</button>
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
