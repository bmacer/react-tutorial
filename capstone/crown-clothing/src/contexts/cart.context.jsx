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

const decrementCartItem = (cartItems, productToRemove) => {
  console.log("decrementin");
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return removeCartItem(cartItems, productToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
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

  const removeEntireItem = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeSingleItem = (productToRemove) => {
    setCartItems(decrementCartItem(cartItems, productToRemove));
  };

  const value = {
    dropdownMenuHidden,
    setDropdownMenuHidden,
    cartItems,
    addItemToCart,
    cartCount,
    setCartCount,
    removeEntireItem,
    removeSingleItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
