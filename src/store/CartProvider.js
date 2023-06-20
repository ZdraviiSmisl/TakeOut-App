import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updateItems;

    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;

    let updateItems;
    let updateItem;

    if (existingItem.amount > 1) {
      updateItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      //In this case it will be reterned false and the array will get empty.That means there ara  no items in the cart
      updateItems = state.items.filter((item) => item.id !== action.id);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
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
