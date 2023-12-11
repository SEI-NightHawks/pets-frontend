import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/users.js";
import { getPosts } from "./services/posts.js";
import { getMyPets } from "./services/pet.js";
import Home from "./screens/home/Home.jsx";
import Feed from "./screens/feed/Feed.jsx";
import Nav from "./components/Nav-home.jsx";
import Upload from "./screens/upload/Upload.jsx";
import NavLogin from "./components/Nav-login.jsx";
import NavSignup from "./components/Nav-signup.jsx";
import LoginPage from "./screens/loginpage/Loginpage.jsx";
import Signuppage from "./screens/signup/Signup.jsx";
import Createprofile from "./screens/createprofile/Createprofile.jsx";
import NavFeed from "./components/Nav-feed.jsx";
import NavModal from "./components/Nav-modal.jsx";
import NavProfile from "./components/Nav-profile.jsx";
import NavPersonalProfile from "./components/Nav-personal-profile.jsx";
import NavUpload from "./components/Nav-upload.jsx";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [posts, setPosts] = useState([]);
  const [primaryPet, setPrimaryPet] = useState(null);

  useEffect(() => {
    fetchUser();
    // fetchPets();
    fetchPosts();
  }, []);

  async function fetchUser() {
    const userData = await verifyUser();
    setUser(userData);
  }

  async function fetchPets() {
    const allPets = await getMyPets();
    setPets(allPets);
  }

  async function fetchPosts() {
    const allPosts = await getPosts();
    setPosts(allPosts);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/feed" element={<Feed posts={posts} />} />
        {/* <Route path="/" element={<Nav />} /> */}
        {/* <Route path="/login" element={<NavLogin />} /> */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<Signuppage setUser={setUser} />} />
        <Route path="/createprofile" element={<Createprofile />} />
        <Route path="/feed" element={<NavFeed pets={pets} />} />{" "}
        <Route path="/modal" element={<NavModal />} />
        <Route path="/profile" element={<NavProfile />} />
        <Route path="/personal-profile" element={<NavPersonalProfile />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
};

export default App;
