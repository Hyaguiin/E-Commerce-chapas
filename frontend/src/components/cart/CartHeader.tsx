import { DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CartHeaderProps {
  setIsOpen: (open: boolean) => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ setIsOpen }) => {
  return (
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
  );
};

export default CartHeader;