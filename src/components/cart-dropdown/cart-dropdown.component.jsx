import "./cart-dropdown.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContaier,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContaier>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        {" "}
        Go to checkout
      </Button>
    </CartDropdownContaier>
  );
};

export default CartDropdown;
