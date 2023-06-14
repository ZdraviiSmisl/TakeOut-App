import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import CartContext from "../../../store/CartContext";
import { useContext } from "react";

const MealForm = (props) => {
  const context = useContext(CartContext);
  return (
    <form className={styles.form}>
      <Input
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
      <Button extraStyles={styles["form__btn"]} onClick={context.addItem}>
        +Add
      </Button>
    </form>
  );
};

export default MealForm;
