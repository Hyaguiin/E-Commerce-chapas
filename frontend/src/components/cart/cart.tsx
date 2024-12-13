import { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useCart } from "../cart/CartContext";
import { fetchCart, updateItemInCart, removeItemFromCart, clearUserCart } from "../../services/cartService";
import { User } from "../../models/userModel";
import { createOrder } from "../../services/orderService";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartConfirmation from "./CartConfirmation";
import CartActions from "./CartActions";

export default function Cart() {
  const { isOpen, setIsOpen, cartItems, updateCartItems } = useCart();
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
      (async () => {
        const cart = await fetchCart(parsedUser.id);
        const cartItemsArray = cart?.data.items || [];
        updateCartItems(cartItemsArray);
      })();
    }
  }, []);

  const handleQuantityChange = async (product_id: string, quantity: number) => {
    if (userId) {
      const updatedItem = { product_id, quantity };
      await updateItemInCart(userId, updatedItem);
      const updatedCart = await fetchCart(userId);
      updateCartItems(updatedCart.data.items);
    }
  };

  const handleRemoveItem = async (id: string) => {
    if (userId) {
      await removeItemFromCart(userId, id);
      const updatedCart = await fetchCart(userId);
      updateCartItems(updatedCart.data.items);
    }
  };

  const handleClearCart = async () => {
    if (userId) {
      await clearUserCart(userId);
      updateCartItems([]);
    }
  };

  const handleCheckout = async () => {
    if (user && cartItems.length > 0) {
      const order = {
        user_name: user.name,
        user_email: user.email,
        total_amount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        order_items: cartItems.map((item) => ({
          product_id: item.product_id,
          product_name: item.product_name,
          price: item.price,
          quantity: item.quantity,
        })),
      };

      try {
        const response = await createOrder(order);
        if (response.msg === "Pedido criado com sucesso") {
          setOrderData({
            user_name: user.name,
            total_amount: order.total_amount,
            order_items: order.order_items,
          });
          setShowConfirmation(true);
          handleClearCart();
          // Mova esta linha para depois da seção de confirmação
          // setIsOpen(false);
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
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      {/* Move `Dialog` para sua própria seção */}
      {showConfirmation && (
        <CartConfirmation orderData={orderData} setShowConfirmation={(show) => {
          setShowConfirmation(show);
          if (!show) {
            setIsOpen(false); // Fechar o modal somente depois que `CartConfirmation` é fechado
          }
        }} />
      )}

      {!showConfirmation && (
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <CartHeader setIsOpen={setIsOpen} />
                    {cartItems.length === 0 ? (
                      <div className="text-center text-gray-500">
                        <p>Seu carrinho está vazio.</p>
                        <p className="mt-2">
                          Adicione alguns itens ao carrinho e volte aqui para visualizá-los!
                        </p>
                      </div>
                    ) : (
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((product) => (
                          <CartItem
                            key={product.product_id}
                            product={product}
                            handleQuantityChange={handleQuantityChange}
                            handleRemoveItem={handleRemoveItem}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                  <CartActions handleClearCart={handleClearCart} handleCheckout={handleCheckout} setIsOpen={setIsOpen} />
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      )}
      
    </Dialog>
  );
}