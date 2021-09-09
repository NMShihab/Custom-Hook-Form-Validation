import { useState } from "react";

const useInput = (valueValidate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (e) => setValue(e.target.value);
  const touchChangeHandler = () => setIsTouched(true);

  const IsvalidValue = valueValidate(value);
  const hasError = !IsvalidValue && isTouched;

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    valueChangeHandler,
    touchChangeHandler,
    IsvalidValue,
    hasError,
    reset,
  };
};

export default useInput;
