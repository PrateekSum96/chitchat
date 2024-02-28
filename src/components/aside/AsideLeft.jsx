import { NavLink } from "react-router-dom";
import { MdExplore } from "react-icons/md";
import { GoHeartFill, GoHomeFill, GoBookmarkFill } from "react-icons/go";
import "./Aside.css";

const AsideLeft = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "black" : "",
    backgroundColor: isActive ? "rgb(150, 150, 225)" : "",
    // border: isActive ? "2px solid rgb(83, 83, 238)" : "",
    borderRadius: "1rem",
  });
  return (
    <div className="aside-left">
      <NavLink to="/" style={getActiveStyle} className="aside-left-link">
        <GoHomeFill className="icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/explore" style={getActiveStyle} className="aside-left-link">
        <MdExplore className="icon" /> <span>Explore</span>
      </NavLink>
      <NavLink
        to="/bookmark"
        style={getActiveStyle}
        className="aside-left-link"
      >
        <GoBookmarkFill className="icon" />
        <span>Bookmarks</span>
      </NavLink>
      <NavLink
        to="/likepost"
        style={getActiveStyle}
        className="aside-left-link"
      >
        <GoHeartFill className="icon" />
        <span>Liked Page</span>
      </NavLink>

      <button className="aside-left-btn-post">Post</button>
    </div>
  );
};

export default AsideLeft;
