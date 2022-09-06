import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setDropdownMenuHidden, dropdownMenuHidden, cartCount } =
    useContext(CartContext);

  const handleClick = () => {
    setDropdownMenuHidden(!dropdownMenuHidden);
  };
  return (
    <div onClick={handleClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
