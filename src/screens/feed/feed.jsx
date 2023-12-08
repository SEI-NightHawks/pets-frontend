import Post from "../../components/Post/Post";
import NavFeed from "../../components/Nav-feed.jsx";
import "./feed.css";
import "../../components/Nav-feed.css";

function Feed({ posts }) {
  return (
    <div>
      <NavFeed />
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
