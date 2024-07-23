import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="flex full-width space-between padding primary-bg">
      <h1>Logo</h1>
      <ul className="flex navbar-links space-between padding">
        <li>
          <Link to="/app">Home</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="create">create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
