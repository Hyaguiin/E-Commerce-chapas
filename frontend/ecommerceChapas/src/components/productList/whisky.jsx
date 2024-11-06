import React from "react";
import ProductList from "./productList";
import { getAllProducts } from "../../services/productService";

const products = await getAllProducts();
const whiskies = products.data.filter((product) => {
  return product.category === "whisky";
});

export default function WhiskyList() {
  return <ProductList products={whiskies} title="Whiskies" />;
}
