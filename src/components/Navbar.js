import React from "react";
//import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./menu.css";

/*
const Navbar = () => (
  <div>
    <Segment inverted>
      <Menu inverted pointing secondary fluid widths={2}>
        <Menu.Item as={NavLink} exact to="/" name="home">
          <p>Home</p>
        </Menu.Item>

        <Menu.Item as={NavLink} to="/About" name="About">
          <p>About</p>
        </Menu.Item>
      </Menu>
    </Segment>
  </div>
);
*/

const Navbar = () => (
  <div>
    <div className="nav ui red menu">
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
