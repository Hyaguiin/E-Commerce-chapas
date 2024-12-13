import React from "react";

interface CartActionsProps {
  handleClearCart: () => Promise<void>;
  handleCheckout: () => Promise<void>;
  setIsOpen: (open: boolean) => void;
}

const CartActions: React.FC<CartActionsProps> = ({ handleClearCart, handleCheckout, setIsOpen }) => {
  return (
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
  );
};

export default CartActions;