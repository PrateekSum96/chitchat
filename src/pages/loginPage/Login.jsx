import AppName from "../../components/appName/AppName";
import LoginComponent from "../../components/login/LoginComponent";
import { LOGIN_PAGE_IMAGE } from "../../utils/URL";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-page">
      <img src={LOGIN_PAGE_IMAGE} alt="img" className="login-page-image" />
      <div className="login">
        <AppName />
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
