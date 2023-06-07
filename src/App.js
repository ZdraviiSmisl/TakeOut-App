import React from "react";
import MainHader from "./components/Hader/MainHader";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <MainHader />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
