import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./MealsItem.module.css";

const MealsItem = (props) => {
  return (
    <li>
      <article className={styles["meals__item"]}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <Input
          classNames={styles["meals__input"]}
          label="Amount"
          HtmlFor={props.id}
          id={props.id}
        />
        <Button>+Add</Button>
      </article>
    </li>
  );
};

export default MealsItem;
