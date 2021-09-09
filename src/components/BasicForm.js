import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: firstnameInput,
    valueChangeHandler: firstnameChangeHandler,
    touchChangeHandler: firstnameTouchHandler,
    IsvalidValue: IsValidFirstName,
    hasError: firstnameInputIsvalid,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastnameInput,
    valueChangeHandler: lastnameChangeHandler,
    touchChangeHandler: lastnameTouchHandler,
    IsvalidValue: IsValidLastName,
    hasError: lastnameInputIsvalid,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    valueChangeHandler: emailChangeHandler,
    touchChangeHandler: emailTouchHandler,
    IsvalidValue: IsValidEmail,
    hasError: emailInputIsvalid,
  } = useInput((value) => value.includes("@"));

  let formValid = false;

  if (IsValidFirstName && IsValidLastName && IsValidEmail) {
    formValid = true;
  }
  return (
    <form>
      <div className="control-group">
        <div
          className={`form-control ${firstnameInputIsvalid ? "invalid" : ""}`}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstnameInput}
            onChange={firstnameChangeHandler}
            onBlur={firstnameTouchHandler}
          />
          {firstnameInputIsvalid && (
            <p className="error-text">Name field can't be empty</p>
          )}
        </div>
        <div
          className={`form-control ${lastnameInputIsvalid ? "invalid" : ""}`}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastnameInput}
            onChange={lastnameChangeHandler}
            onBlur={lastnameTouchHandler}
          />
          {lastnameInputIsvalid && (
            <p className="error-text">Name field can't be empty</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailInputIsvalid ? "invalid" : ""}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailTouchHandler}
        />
        {emailInputIsvalid && (
          <p className="error-text">Please enter right email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
