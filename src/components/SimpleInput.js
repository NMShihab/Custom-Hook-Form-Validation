import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: name,
    valueChangeHandler: nameChangeHandler,
    touchChangeHandler: nameTouchHandler,
    IsvalidValue: IsvalidName,
    hasError: nameInputIsvalid,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueChangeHandler: emailChangeHandler,
    touchChangeHandler: emailTouchHandler,
    IsvalidValue: IsvalidEmail,
    hasError: emailInputIsvalid,
  } = useInput((value) => value.includes("@"));

  const nameClass = nameInputIsvalid ? "form-control invalid" : "form-control";
  const emailClass = emailInputIsvalid
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  console.log(formIsValid);
  if (IsvalidName && IsvalidEmail) {
    formIsValid = true;
    console.log(formIsValid);
  }

  const formHandleSubmission = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={formHandleSubmission}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameTouchHandler}
        />

        {nameInputIsvalid && (
          <p className="error-text">Name field can't be empty</p>
        )}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailTouchHandler}
        />
        {emailInputIsvalid && (
          <p className="error-text">
            Email field can't be empty and Give right email address
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
