import React, { useState } from "react";
import MainHader from "./components/Hader/MainHader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isShown, setIsShown] = useState(false);

  const openModalCart = () => {
    setIsShown(true);
  };

  const closeModalCart = () => {
    setIsShown(null);
  };

  return (
    <>
      {isShown && <Cart onOpen={openModalCart} onClose={closeModalCart} />}
      <MainHader onOpen={openModalCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
