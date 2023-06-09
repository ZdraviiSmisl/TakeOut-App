import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./MealsItem.module.css";

const MealsItem = (props) => {
  return (
    <li>
      <article className={styles["dish"]}>
        <h3 className={styles["dish__title"]}>{props.name}</h3>
        <p className={styles["dish__slogan"]}>{props.description}</p>
        <span className={styles["dish__price"]}>{props.price}</span>
        <Input
          input={styles["dish__input-wrap"]}
          classNames={styles["dish__input"]}
          label="Amount"
          HtmlFor={props.id}
          id={props.id}
        />
        <Button className={styles["dish__add"]}>+Add</Button>
      </article>
    </li>
  );
};

export default MealsItem;
