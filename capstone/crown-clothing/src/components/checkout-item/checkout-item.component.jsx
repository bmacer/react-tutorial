import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, removeSingleItem, removeEntireItem } =
    useContext(CartContext);

  const handleDown = () => removeSingleItem(item);
  const handleUp = () => addItemToCart(item);
  const handleRemove = () => removeEntireItem(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={handleDown} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={handleUp} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={handleRemove} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
