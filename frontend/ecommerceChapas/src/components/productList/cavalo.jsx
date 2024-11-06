import React from "react";
import ProductList from "./productList";
import { getAllProducts } from "../../services/productService";

const products = await getAllProducts();
const cavalos = products.data.filter((product) => {
  return product.category === "cavalo";
});

export default function CavaloList() {
  return <ProductList products={cavalos} title="Cavalos" />;
}
