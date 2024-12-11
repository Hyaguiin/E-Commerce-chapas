import { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../cart/CartContext';
import { fetchCart, updateItemInCart, removeItemFromCart } from '../../services/cartService';  
import { OrderItem } from '../../models/orderItem';  
import '../../components/cart/cart.scss';

export default function Cart() {
  const { isOpen, setIsOpen } = useCart();
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      async function loadCart() {
        const items = await fetchCart(userId);
        setCartItems(items);
      }
      loadCart();
    }
  }, [userId]);

  const handleQuantityChange = async (id: string, quantity: number) => {
    if (userId) {
      const updatedItem = { id, quantity };
      await updateItemInCart(userId, updatedItem);
      const updatedCart = await fetchCart(userId);
      setCartItems(updatedCart);
    }
  };

  const handleRemoveItem = async (id: string) => {
    if (userId) {
      await removeItemFromCart(userId, id);
      const updatedCart = await fetchCart(userId);
      setCartItems(updatedCart);
    }
  };

  const handleClearCart = async () => {
    if (userId) {
      await removeItemFromCart(userId, 'all'); // Assuming 'all' is a special identifier to clear the cart
      setCartItems([]);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Carrinho de compras</DialogTitle>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="close-button ml-3 hover:text-yellow-500 transition duration-300"
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-yellow-500" />
                    </button>
                  </div>
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartItems.map((product) => (
                      <li key={product.id} className="flex py-6">
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
                              <p className="ml-4">{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          </div>
                          <div className="flex flex-1 items-center justify-between text-sm space-x-2">
                            <div className="flex items-center space-x-2">
                              <label htmlFor={`quantity-${product.id}`} className="sr-only">
                                Quantidade
                              </label>
                              <select
                                id={`quantity-${product.id}`}
                                value={product.quantity}
                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                className="h-6 w-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:ring-[#E8CA05] focus:border-[#E8CA05]"
                              >
                                {[...Array(10).keys()].map((n) => (
                                  <option key={n + 1} value={n + 1}>
                                    {n + 1}
                                  </option>
                                ))}
                              </select>
                              <p className="text-gray-500">Quantidade</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(product.id)}
                              className="bg-black text-white font-medium text-sm rounded-md px-6 py-3 hover:text-[#E8CA05] transition duration-300"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleClearCart}
                      className="bg-black text-white font-medium text-sm rounded-md px-6 py-3 hover:text-[#E8CA05] transition duration-300"
                    >
                      Limpar Carrinho
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ou{' '}
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continuar comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
