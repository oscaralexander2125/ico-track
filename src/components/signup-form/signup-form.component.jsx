import { useState } from "react";
import "./signup-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormInputs = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ alternateForms }) => {
  const [formFields, setFormFields] = useState(defaultFormInputs);
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return console.log("passwords dont match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      console.log(err.code);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormInputs);
  };

  return (
    <div>
      <h2>Register!</h2>
      <span>Sign up with Name, Email and Password</span>
      <form onSubmit={submitHandler}>
        <label>Full Name</label>
        <input
          required
          name="displayName"
          type="text"
          id="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <label>Email</label>
        <input
          required
          name="email"
          type="email"
          id="register-email"
          onChange={changeHandler}
          value={email}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          id="register-password"
          onChange={changeHandler}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={changeHandler}
          value={confirmPassword}
        />
        <button type="submit">Sign In</button>
      </form>
      <h3 className="signIn-text" onClick={() => alternateForms(true)}>
        Sign In
      </h3>
    </div>
  );
};

export default SignUpForm;
