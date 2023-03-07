import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/" className="active um">
        Home
      </Link>
      <Link to="/about" className="dois">
        About
      </Link>
      <Link to="/contact" className="três">
        Contact
      </Link>
    </div>
  );
};

export default Nav;
