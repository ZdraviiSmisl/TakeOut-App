import styles from "./Checkout.module.css";

const CheckOut = () => {
  return (
    <form className={styles["form-submit"]}>
      <div className={styles["from-submit__controls"]}>
        <label className={styles["form-submit__label"]} htmlFor="name">
          Name
        </label>
        <input className={styles["form-submit__input"]} id="name" type="text" />
      </div>
      <div className={styles["from-submit__controls"]}>
        <label className={styles["form-submit__label"]} htmlFor="street">
          Street
        </label>
        <input
          className={styles["form-submit__input"]}
          id="street"
          type="text"
        />
      </div>
      <div className={styles["from-submit__controls"]}>
        <label className={styles["form-submit__label"]} htmlFor="postal-code">
          Postal Code
        </label>
        <input
          className={styles["form-submit__input"]}
          id="postal-code"
          type="number"
        />
      </div>
      <div className={styles["from-submit__controls"]}>
        <label className={styles["form-submit__label"]} htmlFor="city">
          City
        </label>
        <input className={styles["form-submit__input"]} id="city" type="text" />
      </div>
      <div className={styles["form-submit__btn-block"]}>
        <button className={styles["form-submit__btn"]}>Cancel</button>
        <button className={styles["form-submit__btn"]}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
