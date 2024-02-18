import { useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import "./LoginComponent.css";
import { useState, useRef } from "react";
import checkValidate from "../../utils/validate";

const Login = () => {
  const [showEye, setShowEye] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const handleLogin = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      return;
    }
  };

  return (
    <div>
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="login-label-input">
            <label htmlFor="login-email">
              Email<span className="ast">*</span>
            </label>
            <input type="email" id="login-email" ref={email} required />
          </div>
          <div className="login-label-input">
            <label htmlFor="login-password">
              Password<span className="ast">*</span>
            </label>
            <input
              type={!showEye ? "text" : "password"}
              id="login-password"
              ref={password}
              required
            />
            <div onClick={() => setShowEye(!showEye)}>
              {showEye ? (
                <BsFillEyeFill className="eye" />
              ) : (
                <BsFillEyeSlashFill className="eye" />
              )}
            </div>
          </div>
          <div className="error-msg">{errorMessage}</div>
          <button onClick={() => handleLogin()}>Log In</button>
          <button>Guest Mode</button>
        </form>
        <p>
          Don't have account?
          <span
            className="login-signup"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
