import { useState } from "react";
import "./signin-form.styles.scss";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormInputs = {
  email: "",
  password: "",
};

const SignInForm = ({ alternateForms, logGoogleRedirect }) => {
  const [formFields, setFormFields] = useState(defaultFormInputs);
  const { email, password } = formFields;

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      console.log(err.code);
    }
  };

  const changeHandler = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormInputs);
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
        <button type="button" onClick={logGoogleUser}>
          Google Sign In
        </button>
      </form>
      <h3 className="register" onClick={() => alternateForms(false)}>
        Register
      </h3>
    </div>
  );
};

export default SignInForm;
