import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts } from "./services/posts.js";
import Home from "./screens/home/Home.jsx";
import Feed from "./screens/feed/feed.jsx";
import Nav from "./components/Nav-home.jsx";
import NavLogin from "./components/Nav-login.jsx";
import NavSignup from "./components/Nav-signup.jsx";
import NavCreateProfile from "./components/Nav-create-profile.jsx";
import NavFeed from "./components/Nav-feed.jsx";
import NavModal from "./components/Nav-modal.jsx";
import NavProfile from "./components/Nav-profile.jsx";
import NavPersonalProfile from "./components/Nav-personal-profile.jsx";
import NavUpload from "./components/Nav-upload.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [curatedPosts, setCuratedPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const allPosts = await getPosts();
    setPosts(allPosts);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/feed" element={<Feed posts={posts} />} />
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<NavLogin />} />
        <Route path="/signup" element={<NavSignup />} />
        <Route path="/create-profile" element={<NavCreateProfile />} />
        <Route path="/feed" element={<NavFeed />} />
        <Route path="/modal" element={<NavModal />} />
        <Route path="/profile" element={<NavProfile />} />
        <Route path="/personal-profile" element={<NavPersonalProfile />} />
        <Route path="/upload" element={<NavUpload />} />
      </Routes>
    </div>
  );
};

export default App;
