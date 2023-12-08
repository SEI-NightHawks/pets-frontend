import Post from "../../components/Post/Post.jsx";
import NavHome from "../../components/Nav-home.jsx";
import "./home.css";

function shuffleArray(array) {
  // Use the Fisher-Yates (aka Knuth) Shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Home({ posts }) {
  const shuffledPosts = shuffleArray([...posts]);

  return (
    <div>
      <NavHome />
      <h1>This is the Home page</h1>
      <div>
        {shuffledPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
