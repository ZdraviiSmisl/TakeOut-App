import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${styles["input__wrap"]} ${props.input}`}>
      <label className={styles["input__label"]} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={`${props.classNames} ${styles["input"]}`}
        type={props.type || "number"}
        id={props.id || toString(Date.now()).slice(-10)}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
