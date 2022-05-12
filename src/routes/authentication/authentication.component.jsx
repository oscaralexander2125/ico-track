import SignInForm from "../../components/signin-form/signin-form.component";
import SignUpForm from "../../components/signup-form/signup-form.component";
import "./authentication.styles.scss";
import { useState } from "react";

const loginOrSignUp = {
  loginForm: true,
};

const Authentication = () => {
  const [formToDisplay, setFormToDisplay] = useState(loginOrSignUp);
  const { loginForm } = formToDisplay;

  const alternateForms = (isLogged) => {
    setFormToDisplay({ loginForm: isLogged });
  };

  return (
    <div className="signInOrUp">
      <div>demo: test@test.com</div>
      <div>password: 12341234</div>
      {loginForm ? (
        <SignInForm alternateForms={alternateForms} />
      ) : (
        <SignUpForm alternateForms={alternateForms} />
      )}
    </div>
  );
};

export default Authentication;
