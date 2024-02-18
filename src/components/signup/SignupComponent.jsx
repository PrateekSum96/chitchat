import { useNavigate } from "react-router-dom";

import "./SignupComponent.css";

const SignupComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signup-form">
        <h2>Sign up</h2>
        <form>
          <div className="label-input">
            <label htmlFor="first-name">
              First Name<span className="ast">*</span>
            </label>
            <input type="text" id="first-name" />
          </div>
          <div className="label-input">
            <label htmlFor="last-name">
              Last Name<span className="ast">*</span>
            </label>
            <input type="text" id="last-name" />
          </div>
          <div className="label-input">
            <label htmlFor="signup-email">
              Email<span className="ast">*</span>
            </label>
            <input type="email" id="signup-email" />
          </div>
          <div className="label-input">
            <label htmlFor="signup-password">
              Password<span className="ast">*</span>
            </label>
            <input type="text" id="signup-password" />
          </div>
          <div className="label-input">
            <label htmlFor="confirm-password">
              Confirm Password<span className="ast">*</span>
            </label>
            <input type="text" id="confirm-password" />
          </div>
          <button className="signup-btn">Sign up</button>
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
