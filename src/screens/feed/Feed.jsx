import Post from "../../components/Post/Post.jsx";
import NavRest from "../../components/Nav-rest.jsx";
import "./feed.css";
import FloatingBottomNav from "../../components/footer/FloatingBottomNav.jsx";

function Feed({ posts }) {
  const sortedPosts = posts.slice().sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div>
      <NavRest />
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
