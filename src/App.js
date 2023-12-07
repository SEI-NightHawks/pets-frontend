// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav.jsx";
// import Home from "./screens/home/home.jsx";
// import Feed from "./screens/feed/feed.jsx";
// import "./App.css";
// import { Login } from "./path-to-login-component";
// import { SignUp } from "./path-to-signup-component";

// function App() {
//   return (
//     <div>
//       {/* <p>Heyyyyyy</p> */}
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/feed" element={<SignUp />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import NavLogin from "./Nav-login";
import NavSignup from "./Nav-signup";
import NavCreateProfile from "./Nav-create-profile";
import NavFeed from "./Nav-feed";
import Modal from "./Modal";
import NavProfile from "./Nav-profile";
import NavPersonalProfile from "./Nav-personal-profile";
import NavUpload from "./Nav-upload";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<NavLogin />} />
        <Route path="/signup" element={<NavSignup />} />
        <Route path="/create-profile" element={<NavCreateProfile />} />
        <Route path="/feed" element={<NavFeed />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/profile" element={<NavProfile />} />
        <Route path="/personal-profile" element={<NavPersonalProfile />} />
        <Route path="/upload" element={<NavUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
