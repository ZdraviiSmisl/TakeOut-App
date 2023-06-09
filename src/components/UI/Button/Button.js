import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.extraStyles}`}
      onClick={props.addItemHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
