import React from 'react';
import { NavLink, } from "react-router-dom";


const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active.area} to="/">Home</NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active.area} to="/about">About</NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active.area} to="/departments">Departments</NavLink>
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