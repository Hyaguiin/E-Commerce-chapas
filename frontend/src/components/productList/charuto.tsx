
import React from 'react';
import ProductList from './productList';
import { getAllProducts } from '../../services/productService';
import { Product } from '../../models/productModel';

const products = await getAllProducts();
const charutos = (products) ? products.data.filter((product: Product) => {
  return product.category === "charuto";
}) : console.log("No products");

export default function CharutoList() {
  return <ProductList products={charutos}/>;
}