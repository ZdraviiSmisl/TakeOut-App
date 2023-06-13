import React from "react";

const CartContext = React.createContext({
  items: [],
  added: (itme) => {},
  remove: (id) => {},
  totalAmount: 0,
});

export default CartContext;
