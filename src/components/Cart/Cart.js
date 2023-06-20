import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);
  const hasItem = context.items.length > 0;
  const totalAmount = `$${context.totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    context.removeItem(id);
  };

  const cartItems = context.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAddItem={addItemHandler.bind(null, item)}
      onRemoveItem={removeItemHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart__items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button onClick={props.onClose}>Close</button>
        {hasItem && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
