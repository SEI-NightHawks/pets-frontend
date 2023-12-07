import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts } from "./services/posts.js";
import Nav from "./components/Nav.jsx";
import Home from "./screens/home/home.jsx";
import Feed from "./screens/feed/feed.jsx";
import "./App.css";
import NavLogin from "./components/Nav-login";
import NavSignup from "./components/Nav-signup";
import NavCreateProfile from "./components/Nav-create-profile";
import NavFeed from "./components/Nav-feed";
import Modal from "./components/Modal";
import NavProfile from "./components/Nav-profile";
import NavPersonalProfile from "./components/Nav-personal-profile";
import NavUpload from "./components/Nav-upload";

function App() {
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
      <Nav />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/feed" element={<Feed posts={posts} />} />
        <Route path="/login" element={<NavLogin />} />
        <Route path="/signup" element={<NavSignup />} />
        <Route path="/create-profile" element={<NavCreateProfile />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/profile" element={<NavProfile />} />
        <Route path="/personal-profile" element={<NavPersonalProfile />} />
        <Route path="/upload" element={<NavUpload />} />
      </Routes>
    </div>
  );
}

export default App;
