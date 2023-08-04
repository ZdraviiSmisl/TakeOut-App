import styles from "./Cart.module.css";

import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/CartContext";
import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CheckOut from "./Checkout";

const Cart = (props) => {
  const context = useContext(CartContext);
  const hasItem = context.items.length > 0;
  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(null);

  const addItemHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    context.removeItem(id);
  };

  const placeOrderHandler = () => {
    setIsOrderPlaced(true);
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

  const addMeals = async (clientData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(
        "https://http-requests-3bfcd-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            data: clientData,
            orderData: context.items,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Somthing went wrong!");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message);
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    context.clearCart();
  };

  const orderActions = (
    <div className={styles.actions}>
      <button onClick={props.onClose}>Close</button>
      {hasItem && <button onClick={placeOrderHandler}>Order</button>}
    </div>
  );

  const modalContext = (
    <React.Fragment>
      {context.items.length > 0 && (
        <ul className={styles["cart__items"]}>{cartItems}</ul>
      )}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrderPlaced && (
        <CheckOut confirmForm={addMeals} cancelOrder={props.onClose} />
      )}

      {!isOrderPlaced && orderActions}
    </React.Fragment>
  );

  const submittingData = <p>...Sending your order,please wait a bit!</p>;

  const dataWasSubmitted = (
    <React.Fragment>
      <p className={styles["order-text"]}>Order is placed,thanks!</p>
      <button className={styles.button} onClick={props.onClose} type="button">
        Close
      </button>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!didSubmit && !isSubmitting && modalContext}
      {didSubmit && !isSubmitting && dataWasSubmitted}
      {isSubmitting && submittingData}
    </Modal>
  );
};

export default Cart;
