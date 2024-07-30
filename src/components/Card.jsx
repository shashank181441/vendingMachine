import { useState } from "react";
import PillButton from "./PillButton";

const myProducts = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: "beverage"
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    category: "beverage"
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    category: "snacks"
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    category: "snacks"
  },
  // More products...
];

export default function Card() {
  const [products, setProducts] = useState(myProducts);
  const [category, setCategory] = useState('');
  console.log(category)

  // Filter products based on selected category
  const filteredProducts = category === '' ? products : products.filter(product => product.category === category);

  return (
    <div className="bg-white">
      <div className='mt-4'>
        <header>
          <PillButton content="All" active={category === ""} onClick={() => setCategory("")} />
          <PillButton content="Beverage" active={category === "beverage"} onClick={() => setCategory("beverage")} />
          <PillButton content="Snacks" active={category === "snacks"} onClick={() => setCategory("snacks")} />
        </header>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <a href={product.href} className="block">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <div className="w-full mt-2">
                <a href="#cart" className="flex items-center justify-center w-full">
                  <PillButton content="Add to Cart" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
