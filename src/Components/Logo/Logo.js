import React from "react";
import "./Logo.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
    </div>
  );
};
export default Logo;
