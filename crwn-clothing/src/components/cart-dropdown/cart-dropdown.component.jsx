import "./cart-dropdown.styles.scss";
import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
