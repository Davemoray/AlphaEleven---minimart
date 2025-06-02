import { ProductType } from "@/type/productType";
import { createContext, ReactNode, useContext, useState } from "react";
import Toast from "react-native-toast-message";

type CartContextType = {
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;
  cartItems: ProductType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (id: string) => void;
  // updateQuantity: (id: string, quantity: number) => void;
    increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  getCartTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const addToCart = (item: ProductType) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((p) => p.id === item.id);
        if (exists) {
        // If item exists, increase its quantity
        return prevItems.map((p) =>
          p.id === item.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      }
      return [...prevItems, item];
    });
    Toast.show({
      type: "customSuccess",
      text1: "Item has been added to cart",
      // visibilityTime: 6000000,
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(id);
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

    const increaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

    const decreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = (item.quantity || 1) - 1;
          if (newQuantity < 1) {
            // Remove item if quantity would be 0 or less
            return null;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as ProductType[]
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * (item.quantity ?? 1),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        selectedItemId,
        setSelectedItemId,
        cartItems,
        addToCart,
        removeFromCart,
        // updateQuantity,
        getCartTotal,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
