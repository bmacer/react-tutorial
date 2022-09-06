import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  dropdownMenuHidden: false,
  setDropdownMenuHidden: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => null,
});

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [dropdownMenuHidden, setDropdownMenuHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCartCount(cartCount + 1);
  };

  const value = {
    dropdownMenuHidden,
    setDropdownMenuHidden,
    cartItems,
    addItemToCart,
    cartCount,
    setCartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
