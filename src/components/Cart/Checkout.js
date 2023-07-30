import useInput from "../hooks/use-input";
import styles from "./Checkout.module.css";

const CheckOut = () => {
  const {
    value: nameValue,
    isValid: isValidNameValue,
    hasError: validityName,
    changeEventHandler: nameChangeHandler,
    inputBlurHandler: nameBlureHandler,
    reset: resetNameValue,
  } = useInput((value) => value.trim() !== "");
  const {
    value: streetValue,
    isValid: isValidStreetValue,
    hasError: validityStreet,
    changeEventHandler: streetChangeHandler,
    inputBlurHandler: streetBlureHandler,
    reset: resetStreetValue,
  } = useInput((value) => value.trim() !== "");
  const {
    value: postalCodeValue,
    isValid: isValidPostValue,
    hasError: validityPostValue,
    changeEventHandler: postChangeHandler,
    inputBlurHandler: postBlureHandler,
    reset: resetPostValue,
  } = useInput((value) => value.trim().length === 5);
  const {
    value: cityValue,
    isValid: isValidCityValue,
    hasError: validityCityValue,
    changeEventHandler: cityChangeHandler,
    inputBlurHandler: cityBlureHandler,
    reset: resetCityValue,
  } = useInput((value) => value.trim() !== "");

  let isValidForm = false;

  if (
    isValidNameValue &&
    isValidStreetValue &&
    isValidPostValue &&
    isValidCityValue
  ) {
    isValidForm = true;
  }

  const submitOrderHandler = (event) => {
    event.preventDefault();
    if (!nameValue && !streetValue && !postalCodeValue && !cityValue) {
      return;
    }

    resetNameValue();
    resetStreetValue();
    resetPostValue();
    resetCityValue();
  };

  const nameValidClassess = `${styles["form-submit__controls"]} ${
    validityName ? styles.invalid : null
  }`;
  const streetValidClassess = `${styles["form-submit__controls"]} ${
    validityStreet ? styles.invalid : null
  }`;
  const postValidClassess = `${styles["form-submit__controls"]} ${
    validityPostValue ? styles.invalid : null
  }`;
  const cityValidClassess = `${styles["form-submit__controls"]} ${
    validityCityValue ? styles.invalid : null
  }`;

  return (
    <form onSubmit={submitOrderHandler} className={styles["form-submit"]}>
      <div className={nameValidClassess}>
        <label className={styles["form-submit__label"]} htmlFor="name">
          Name
        </label>
        <input
          className={styles["form-submit__input"]}
          id="name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlureHandler}
        />
        {validityName && (
          <p className={styles["form-submit__error-text"]}>
            Name is not empty!
          </p>
        )}
      </div>
      <div className={streetValidClassess}>
        <label className={styles["form-submit__label"]} htmlFor="street">
          Street
        </label>
        <input
          className={styles["form-submit__input"]}
          id="street"
          type="text"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlureHandler}
        />
        {validityStreet && (
          <p className={styles["form-submit__error-text"]}>
            Field must not be empty!
          </p>
        )}
      </div>
      <div className={postValidClassess}>
        <label className={styles["form-submit__label"]} htmlFor="postal-code">
          Postal Code
        </label>
        <input
          className={styles["form-submit__input"]}
          id="postal-code"
          type="text"
          value={postalCodeValue}
          onChange={postChangeHandler}
          onBlur={postBlureHandler}
        />
        {validityPostValue && (
          <p className={styles["form-submit__error-text"]}>
            5 symbols is required!
          </p>
        )}
      </div>
      <div className={cityValidClassess}>
        <label className={styles["form-submit__label"]} htmlFor="city">
          City
        </label>
        <input
          className={styles["form-submit__input"]}
          id="city"
          type="text"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlureHandler}
        />
        {validityCityValue && (
          <p className={styles["form-submit__error-text"]}>
            The city field must not be empty!
          </p>
        )}
      </div>
      <div className={styles["form-submit__btn-block"]}>
        <button className={styles["form-submit__btn"]}>Cancel</button>
        <button className={styles["form-submit__btn"]} disabled={!isValidForm}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
