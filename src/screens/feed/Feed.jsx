import Post from "../../components/Post/Post.jsx";
import NavFeed from "../../components/Nav-feed.jsx";
import "./feed.css";
import "../../components/Nav-feed.css";
import FloatingBottomNav from "../../components/footer/FloatingBottomNav.jsx";

function Feed({ posts }) {
  const sortedPosts = posts.slice().sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div>
      <NavFeed />
      <div>
        {sortedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <FloatingBottomNav />
    </div>
  );
}

export default Feed;
