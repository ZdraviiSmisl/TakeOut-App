import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // const inputRef = useRef();

  // const changeInput = () => {
  //   inputRef.current.focus();
  // };

  // useImperativeHandle(ref, () => {
  //   return {
  //     focus: changeInput,
  //   };
  // });

  return (
    <>
      <label className={props.labelStyles} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input {...props.input} className={`${props.classNames} `} ref={ref} />
    </>
  );
});

export default Input;
