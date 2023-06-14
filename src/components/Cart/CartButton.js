import React, { useContext } from "react";
import styles from "./CartButton.module.css";
import CartIcon from "./feature/CartImage";
import CartContext from "../../store/CartContext";

const CartButton = (props) => {
  const context = useContext(CartContext);
  const itemNumber = context.items.reduce(
    (outputNum, item) => outputNum + item,
    0
  );

  return (
    <button className={styles.button} onClick={props.onOpen}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemNumber}</span>
    </button>
  );
};

export default CartButton;
