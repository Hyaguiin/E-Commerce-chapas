import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/productService";
import { Product } from "../../models/productModel";

const ProductListAdmin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const items = await getAllProducts();
      setProducts(items.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id: string | undefined) => {
    setLoading(true);
    try {
      await deleteProduct(id);
      // Remove o produto do estado sem recarregar toda a lista
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Produtos</h2>

      {/* Spinner de carregamento */}
      {loading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="spinner-border animate-spin rounded-full border-t-4 border-yellow-500 w-16 h-16"></div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <div className="p-4">
              <img
                className="w-full h-48 object-cover"
                src={product.images[0]}
                alt=""
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 line-clamp-6">
                {product.description}
              </p>
            </div>
            <button
              onClick={() => handleDeleteItem(product._id)}
              type="button"
              className="absolute bottom-2 left-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListAdmin;
