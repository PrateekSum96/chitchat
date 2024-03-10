import { useSelector } from "react-redux";
import "./PostList.css";

const PostList = ({ posts }) => {
  const users = useSelector((store) => store.appUsers.allUsers);
  const getImageURL = (username) => {
    const { avatarUrl } = users.find((user) => user.username === username);
    return avatarUrl;
  };

  const dateFormatter = (postDate) => {
    const inputDate = new Date(postDate);
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const outputDateString = formatter.format(inputDate);
    return outputDateString;
  };

  const checkMedia = (mediaUrl) => {
    return mediaUrl.includes("video");
  };
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-container" key={post._id}>
          <div className="post-user-info">
            <img
              src={getImageURL(post.username)}
              alt="user-avatar"
              id="post-avatar"
            />
            <div id="post-user-name">
              <span>
                {post.firstname} {post.lastname}
              </span>
              <span>
                {"@"}
                {post.username}
              </span>
            </div>
            <div id="post-date">{dateFormatter(post.createdAt)}</div>
          </div>
          <div id="post-content">
            <div id="post-text">{post.content}</div>
            <div id="post-media">
              {checkMedia(post.mediaURL) ? (
                <video controls id="post-video">
                  <source src={post.mediaURL} type="video/mp4" />
                </video>
              ) : (
                post.mediaURL && (
                  <img src={post.mediaURL} alt="post-media" id="post-img" />
                )
              )}
            </div>
          </div>
          <div>Check</div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
