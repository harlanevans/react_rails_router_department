import React from 'react';
import { NavLink, } from "react-router-dom";
import { Button, } from "semantic-ui-react";

const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active.area} to="/"><Button>Home</Button></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active.area} to="/about"><Button>About</Button></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active.area} to="/departments"><Button>Departments</Button></NavLink>
  </nav>
)

const styles = {
  active: {

    textDecoration: "italic",
    fontWeight: "bold",
    color: "blue",
  },
  area: {
    display: "flex",
    justifyContent: "center",
  }
};

export default Navbar;