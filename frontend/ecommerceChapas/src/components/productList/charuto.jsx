
import React from 'react';
import ProductList from './productList';
import { getAllProducts } from '../../services/productService';

const products = await getAllProducts();
const charutos = products.data.filter((product) => {
  return product.category === "charuto";
});

export default function CharutoList() {
  return <ProductList products={charutos} title="Charutos" />;
}