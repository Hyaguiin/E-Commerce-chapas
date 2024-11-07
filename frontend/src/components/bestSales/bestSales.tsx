import { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { getAllProducts } from '../../services/productService'; // Importe a função para buscar os produtos
import { Product } from '../../models/productModel';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const BestSales = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Função para buscar os produtos
  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data.slice(0, 4)); // Limita a 5 primeiros produtos
      setLoading(false); // Finaliza o carregamento
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Chama a função para buscar os produtos ao montar o componente
  }, []);

  return (
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

      {/* Lista dos 5 primeiros produtos */}
      <div className="col-span-2 mt-6">
        <h2 className="text-2xl font-bold mb-4">4 Primeiros Produtos</h2>

        {loading ? (
          <div>Carregando...</div> // Exibe um texto de carregamento enquanto os dados são recuperados
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden relative">
                <div className="p-4">
                  <img className="w-full h-48 object-cover" src={product.images[0]} alt={product.name} />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-6">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSales;
