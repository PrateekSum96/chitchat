import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLogin } from "../../features/authSlice";

import "./LoginComponent.css";
import LoginForm from "./LoginForm";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");

  const initialUserState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUserState);

  const { isLoggedIn } = useSelector((store) => store.auth);

  const handleGuestLogIn = () => {
    dispatch(
      handleLogin({
        email: "adarshbalika@ab.com",
        password: "adarshBalika123",
      })
    );
    // navigate(location?.state?.from?.pathname, { replace: true });
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [handleGuestLogIn]);

  return (
    <div>
      <div className="login-form">
        <h2>Log In</h2>
        <LoginForm
          user={user}
          setUser={setUser}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          initialUserState={initialUserState}
        />
        <button id="guest-login-btn" onClick={handleGuestLogIn}>
          Guest Mode
        </button>
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

export default LoginComponent;
