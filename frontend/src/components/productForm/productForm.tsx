import { useState, useEffect } from "react";
import { addProduct } from "../../services/productService";
import { Product } from "../../models/productModel";

const ProductForm = ({
  selectedProduct: selectedCategory,
  onCancel,
  onProductAdded,
}: ProductFormProps) => {
  const [formData, setFormData] = useState<Product>({
    name: "",
    price: 0,
    description: "",
    category: "",
    color: "",
    images: [],
    amount: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset form data when selectedProduct changes
    setFormData({
      name: "",
      price: 0,
      description: "",
      category: selectedCategory || "",
      color: "",
      images: [],
      amount: 0,
    });
  }, [selectedCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageSrcAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && (e.target as HTMLInputElement).value.trim()) {
      e.preventDefault();
      const newUrl = (e.target as HTMLInputElement).value.trim();

      // Atualizando corretamente o estado
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, newUrl], // Adicionando uma string à lista de imagens
      }));

      (e.target as HTMLInputElement).value = ""; // Limpando o campo de entrada
    }
  };

  const handleImageRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    await addProduct(formData);
    setFormData({
      name: "",
      price: 0,
      description: "",
      category: selectedCategory || "",
      color: "",
      images: [],
      amount: 0,
    });
    onProductAdded();
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
      <h2 className="font-semibold mb-2 text-lg md:text-xl">
        Adicionar Produto
      </h2>
      {/* Spinner de carregamento */}
      {loading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="spinner-border animate-spin rounded-full border-t-4 border-yellow-500 w-16 h-16"></div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Nome / Raça */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            {selectedCategory === "cavalo" ? "Raça" : "Nome"}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder={
              selectedCategory === "cavalo"
                ? "Raça do Cavalo"
                : `Nome do ${selectedCategory}`
            }
            required
          />
        </div>

        {/* Preço */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Preço
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder={`Preço do ${selectedCategory}`}
            required
          />
        </div>

        {/* Descrição */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description ?? ""} // Garantindo que nunca será null ou undefined
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder={`Descrição do ${selectedCategory}`}
            rows={3}
            required
          />
        </div>

        {/* Cor - Exibido apenas para 'Cavalo' */}
        {selectedCategory === "cavalo" && (
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700"
            >
              Cor
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color ?? ""}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Cor do Cavalo"
              required
            />
          </div>
        )}

        {/* Quantidade */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Quantidade
          </label>
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

        {/* Imagens */}
        <div className="mb-4">
          <label
            htmlFor="imageSrc"
            className="block text-sm font-medium text-gray-700"
          >
            Imagem URLs
          </label>
          <input
            type="text"
            id="imageSrc"
            name="imageSrc"
            onKeyDown={handleImageSrcAdd}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder={`Pressione Enter para adicionar URLs para ${selectedCategory}`}
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

        {/* Botões */}
        <div className="flex space-x-2">
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
          >
            Cadastrar Produto
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full bg-black text-white p-2 rounded-md hover:text-yellow-500 transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
