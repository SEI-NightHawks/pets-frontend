import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Routes>
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
  );
};

export default App;
