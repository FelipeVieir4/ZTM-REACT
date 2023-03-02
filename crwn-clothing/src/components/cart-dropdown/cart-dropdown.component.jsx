import "./cart-dropdown.styles.scss";
import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart=item" />
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <Button> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
