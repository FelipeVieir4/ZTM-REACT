import "./checkout.styles.scss";
import { useContext, useEffect } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { setIsOpen, cartItems, cartPrice } = useContext(CartDropdownContext);

  //once the ChecOut render, function will set cart off. then icon will handle the state.
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((carItem) => {
        return <CheckoutItem key={carItem.id} cartItem={carItem} />;
      })}
      <span className="total">Total: {cartPrice}</span>
    </div>
  );
};

export default CheckOut;
