import React, { useState } from 'react';
import '../../components/productList/productList.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Pagination from '../pagination/pagination';

export default function ProductList({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Total de produtos por página

  // Verifica se há produtos
  if (!products || products.length === 0) {
    return (
      <>
        <Header />
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produtos Recomendados</h2>

            {/* Mensagem de no products */}
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
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produtos Recomendados</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="group relative border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.name + " image"}
                    src={product.images[0]}
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
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Componente de Paginação */}
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
}
