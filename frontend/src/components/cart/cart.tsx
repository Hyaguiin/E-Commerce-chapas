import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../cart/CartContext";
import {
  fetchCart,
  updateItemInCart,
  removeItemFromCart,
  clearUserCart,
} from "../../services/cartService";
import { OrderItem } from "../../models/orderItem";
import "../../components/cart/cart.scss";
import { User } from "../../models/userModel";
import { createOrder } from "../../services/orderService";
import { OrderModel } from "../../models/orderModel";

export default function Cart() {
  const { isOpen, setIsOpen, cartItems, updateCartItems } = useCart(); // Usando o contexto para acessar cartItems e updateCartItems
  const [userId, setUserId] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [orderData, setOrderData] = useState<any>();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const userObject = localStorage.getItem("user");
    const parsedUser = userObject !== null ? JSON.parse(userObject) : null;
    setUser(parsedUser);

    if (parsedUser?.id) {
      setUserId(parsedUser.id);

      // Função assíncrona para obter os itens do carrinho
      (async () => {
        const cart = await fetchCart(parsedUser.id);
        const cartItemsArray = cart?.data.items || [];
        updateCartItems(cartItemsArray); // Atualizando o contexto com os itens do carrinho
      })();
    }
  }, []); // Deixe as dependências vazias para garantir que seja executado apenas uma vez

  const handleQuantityChange = async (product_id: string, quantity: number) => {
    if (userId) {
      const updatedItem = { product_id, quantity };
      await updateItemInCart(userId, updatedItem);
      const updatedCart = await fetchCart(userId);
      const updatedCartItemsArray = updatedCart.data.items;
      updateCartItems(updatedCartItemsArray); // Atualizando os itens do carrinho no contexto
    }
  };

  const handleRemoveItem = async (id: string) => {
    if (userId) {
      await removeItemFromCart(userId, id);
      const updatedCart = await fetchCart(userId);
      updateCartItems(updatedCart.data.items); // Atualizando os itens no contexto após a remoção
    }
  };

  const handleClearCart = async () => {
    if (userId) {
      await clearUserCart(userId);
      updateCartItems([]); // Limpando os itens do carrinho no contexto
    }
  };

  const handleCheckout = async () => {
    if (user && cartItems.length > 0) {
      const order = {
        user_name: user.name,
        user_email: user.email,
        total_amount: cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        order_items: cartItems.map((item) => ({
          product_id: item.product_id,
          product_name: item.product_name,
          price: item.price,
          quantity: item.quantity,
        })),
      };

      try {
        const response = await createOrder(order);

        // Verifique o status da resposta
        if (response.msg === "Pedido criado com sucesso") {
          setOrderData({
            user_name: user.name,
            total_amount: order.total_amount,
            order_items: order.order_items,
          });
          setShowConfirmation(true); // Abre a janela de confirmação
          handleClearCart(); // Limpa o carrinho após o pedido ser criado
          setIsOpen(false); // Fecha o modal do carrinho
        } else {
          console.error("Falha ao criar o pedido: ", response);
        }
      } catch (error) {
        console.error("Error creating order:", error);
      }
    } else {
      console.warn("User or cart is empty. Cannot checkout.");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      {showConfirmation && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-10"
        >
          <DialogPanel className="bg-white p-6 rounded-md shadow-lg text-center space-y-4">
            <DialogTitle className="text-lg font-semibold">
              Pedido Confirmado!
            </DialogTitle>
            <p className="text-gray-600">
              Obrigado, <strong>{orderData?.user_name || "Usuário"}</strong>!
              Seu pedido foi realizado com sucesso.
            </p>
            <p className="text-gray-600">
              Total:{" "}
              <strong>R${orderData?.total_amount?.toFixed(2) || "0.00"}</strong>
            </p>
            <ul className="text-gray-500 space-y-2">
              {orderData?.order_items?.map((item: OrderItem) => (
                <li key={item.product_id}>
                  {item.quantity}x {item.product_name} - R$
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setShowConfirmation(false)}
              className="bg-[#E8CA05] text-black font-medium text-sm rounded-md px-6 py-3 hover:bg-black hover:text-[#E8CA05] transition duration-300"
            >
              Fechar
            </button>
          </DialogPanel>
        </Dialog>
      )}

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Carrinho de compras
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="close-button ml-3 hover:text-yellow-500 transition duration-300"
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-yellow-500" />
                    </button>
                  </div>

                  {/* Verificação se o carrinho está vazio */}
                  {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">
                      <p>Seu carrinho está vazio.</p>
                      <p className="mt-2">
                        Adicione alguns itens ao carrinho e volte aqui para
                        visualizá-los!
                      </p>
                    </div>
                  ) : (
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((product) => (
                        <li key={product.product_id} className="flex py-6">
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <p>{product.product_name}</p>
                                </h3>
                                <p className="ml-4">
                                  R${product.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-center justify-between text-sm space-x-2">
                              <div className="flex items-center space-x-2">
                                <label
                                  htmlFor={`quantity-${product.product_id}`}
                                  className="sr-only"
                                >
                                  Quantidade
                                </label>
                                <div className="flex items-center border rounded-md">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleQuantityChange(
                                        product.product_id,
                                        -1
                                      )
                                    }
                                    className={`px-2 py-1 ${
                                      product.quantity === 1
                                        ? "text-gray-300 cursor-not-allowed"
                                        : "text-gray-500 hover:text-gray-900"
                                    } focus:outline-none`}
                                    disabled={product.quantity === 1}
                                  >
                                    -
                                  </button>
                                  <span className="px-4">
                                    {product.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleQuantityChange(
                                        product.product_id,
                                        1
                                      )
                                    }
                                    className="px-2 py-1 text-gray-500 hover:text-gray-900 focus:outline-none"
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="text-gray-500">Quantidade</p>
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveItem(product.product_id)
                                }
                                className="bg-black text-white font-medium text-sm rounded-md px-6 py-3 hover:text-[#E8CA05] transition duration-300"
                              >
                                Remover
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex flex-direction-row justify-between">
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleClearCart}
                        className="bg-black text-white font-medium text-sm rounded-md px-6 py-3 hover:text-[#E8CA05] transition duration-300"
                      >
                        Limpar Carrinho
                      </button>
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleCheckout}
                        className="bg-[#E8CA05] text-black font-medium text-sm rounded-md px-6 py-3 hover:bg-black hover:text-[#E8CA05] transition duration-300"
                      >
                        Finalizar Compra
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ou{" "}
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
