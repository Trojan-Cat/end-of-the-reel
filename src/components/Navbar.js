import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Navbar = () => (
  <div className=" center">
    <div className="nav ui black inverted large menu ">
      <NavLink className="item" exact to="/" name="home">
        <p>Home</p>
      </NavLink>

      <NavLink className="item" to="/About" name="About">
        <p>About</p>
      </NavLink>
    </div>
  </div>
);

export default Navbar;
