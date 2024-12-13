import React from "react";
import { OrderItem } from "../../models/orderItem";

interface CartItemProps {
  product: OrderItem;
  handleQuantityChange: (product_id: string, quantity: number) => Promise<void>;
  handleRemoveItem: (id: string) => Promise<void>;
}

const CartItem: React.FC<CartItemProps> = ({ product, handleQuantityChange, handleRemoveItem }) => {
  return (
    <li className="flex py-6">
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <p>{product.product_name}</p>
            </h3>
            <p className="ml-4">R${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between text-sm space-x-2">
          <div className="flex items-center space-x-2">
            <label htmlFor={`quantity-${product.product_id}`} className="sr-only">
              Quantidade
            </label>
            <div className="flex items-center border rounded-md">
              <button
                type="button"
                onClick={() => handleQuantityChange(product.product_id, -1)}
                className={`px-2 py-1 ${product.quantity === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-900"}`}
                disabled={product.quantity === 1}
              >
                -
              </button>
              <span className="px-4">{product.quantity}</span>
              <button
                type="button"
                onClick={() => handleQuantityChange(product.product_id, 1)}
                className="px-2 py-1 text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                +
              </button>
            </div>
            <p className="text-gray-500">Quantidade</p>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveItem(product.product_id)}
            className="bg-black text-white font-medium text-sm rounded-md px-6 py-3 hover:text-[#E8CA05] transition duration-300"
          >
            Remover
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;