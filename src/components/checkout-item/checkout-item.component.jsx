import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItem, addItemToCart, removeItemFromCart } =
    useContext(CartDropdownContext);

  const clearItemHandler = () => clearItem(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
