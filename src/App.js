import React from "react";
import MainHader from "./components/Hader/MainHader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <MainHader />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
