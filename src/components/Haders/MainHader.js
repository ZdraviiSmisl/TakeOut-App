import { Fragment } from "react";
import styles from "./MainHader.module.css";
import imgFood from "../../assets/Meals.jpg";

const MainHader = (props) => {
  return (
    <Fragment>
      <header className={styles["header"]}>
        <h1 className={styles["header__title"]}>Best Meals</h1>
        <button className={styles["header__cart"]}>Cart</button>
      </header>
      <div className={styles["header__back"]}></div>
    </Fragment>
  );
};

export default MainHader;
