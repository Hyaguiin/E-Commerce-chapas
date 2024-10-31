import React from 'react';
import ProductList from './productList';
//https://bebidasemcasa.com.br/produto-categoria/whisky/whisky-importado/
const whiskies = [
    {
      id: 1,
      name: 'Macallan Sherry Oak 18 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-JACK-1L-1.png',
      imageAlt: 'Macallan Sherry Oak 18 Years',
      price: '$350',
      color: 'Amber',
    },
    {
      id: 2,
      name: 'Yamazaki 12 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/whisky-johnnie-walker-black-label-12-anos.png',
      imageAlt: 'Yamazaki 12 Years',
      price: '$150',
      color: 'Gold',
    },
    {
      id: 3,
      name: 'Lagavulin 16 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-buchanans-e1617931494719.png',
      imageAlt: 'Lagavulin 16 Years',
      price: '$100',
      color: 'Amber',
    },
    {
      id: 4,
      name: 'Glenfiddich 21 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/whisky-johnnie-walker-gold-label-750ml.jpg',
      imageAlt: 'Glenfiddich 21 Years',
      price: '$180',
      color: 'Amber',
    },
    {
      id: 5,
      name: 'Macallan Sherry Oak 18 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-BALLA.jpg',
      imageAlt: 'Macallan Sherry Oak 18 Years',
      price: '$350',
      color: 'Amber',
    },
    {
      id: 6,
      name: 'Yamazaki 12 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/white-horse-08-anos.png',
      imageAlt: 'Yamazaki 12 Years',
      price: '$150',
      color: 'Gold',
    },
    {
      id: 7,
      name: 'Lagavulin 16 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-balla-12-1l-500x500.jpg',
      imageAlt: 'Lagavulin 16 Years',
      price: '$100',
      color: 'Amber',
    },
    {
      id: 8,
      name: 'Glenfiddich 21 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2021/05/01-CHIVAS-13-500x500.jpg',
      imageAlt: 'Glenfiddich 21 Years',
      price: '$180',
      color: 'Amber',
    },
    {
      id: 9,
      name: 'Macallan Sherry Oak 18 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2021/04/01-black-label.jpg',
      imageAlt: 'Macallan Sherry Oak 18 Years',
      price: '$350',
      color: 'Amber',
    },
    {
      id: 10,
      name: 'Yamazaki 12 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-double.jpg',
      imageAlt: 'Yamazaki 12 Years',
      price: '$150',
      color: 'Gold',
    },
    {
      id: 11,
      name: 'Lagavulin 16 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-old-parr.png',
      imageAlt: 'Lagavulin 16 Years',
      price: '$100',
      color: 'Amber',
    },
    {
      id: 12,
      name: 'Glenfiddich 21 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-SINGLE-BARREL.jpg',
      imageAlt: 'Glenfiddich 21 Years',
      price: '$180',
      color: 'Amber',
    },
    {
      id: 13,
      name: 'Macallan Sherry Oak 18 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-jack-fire.jpg',
      imageAlt: 'Macallan Sherry Oak 18 Years',
      price: '$350',
      color: 'Amber',
    },
    {
      id: 14,
      name: 'Yamazaki 12 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2021/04/01-royal.jpg',
      imageAlt: 'Yamazaki 12 Years',
      price: '$150',
      color: 'Gold',
    },
    {
      id: 15,
      name: 'Lagavulin 16 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2019/04/whisky-chivas-regal-15-anos.png',
      imageAlt: 'Lagavulin 16 Years',
      price: '$100',
      color: 'Amber',
    },
    {
      id: 16,
      name: 'Glenfiddich 21 Years',
      href: '#',
      imageSrc: 'https://bebidasemcasa.com.br/wp-content/uploads/2021/04/01-black-label-1.jpg',
      imageAlt: 'Glenfiddich 21 Years',
      price: '$180',
      color: 'Amber',
    }
  ];
  

export default function WhiskyList() {
  return <ProductList products={whiskies} title="Whiskies" />;
}
