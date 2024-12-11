import React, { useState } from "react";
import "../../components/productList/productList.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import Pagination from "../pagination/pagination";
import { addItemToCart, fetchCart } from "../../services/cartService"; // Certifique-se de que o caminho está correto
import { useCart } from "../../components/cart/CartContext"; // Importe o hook de contexto

interface Product {
  _id: string;
  name: string;
  color: string;
  price: number;
  images: string[]; // Deve ser um array de strings contendo as URLs das imagens
  href: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Total de produtos por página
  const { updateCartItems } = useCart(); // Usando o contexto

  // Verifica se há produtos
  if (!products || products.length === 0) {
    return (
      <>
        <Header />
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Produtos Recomendados
            </h2>
            <div className="mt-6 text-center text-lg font-medium text-gray-700">
              Não há produtos disponíveis no momento.
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Obtenha os produtos a serem exibidos na página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddToCart = async (product: Product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      alert("Usuário não autenticado.");
      return;
    }

    const productData = {
      product_id: product._id,
      product_name: product.name,
      quantity: 1,
      price: product.price,
    };

    try {
      await addItemToCart(userId, productData);
      const updatedCart = await fetchCart(userId);

      // Atualize os itens do carrinho diretamente no contexto
      updateCartItems(updatedCart.data.items);
      alert("Produto adicionado ao carrinho!");
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
      alert("Houve um erro ao adicionar o produto ao carrinho.");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Produtos Recomendados
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="group relative border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  {/* Verificar se a URL da imagem está correta */}
                  <img
                    alt={product.name + " image"}
                    src={product.images[0] || "/path/to/default-image.jpg"} // Coloque uma imagem padrão se não houver imagem
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    R${product.price}
                  </p>
                </div>
                {/* Botão Adicionar ao Carrinho */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full text-white font-medium text-sm rounded-md px-6 py-3 transition duration-300 ease-in-out bg-[#E8CA05] border border-[#D6B205] hover:bg-black hover:text-yellow-400 relative z-10"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
