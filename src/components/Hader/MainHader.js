import { Fragment } from "react";
import styles from "./MainHader.module.css";
import CartButton from "../Cart/CartButton";

const MainHader = (props) => {
  return (
    <Fragment>
      <header className={styles["header"]}>
        <h1 className={styles["header__title"]}>Best Meals</h1>
        <CartButton onOpen={props.onOpen} />
      </header>
      <div className={styles["header__back"]}></div>
    </Fragment>
  );
};

export default MainHader;
