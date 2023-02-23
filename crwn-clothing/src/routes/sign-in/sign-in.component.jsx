import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  //signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SingnUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

import Button from "../../components/Button/Button.component.jsx";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SingnUpForm />
    </div>
  );
};

export default SignIn;
