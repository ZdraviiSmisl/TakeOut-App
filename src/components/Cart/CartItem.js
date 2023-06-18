import Button from "../UI/Button/Button";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles["cart-item__li"]}>
      <article className={styles["cart-item"]}>
        <h3 className={styles["cart-item__title"]}>{props.name}</h3>
        <p className={styles["cart-item__block"]}>
          <span className={styles["cart-item__price"]}>{price}</span>
          <span
            className={styles["cart-item__amount"]}
          >{`x${props.amount}`}</span>
        </p>
        <div className={styles["cart-item__block"]}>
          <button className={styles["cart-item__button"]}>+</button>
          <button className={styles["cart-item__button"]}>-</button>
        </div>
      </article>
    </li>
  );
};

export default CartItem;
