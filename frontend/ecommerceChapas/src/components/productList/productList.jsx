/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import '../../components/productList/productList.scss';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic White Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Classic White Tee.",
    price: '$30',
    color: 'White',
  },
  {
    id: 3,
    name: 'Navy Blue Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Navy Blue Tee.",
    price: '$32',
    color: 'Navy',
  },
  {
    id: 4,
    name: 'Green Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Green Tee.",
    price: '$33',
    color: 'Green',
  },
  {
    id: 5,
    name: 'Red Graphic Tee',
    href: '#',
    imageSrc: 'https://i0.wp.com/loja.otakubfx.com.br/wp-content/uploads/2019/04/camiseta-berserk-guts-11.jpg?fit=1000%2C1000&ssl=1',
    imageAlt: "Front of men's Red Graphic Tee.",
    price: '$40',
    color: 'Red',
  },
  {
    id: 6,
    name: 'Yellow Striped Tee',
    href: '#',
    imageSrc: 'https://img.elo7.com.br/product/zoom/21AA599/camisa-bolsonaro-presidente-03-camisa-bolsonaro.jpg',
    imageAlt: "Front of men's Yellow Striped Tee.",
    price: '$38',
    color: 'Yellow',
  },
  {
    id: 7,
    name: 'Gray Long Sleeve Tee',
    href: '#',
    imageSrc: 'https://www.timeurban.com.br/media/catalog/product/cache/51a80c9da94f85ac42b65ba251e9fd91/s/o/sobretudo_masculino_preto_longo_fashion_benjamin_1.jpg',
    imageAlt: "Front of men's Gray Long Sleeve Tee.",
    price: '$45',
    color: 'Gray',
  },
  {
    id: 8,
    name: 'Pink Short Sleeve Tee',
    href: '#',
    imageSrc: 'https://acdn.mitiendanube.com/stores/001/468/838/products/1080-x-1350-2023-05-02t162148-6851-207b2a50d8c75bbae316830555501390-640-0.png',
    imageAlt: "Front of men's Pink Short Sleeve Tee.",
    price: '$36',
    color: 'Pink',
  },
  {
    id: 9,
    name: 'Brown Vintage Tee',
    href: '#',
    imageSrc: 'https://apollogearclub.com.br/cdn/shop/files/camisa-oversized-baki-v2-pp-668c2e0976742-large.jpg?v=1722355383',
    imageAlt: "Front of men's Brown Vintage Tee.",
    price: '$34',
    color: 'Brown',
  },
  {
    id: 10,
    name: 'Zoro OnePiece T-Shirt',
    href: '#',
    imageSrc: 'https://img.ltwebstatic.com/images3_spmp/2024/02/14/ca/1707842572b90e0fcaaefd0eb45a2e155a2a2d86ed_thumbnail_720x.jpg',
    imageAlt: "Three Sword hand man.",
    price: '$24',
    color: 'green',
  },
  {
    id: 11,
    name: 'Mia Khalifa Legends',
    href: '#',
    imageSrc: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbm3-lmx7g8pjzvm8e8',
    imageAlt: "I don't know she who's.",
    price: '$58',
    color: 'Brown',
  },
  {
    id: 12,
    name: 'Yujiro T-Shirt',
    href: '#',
    imageSrc: 'https://apollogearclub.com.br/cdn/shop/files/camisa-oversized-baki-v2-pp-668c2e0976742-large.jpg?v=1722355383',
    imageAlt: "The strongst Man in the World.",
    price: '$50',
    color: 'Brown',
  }
]
  
  export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  
