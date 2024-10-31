import React from 'react';
import ProductList from './productList';

const cavalos = [
    {
      id: 1,
      name: 'Mustang',
      href: '#',
      imageSrc: 'https://cdn.pixabay.com/photo/2018/09/16/20/03/mustang-3587166_1280.jpg',
      imageAlt: 'Mustang Horse',
      price: '$5,000',
      color: 'Brown',
    },
    {
      id: 2,
      name: 'Arabian',
      href: '#',
      imageSrc: 'https://cdn.pixabay.com/photo/2020/05/01/09/09/arabian-horse-4118620_1280.jpg',
      imageAlt: 'Arabian Horse',
      price: '$7,000',
      color: 'Gray',
    },
    {
      id: 3,
      name: 'Thoroughbred',
      href: '#',
      imageSrc: 'https://cdn.pixabay.com/photo/2016/02/18/21/33/horse-1203135_1280.jpg',
      imageAlt: 'Thoroughbred Horse',
      price: '$10,000',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Appaloosa',
      href: '#',
      imageSrc: 'https://cdn.pixabay.com/photo/2015/01/13/17/43/appaloosa-595056_1280.jpg',
      imageAlt: 'Appaloosa Horse',
      price: '$4,000',
      color: 'Spotted',
    },
  ];
  

export default function CavaloList() {
  return <ProductList products={cavalos} title="Cavalos" />;
}
