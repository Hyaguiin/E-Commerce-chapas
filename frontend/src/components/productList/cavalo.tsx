import React from "react";
import ProductList from "./productList";
import { getAllProducts } from "../../services/productService";
import { Product } from "../../models/productModel";

const products = await getAllProducts();
const cavalos = (products) ? products.data.filter((product: Product) => {
  return product.category === "cavalo";
}) : console.log("No products");

export default function CavaloList() {
  return <ProductList products={cavalos}/>;
}
