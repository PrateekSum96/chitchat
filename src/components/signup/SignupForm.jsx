import React from "react";
import checkValidate from "../../utils/validate";
import { useDispatch } from "react-redux";
import { handleSignUp } from "../../features/authSlice";

import "./SignupComponent.css";

const SignupForm = (props) => {
  const dispatch = useDispatch();

  const { user, setUser, errorMessage, setErrorMessage } = props;
  const { firstName, lastName, username, email, password, confirmPassword } =
    user;

  const handleSignUpButton = () => {
    if (password === confirmPassword) {
      const message = checkValidate(email, password);
      setErrorMessage(message);
      if (message) {
        return;
      }

      dispatch(
        handleSignUp({ username, password, email, firstName, lastName })
      );
    } else {
      setErrorMessage("Passwords are not matching!");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUpButton();
      }}
    >
      <div className="label-input">
        <label htmlFor="first-name">
          First Name<span className="ast">*</span>
        </label>
        <input
          type="text"
          id="first-name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          value={firstName}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="last-name">
          Last Name<span className="ast">*</span>
        </label>
        <input
          type="text"
          dvv
          id="last-name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          value={lastName}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="username">
          User Name<span className="ast">*</span>
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          value={username}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="signup-email">
          Email<span className="ast">*</span>
        </label>
        <input
          type="email"
          id="signup-email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={email}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="signup-password">
          Password<span className="ast">*</span>
        </label>
        <input
          type="text"
          id="signup-password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={password}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="confirm-password">
          Confirm Password<span className="ast">*</span>
        </label>
        <input
          type="text"
          id="confirm-password"
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          value={confirmPassword}
          required
        />
      </div>
      <div className="signup-error">{errorMessage}</div>
      <button className="signup-btn" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
