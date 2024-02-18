import { useNavigate } from "react-router-dom";

import "./SignupComponent.css";
import { useRef, useState } from "react";
import checkValidate from "../../utils/validate";

const SignupComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const handleSignUp = () => {
    if (password.current.value === confirmPassword.current.value) {
      const message = checkValidate(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) {
        return;
      }
    } else {
      setErrorMessage("Passwords are not matching!");
    }
  };
  return (
    <div>
      <div className="signup-form">
        <h2>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="label-input">
            <label htmlFor="first-name">
              First Name<span className="ast">*</span>
            </label>
            <input type="text" id="first-name" required />
          </div>
          <div className="label-input">
            <label htmlFor="last-name">
              Last Name<span className="ast">*</span>
            </label>
            <input type="text" id="last-name" required />
          </div>
          <div className="label-input">
            <label htmlFor="signup-email">
              Email<span className="ast">*</span>
            </label>
            <input type="email" id="signup-email" ref={email} required />
          </div>
          <div className="label-input">
            <label htmlFor="signup-password">
              Password<span className="ast">*</span>
            </label>
            <input type="text" id="signup-password" ref={password} required />
          </div>
          <div className="label-input">
            <label htmlFor="confirm-password">
              Confirm Password<span className="ast">*</span>
            </label>
            <input
              type="text"
              id="confirm-password"
              ref={confirmPassword}
              required
            />
          </div>
          <div className="signup-error">{errorMessage}</div>
          <button className="signup-btn" onClick={handleSignUp}>
            Sign up
          </button>
        </form>
      </div>
      <p>
        Already have an account?
        <span
          className="signup-login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </span>
      </p>
    </div>
  );
};

export default SignupComponent;
