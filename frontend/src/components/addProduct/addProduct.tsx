import { useState } from 'react';
import ProductForm from '../productForm/productForm';

const AddProductComponent = () => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);

  const handleAddProductClick = () => {
    setIsAddingProduct(true);
  };

  const handleCategorySelection = (category: ProductCategory) => {
    setSelectedProduct(category); // Atualizando a categoria selecionada
  };

  return (
    <div className="mb-4">
      {!isAddingProduct ? (
        <button
          onClick={handleAddProductClick}
          className="bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
        >
          Adicionar Produto
        </button>
      ) : !selectedProduct ? (
        <div className="mb-4">
          <p className="text-lg">Selecione a Categoria do Produto</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleCategorySelection("cavalo")}
              className="bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
            >
              Cavalo
            </button>
            <button
              onClick={() => handleCategorySelection("whisky")}
              className="bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
            >
              Whisky
            </button>
            <button
              onClick={() => handleCategorySelection("charuto")}
              className="bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
            >
              Charuto
            </button>
          </div>
        </div>
      ) : (
        <ProductForm
          selectedProduct={selectedProduct} // Agora a categoria é passada diretamente aqui
          onCancel={() => setSelectedProduct(null)}
          onProductAdded={() => setSelectedProduct(null)} // Após adicionar, reseta a categoria
        />
      )}
    </div>
  );
};

export default AddProductComponent;
