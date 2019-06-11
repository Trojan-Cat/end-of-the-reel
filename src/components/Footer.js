import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" ui inverted vertical segment ">
      <div className="ui container ">
        <NavLink className="item" to="/About" name="About">
          <div className="column">About</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
