import { useState } from "react";
import "./signin-form.styles.scss";

const defaultFormInputs = {
  email: "",
  password: "",
};

const SignInForm = ({ alternateForms, logGoogleUser}) => {
  const [formFields, setFormFields] = useState(defaultFormInputs);
  const { email, password } = formFields;

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <div className="signin-container">
      <h2>Have an Account?</h2>
      <span>Sign in with Email and Password</span>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input
          required
          name="email"
          type="email"
          id="email"
          onChange={changeHandler}
          value={email}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          onChange={changeHandler}
          value={password}
        />
        <button type="submit">Sign In</button>
        <button onClick={logGoogleUser}>Google Popup Sign In</button>
      </form>
      <h3 className="register" onClick={() => alternateForms(false)}>Register</h3>
    </div>
  );
};

export default SignInForm;
