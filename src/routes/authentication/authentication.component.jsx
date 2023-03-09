import SingnUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SingnInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import './authentication.style.scss'


const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingnInForm />
      <SingnUpForm />
    </div>
  );
};

export default Authentication;
