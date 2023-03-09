import { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SingnInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/shop");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField();
      navigate("/shop");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("email not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an accont ?</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={HandleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={HandleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="Submint">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SingnInForm;
