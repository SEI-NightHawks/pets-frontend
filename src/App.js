import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts } from "./services/posts.js";
import Nav from "./components/Nav.jsx";
import Home from "./screens/home/home.jsx";
import Feed from "./screens/feed/feed.jsx";
import "./App.css";

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
      </Routes>
    </div>
  );
}

export default App;
