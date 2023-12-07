import Post from "../../components/Post/Post";
import "./home.css";

function Home({ posts }) {
  return (
    <div>
      <h1>This is the Home page</h1>
      <div>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
