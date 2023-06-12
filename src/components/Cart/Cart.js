import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const cartItmes = [
    { id: "c1", name: "Sushi", amount: 2, price: "$16.50" },
  ].map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart__items"]}>{cartItmes}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$16.50</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
