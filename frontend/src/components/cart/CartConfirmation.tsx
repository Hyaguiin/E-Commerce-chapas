import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { OrderItem } from "../../models/orderItem";

interface CartConfirmationProps {
  orderData: any;
  setShowConfirmation: (show: boolean) => void;
}

const CartConfirmation: React.FC<CartConfirmationProps> = ({
  orderData,
  setShowConfirmation,
}) => {
  return (
    <Dialog
      open={true}
      onClose={() => setShowConfirmation(false)}
      className="relative z-10"
    >
      <DialogPanel className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-lg text-center space-y-4">
          <DialogTitle className="text-lg font-semibold">
            Pedido Confirmado!
          </DialogTitle>
          <p className="text-gray-600">
            Obrigado, <strong>{orderData?.user_name || "Usuário"}</strong>! Seu
            pedido foi realizado com sucesso.
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
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default CartConfirmation;