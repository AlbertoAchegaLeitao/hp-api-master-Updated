import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { AppContext } from "../context/appmode";

const Nav = () => {
  const { isChecked, isBallOnRight, toggleCheckbox } = useContext(AppContext);

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
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <label htmlFor="checkbox" className="label">
          <i className="darkmode"></i>
          <i className="lightmode"></i>
          <div className={`ball ${isBallOnRight ? "on-right" : ""}`}></div>
        </label>
      </div>
    </div>
  );
};

export default Nav;
