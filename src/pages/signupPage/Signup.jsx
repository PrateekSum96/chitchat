import AppName from "../../components/appName/AppName";
import SignupComponent from "../../components/signup/SignupComponent";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup">
        <AppName />
        <SignupComponent />
      </div>
    </div>
  );
};

export default Signup;
