import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  itmes: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      items: state.items.concut(action.item),
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    itmes: defaultState.itmes,
    totalAmount: defaultState.totalAmount,
  });

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removItmeHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.itmes,
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
