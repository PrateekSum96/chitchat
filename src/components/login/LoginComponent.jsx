import { useNavigate } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

import { AiFillEyeInvisible } from "react-icons/ai";
import "./LoginComponent.css";
import { useState } from "react";

const Login = () => {
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <div className="login-label-input">
            <label htmlFor="login-email">
              Email<span className="ast">*</span>
            </label>
            <input type="text" id="login-email" />
          </div>
          <div className="login-label-input">
            <label htmlFor="login-password">
              Password<span className="ast">*</span>
            </label>
            <input type={!showEye ? "text" : "password"} id="login-password" />
            <div onClick={() => setShowEye(!showEye)}>
              {showEye ? (
                <BsFillEyeFill className="eye" />
              ) : (
                <AiFillEyeInvisible className="eye" />
              )}
            </div>
          </div>

          <button>Log In</button>
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
