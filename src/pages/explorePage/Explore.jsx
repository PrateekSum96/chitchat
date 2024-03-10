import { useSelector } from "react-redux";
import "./Explore.css";
import PostList from "../../components/postList/PostList";

const Explore = () => {
  const { posts, status } = useSelector((store) => store.posts);
  return (
    <div className="explore">
      <p id="explore-heading">Explore</p>
      <PostList posts={posts} />
    </div>
  );
};

export default Explore;
