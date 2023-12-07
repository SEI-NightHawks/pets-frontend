// import { NavLink } from "react-router-dom";
// import React from "react";
// import "./Home-nav.css";

// const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="logo">Petstagram</div>
//         <div className="logo-image">
//           <img src="images/pets.png" alt="pets-logo" className="logo-image" />
//         </div>
//         <ul className="nav-links">
//           <li>
//             <a href="/">Log In</a>
//           </li>
//           <li>
//             <a href="/about">Sign Up</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// Nav.jsx
import { NavLink } from "react-router-dom";
import "./Home-Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Petstagram</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/feed">Feed</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
