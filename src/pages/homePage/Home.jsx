import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        signup
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Sign Out
      </button>
      <div></div>
    </div>
  );
};

export default Home;
