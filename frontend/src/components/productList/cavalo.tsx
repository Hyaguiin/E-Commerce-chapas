import React from "react";
import ProductList from "./productList";
import { getAllProducts } from "../../services/productService";
import { Product } from "../../models/productModel";

const products = await getAllProducts();
const cavalos = products.data.filter((product: Product) => {
  return product.category === "cavalo";
});

export default function CavaloList() {
  return <ProductList products={cavalos}/>;
}
