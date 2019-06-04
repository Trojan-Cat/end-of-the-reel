import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <Container>
      <Menu secondary stackable widths={2}>
        <Menu.Item as={NavLink} exact to="/" name="home">
          <Icon name="home" size="large" />
          <p>Home</p>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about" name="about">
          <Icon name="dashboard" size="large" />
          <p>About</p>
        </Menu.Item>
      </Menu>
    </Container>
  </div>
);

export default Navbar;
