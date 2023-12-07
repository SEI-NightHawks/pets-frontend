import Post from "../../components/Post/Post";
import "./feed.css";

function Feed({ posts }) {
  return (
    <div>
      <h1>This is the Feed page</h1>
      <div>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
