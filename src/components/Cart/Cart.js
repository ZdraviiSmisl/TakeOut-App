import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);
  // const cartItmes = [
  //   { id: "c1", name: "Sushi", amount: 2, price: "$16.50" },
  // ].map((item) => <li key={item.id}>{item.name}</li>);

  const cartItems = context.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart__items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${context.totalAmount}`}</span>
      </div>

      <div className={styles.actions}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
