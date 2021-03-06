import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        VOLKSWAGEN
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <span className="nav-link">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">
              <span className="nav-link">SignUp</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hoc">
              <span className="nav-link">HOC</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/redux">
              <span className="nav-link">Redux</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
