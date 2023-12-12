import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts } from "./services/posts.js";
import { getPets } from "./services/pet.js";
import Home from "./screens/home/Home.jsx";
import Feed from "./screens/feed/Feed.jsx";
import Nav from "./components/Nav-home.jsx";
import Upload from "./screens/upload/Upload.jsx";
import NavLogin from "./components/Nav-login.jsx";
import NavSignup from "./components/Nav-signup.jsx";
import LoginPage from "./screens/loginpage/Loginpage.jsx";
import Signuppage from "./screens/signup/Signup.jsx";
import NavCreateProfile from "./components/Nav-create-profile.jsx";
import NavFeed from "./components/Nav-feed.jsx";
import NavModal from "./components/Nav-modal.jsx";
import NavProfile from "./components/Nav-profile.jsx";
import NavPersonalProfile from "./components/Nav-personal-profile.jsx";
import NavUpload from "./components/Nav-upload.jsx";
import "./App.css";
import Profile from "./screens/profile/profile.jsx";

const App = () => {
  const [pets, setPets] = useState([]);
  const [posts, setPosts] = useState([]);
  const [curatedPosts, setCuratedPosts] = useState([]);

  useEffect(() => {
    fetchPets();
    fetchPosts();
  }, []);

  async function fetchPets() {
    const allPets = await getPets();
    setPets(allPets);
  }

  async function fetchPosts() {
    const allPosts = await getPosts();
    setPosts(allPosts);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home posts={posts} pets={pets} />} />
        <Route path="/feed" element={<Feed posts={posts} pets={pets} />} />
        <Route path="/" element={<Nav />} />
        {/* <Route path="/login" element={<NavLogin />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/create-profile" element={<NavCreateProfile />} />
        <Route path="/feed" element={<NavFeed />} />
        <Route path="/modal" element={<NavModal />} />
        {/* <Route path="/profile" element={<NavProfile />} /> */}
        <Route path="/profile" element={<Profile />} />

        <Route path="/personal-profile" element={<NavPersonalProfile />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
};

export default App;
