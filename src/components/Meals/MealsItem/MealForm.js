import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useRef, useState } from "react";

const MealForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  const MealFormSubmitHandler = (event) => {
    event.preventDefault();

    const mealAmount = inputRef.current.value;

    if (mealAmount.trim().length === 0 || mealAmount < 1 || mealAmount > 5) {
      setIsValid(false);
      return;
    }
    props.addMealItem(+mealAmount);
  };

  return (
    <form className={styles.form} onSubmit={MealFormSubmitHandler}>
      <Input
        ref={inputRef}
        labelStyles={styles["form__label"]}
        classNames={styles["form__input"]}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <Button extraStyles={styles["form__btn"]} type="submit">
        +Add
      </Button>
      {!isValid && (
        <p className={styles["form__valid"]}>
          Invalid meal's amount.It has to be in the rage from 1 to 5
        </p>
      )}
    </form>
  );
};

export default MealForm;
