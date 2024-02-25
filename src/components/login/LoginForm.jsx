import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import checkValidate from "../../utils/validate";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../features/authSlice";

import "./LoginComponent.css";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const [showEye, setShowEye] = useState(true);
  const { user, setUser, errorMessage, setErrorMessage } = props;
  const { email, password } = user;
  const handleLoginBtn = () => {
    const message = checkValidate(email, password);
    setErrorMessage(message);
    if (message) {
      return;
    }

    dispatch(handleLogin({ email, password }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLoginBtn();
      }}
    >
      <div className="login-label-input">
        <label htmlFor="login-email">
          Email<span className="ast">*</span>
        </label>
        <input
          type="email"
          id="login-email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={email}
          required
        />
      </div>
      <div className="login-label-input">
        <label htmlFor="login-password">
          Password<span className="ast">*</span>
        </label>
        <input
          type={!showEye ? "text" : "password"}
          id="login-password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={password}
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
