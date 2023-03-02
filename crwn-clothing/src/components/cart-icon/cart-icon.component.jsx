import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

const CartIcon = () => {
  const { setIsOpen, isOpen, cartCount } = useContext(CartDropdownContext);

  const handleOpenning = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleOpenning}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
