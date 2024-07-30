import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

function CartItem({ product: myProduct }) {
  const [product, setProduct] = useState(myProduct);
  const [newCount, setNewCount] = useState(myProduct.quantity); // Initialize with the correct quantity

  const handleIncrease = () => {
    setNewCount((prevCount) => prevCount + 1);
    setProduct((prevProduct) => ({ ...prevProduct, quantity: newCount + 1 }));
  };

  const handleDecrease = () => {
    if (newCount > 1) { // Prevent negative values
      setNewCount((prevCount) => prevCount - 1);
      setProduct((prevProduct) => ({ ...prevProduct, quantity: newCount - 1 }));
    }
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className="ml-4">${product.price.toFixed(2)*newCount}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {newCount}</p>
          
          <div className="flex pl-8">
            <ArrowUp
              onClick={handleIncrease}
              className="cursor-pointer"
            />
            <ArrowDown
              onClick={handleDecrease}
              className={`${newCount !== 1 ?"cursor-pointer":""}`}
              disabled={newCount===1}
            />
          </div>
          <div className="flex">
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
