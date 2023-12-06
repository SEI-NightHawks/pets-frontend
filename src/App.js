import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./screens/home/home.jsx";
import Feed from "./screens/feed/feed.jsx";
import "./App.css";

function App() {
  return (
    <div>
      {/* <p>Heyyyyyy</p> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
