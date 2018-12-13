import React from 'react';
import { NavLink, } from "react-router-dom";
import { Button, Segment, Icon } from "semantic-ui-react";

const Navbar = () => (
  <div>
    <nav>
      <NavLink exact to="/">
      <Button color="black" animated='vertical' >
      <Button.Content visible >Home</Button.Content>
      <Button.Content hidden ><Icon name='home' /></Button.Content>
      </Button></NavLink>
      {' '}
      <NavLink exact to="/about">
      <Button color="black" animated='vertical'>
      <Button.Content visible >About</Button.Content>
      <Button.Content hidden ><Icon name='question' /></Button.Content>
      </Button></NavLink>

      {' '}
      <NavLink exact to="/departments">
      <Button color="black" animated='vertical'>
      <Button.Content visible>Departments</Button.Content>
      <Button.Content hidden><Icon name='book' /></Button.Content>
      </Button></NavLink>
      {' '}

    </nav>
  </div>
)

// const styles = {
//   active: {
//     color: "orange",
//     fontWeight: "bold",
//   }
// }

export default Navbar;