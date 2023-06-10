import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label className={props.labelStyles} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input {...props.input} className={props.classNames} />
    </div>
  );
};

export default Input;
