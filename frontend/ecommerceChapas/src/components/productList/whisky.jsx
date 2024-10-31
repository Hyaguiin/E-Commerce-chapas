import React from 'react';
import ProductList from './productList';

const whiskies = [
    {
      id: 1,
      name: 'Macallan Sherry Oak 18 Years',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Macallan_18.jpg?v=1617763944',
      imageAlt: 'Macallan Sherry Oak 18 Years',
      price: '$350',
      color: 'Amber',
    },
    {
      id: 2,
      name: 'Yamazaki 12 Years',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Yamazaki_12.jpg?v=1617763944',
      imageAlt: 'Yamazaki 12 Years',
      price: '$150',
      color: 'Gold',
    },
    {
      id: 3,
      name: 'Lagavulin 16 Years',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Lagavulin_16.jpg?v=1617763944',
      imageAlt: 'Lagavulin 16 Years',
      price: '$100',
      color: 'Amber',
    },
    {
      id: 4,
      name: 'Glenfiddich 21 Years',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Glenfiddich_21.jpg?v=1617763944',
      imageAlt: 'Glenfiddich 21 Years',
      price: '$180',
      color: 'Amber',
    },
  ];
  

export default function WhiskyList() {
  return <ProductList products={whiskies} title="Whiskies" />;
}
