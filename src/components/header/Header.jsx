import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const { avatarUrl, firstName, username } = useSelector(
    (store) => store.auth.user
  );
  return (
    <header className="header">
      <div className="header-app-name">
        chit<span id="header-span-last-name">chat</span>
      </div>
      <div id="header-search">
        <input type="text" />
        <FaSearch id="search-icon" />
      </div>

      <div
        className="header-user-img"
        onClick={() => {
          navigate(`/user/${username}`);
        }}
      >
        <img src={avatarUrl} alt="userimage" />
        <span>{firstName}</span>
      </div>
    </header>
  );
};

export default Header;
