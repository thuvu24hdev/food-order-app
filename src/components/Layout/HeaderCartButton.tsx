import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { Item } from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item: Item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
