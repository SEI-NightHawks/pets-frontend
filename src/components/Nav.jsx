import { NavLink } from "react-router-dom";

function Nav({ title }) {
  return (
    <nav className="navbar">
      <div className="nav-title">Petstagram</div>
      {title === "home" ? (
        <NavLink className="nav-item" to="/Login">
          Login
        </NavLink>
      ) : (
        <NavLink className="nav-item" to="/Signup">
          Sign Up
        </NavLink>
      )}
    </nav>
  );
}

export default Nav;
