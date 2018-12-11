import React from 'react';
import { NavLink, } from "react-router-dom";
import { Button, } from "semantic-ui-react";

const Navbar = () => (
  <nav>
    <NavLink exact to="/"><Button basic >Home</Button></NavLink>
    {' '}
    <NavLink exact to="/about"><Button basic>About</Button></NavLink>
    {' '}
    <NavLink exact to="/departments"><Button basic>Departments</Button></NavLink>
  </nav>
)

export default Navbar;