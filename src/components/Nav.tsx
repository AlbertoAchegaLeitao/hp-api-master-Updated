import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="linkwrapper">
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

      <div className="modebtn">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <i className="darkmode"></i>
          <i className="lightmode"></i>
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default Nav;
