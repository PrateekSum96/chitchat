import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/authSlice";
import { useEffect } from "react";
import { getAllPosts } from "../../features/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line
  }, []);

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
