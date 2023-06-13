import CartContext from "./CartContext";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removItmeHandler = (id) => {};

  const cartContext = {
    itmes: [],
    totalAmount: 0,
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
