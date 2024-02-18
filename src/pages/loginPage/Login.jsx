import AppName from "../../components/appName/AppName";
import Login from "../../components/login/LoginComponent";
import { LOGIN_PAGE_IMAGE } from "../../utils/URL";
import "./Login.css";
const Auth = () => {
  return (
    <div className="login-page">
      <img src={LOGIN_PAGE_IMAGE} alt="img" className="login-page-image" />
      <div className="login">
        <AppName />
        <Login />
      </div>
    </div>
  );
};

export default Auth;
