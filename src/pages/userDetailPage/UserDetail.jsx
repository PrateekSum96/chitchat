import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAUser, getAUserPost } from "../../features/userSlice";
import UserInfo from "../../components/userDetail/UserInfo";
import UserPost from "../../components/userDetail/UserPost";

const UserDetail = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  //   const userInfo = useSelector((store) => store.appUsers);

  useEffect(() => {
    dispatch(getAUser(username));
    dispatch(getAUserPost(username));
    // eslint-disable-next-line
  }, [username]);

  return (
    <div>
      {username}
      <UserInfo />
      <UserPost />
    </div>
  );
};

export default UserDetail;
