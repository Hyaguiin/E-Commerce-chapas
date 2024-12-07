import React from "react";
import ProductList from "./productList";
import { getAllProducts } from "../../services/productService";
import { Product } from "../../models/productModel";

const products = await getAllProducts();
const whiskies = (products) ? products.data.filter((product: Product) => {
  return product.category === "whisky";
}) : console.log("No products");

export default function WhiskyList() {
  return <ProductList products={whiskies} />;
}
