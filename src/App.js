import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/users.js";
import { getPosts } from "./services/posts.js";
import { getMyPets } from "./services/pet.js";
import Home from "./screens/home/Home.jsx";
import Feed from "./screens/feed/Feed.jsx";
import Upload from "./screens/upload/Upload.jsx";
import LoginPage from "./screens/loginpage/Loginpage.jsx";
import Signuppage from "./screens/signup/Signup.jsx";
import Createprofile from "./screens/createprofile/Createprofile.jsx";
//import NavFeed from "./components/Nav-feed.jsx";
import Profile from "./screens/profile/Profile.jsx";
import "./App.css";

// import Bottomfooter from './components/footer/FloatingBottomNav.jsx';
const App = () => {
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [posts, setPosts] = useState([]);
  const [primaryPet, setPrimaryPet] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
      fetchPets();
    }

    fetchPosts();
  }, []);

  async function fetchUser() {
    const userData = await verifyUser();
    setUser(userData);
  }

  async function fetchPets() {
    const allPets = await getMyPets();
    setPets(allPets);
    setPrimaryPet(allPets[0]);
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
        <Route
          path="/createprofile"
          element={<Createprofile user={user} setPets={setPets} />}
        />
        {/* <Route path="/feed" element={<NavFeed pets={pets} />} />{" "} */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route
          path="/profile"
          element={<Profile setPrimaryPet={setPrimaryPet} pets={pets} />}
        />
        <Route path="/upload" element={<Upload primaryPet={primaryPet} />} />
      </Routes>
    </div>
  );
};

export default App;
