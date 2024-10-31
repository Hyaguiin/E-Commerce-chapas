import React from 'react';
import ProductList from './productList';

const charutos = [
    {
      id: 1,
      name: 'Cohiba Behike',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Cohiba_Behike.jpg?v=1617763944',
      imageAlt: 'Cohiba Behike',
      price: '$40',
      color: 'Brown',
    },
    {
      id: 2,
      name: 'Romeo y Julieta',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Romeo_y_Julieta.jpg?v=1617763944',
      imageAlt: 'Romeo y Julieta',
      price: '$15',
      color: 'Brown',
    },
    {
      id: 3,
      name: 'Partagas Serie D No. 4',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Partagas_Serie_D.jpg?v=1617763944',
      imageAlt: 'Partagas Serie D No. 4',
      price: '$20',
      color: 'Brown',
    },
    {
      id: 4,
      name: 'Arturo Fuente Opus X',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0260/7631/9891/products/Arturo_Fuente_Opus_X.jpg?v=1617763944',
      imageAlt: 'Arturo Fuente Opus X',
      price: '$30',
      color: 'Brown',
    },
  ];
  

export default function CharutoList() {
  return <ProductList products={charutos} title="Charutos" />;
}
