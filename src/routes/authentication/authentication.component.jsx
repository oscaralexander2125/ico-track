import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
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
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const alternateForms = (isLogged) => {
    setFormToDisplay({ loginForm: isLogged });
  };

  return (
    <div className="signInOrUp">
      {loginForm ? (
        <SignInForm
          alternateForms={alternateForms}
          logGoogleUser={logGoogleUser}
        />
      ) : (
        <SignUpForm alternateForms={alternateForms} />
      )}
    </div>
  );
};

export default Authentication;
