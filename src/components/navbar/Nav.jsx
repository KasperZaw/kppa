import React from "react";
import "./nav.scss";
import logo from "../../assets/images/logo-white-no-text.png";
import Toggle from "../switch/Toggle";
const Nav = () => {
  return (
    <nav>
      <div className="nav-items">
        <Toggle />
      </div>
      <img src={logo} alt="logo" />
      <div className="dummy-div"></div>
    </nav>
  );
};

export default Nav;
