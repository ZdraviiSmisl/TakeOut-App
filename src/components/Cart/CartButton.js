import React, { useContext, useState, useEffect } from "react";
import styles from "./CartButton.module.css";
import CartIcon from "./feature/CartImage";
import CartContext from "../../store/CartContext";

const CartButton = (props) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const context = useContext(CartContext);
  const itemNumber = context.items.reduce(
    (outputNum, item) => outputNum + item.amount,
    0
  );

  const { items } = context;

  const cartClasses = `${styles.button} ${!isAnimated ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setIsAnimated(true);

    const tiemer = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => clearTimeout(tiemer);
  }, [items]);

  return (
    <button className={cartClasses} onClick={props.onOpen}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemNumber}</span>
    </button>
  );
};

export default CartButton;
