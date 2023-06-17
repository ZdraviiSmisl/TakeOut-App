import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      items: state.items.concat(action.item),
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: defaultState.items,
    totalAmount: defaultState.totalAmount,
  });

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removItmeHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removItmeHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
