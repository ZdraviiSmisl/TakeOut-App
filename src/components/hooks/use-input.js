import { useState } from "react";

const useInput = (validationFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const validInput = validationFunc(enteredValue);
  const hasError = !validInput && isInputTouched;

  const changeEventHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsInputTouched(true);
  };

  const inputBlurHandler = (event) => {
    setIsInputTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  return {
    value: enteredValue,
    isValid: validInput,
    hasError,
    changeEventHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
