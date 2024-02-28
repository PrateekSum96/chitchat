import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./SignupComponent.css";
import { useSelector } from "react-redux";
import SignupForm from "./SignupForm";

const SignupComponent = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const initialUserState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialUserState);

  const { status, isLoggedIn } = useSelector((store) => store.auth);

  useEffect(() => {
    if (status === "succeeded" && isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [status, isLoggedIn]);

  return (
    <div>
      <div className="signup-form">
        <h2>Sign up</h2>
        <SignupForm
          user={user}
          setUser={setUser}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          initialUserState={initialUserState}
        />
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
