import React from 'react';
import { NavLink, } from "react-router-dom";
import { Button, } from "semantic-ui-react";

const Navbar = () => (
  <nav>
    <NavLink exact to="/"><Button color="black" >Home</Button></NavLink>
    {' '}
    <NavLink exact to="/about"><Button color="black">About</Button></NavLink>
    {' '}
    <NavLink exact to="/departments"><Button color="black">Departments</Button></NavLink>
  </nav>
)

export default Navbar;