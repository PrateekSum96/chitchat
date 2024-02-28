import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../features/userSlice";
import "./AsideRight.css";
import { followUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const AsideRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((store) => store.appUsers);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line
  }, []);

  const usersNotFollowing = allUsers?.filter(
    (x) => x._id !== user._id && user?.following?.every((u) => u._id !== x._id)
  );

  const handleFollowUser = (userId) => {
    dispatch(followUser(userId));
  };

  const goToUserDetail = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <div className="aside-right">
      <p className="aside-right-heading">Suggestions for you</p>
      <div>
        {usersNotFollowing?.slice(0, 5).map((user) => (
          <div className="aside-right-userlist" key={user._id}>
            <div onClick={() => goToUserDetail(user.username)}>
              <img src={user.avatarUrl} alt="userAvatar" />
              <div className="aside-right-user-info">
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>
                  {"@"}
                  {user.username}
                </p>
              </div>
            </div>
            <div>
              <button
                className="aside-right-follow-btn"
                onClick={() => handleFollowUser(user._id)}
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideRight;
