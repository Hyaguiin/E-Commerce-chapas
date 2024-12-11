import React, { createContext, useContext, useState, ReactNode } from 'react';
import { OrderItem } from '../../models/orderItem';

// Tipagem para o contexto
interface CartContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  cartItems: OrderItem[];
  updateCartItems: (newCartItems: OrderItem[]) => void;
}

// Criação do contexto com valores iniciais como undefined
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Hook para usar o contexto
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

// Provider para o contexto
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);

  const updateCartItems = (newCartItems: OrderItem[]) => {
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, cartItems, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
