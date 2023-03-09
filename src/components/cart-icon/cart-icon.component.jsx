import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsOpen, isOpen, cartCount } = useContext(CartDropdownContext);

  const handleOpenning = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartIconContainer onClick={handleOpenning}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
