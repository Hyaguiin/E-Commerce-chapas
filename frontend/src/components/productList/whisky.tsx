import React from "react";
import ProductList from "./productList";
import { getAllProducts } from "../../services/productService";
import { Product } from "../../models/productModel";

const products = await getAllProducts();
const whiskies = products.data.filter((product: Product) => {
  return product.category === "whisky";
});

export default function WhiskyList() {
  return <ProductList products={whiskies} />;
}
