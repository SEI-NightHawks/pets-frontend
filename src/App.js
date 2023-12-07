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
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Home-nav.jsx";
import Home from "./screens/home/home.jsx";
import Feed from "./screens/feed/feed.jsx";
import { Login } from "./components/Nav-login.jsx";
import { SignUp } from "./components/Home-nav.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
