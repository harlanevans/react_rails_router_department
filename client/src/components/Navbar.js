import React from 'react';
import { NavLink, } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const Navbar = () => (
  <div>
    <nav>
      <NavLink exact to="/">
      <Button basic color='black' animated='vertical' >
      <Button.Content visible >Home</Button.Content>
      <Button.Content hidden ><Icon name='home' /></Button.Content>
      </Button></NavLink>
      {' '}
      <NavLink exact to="/about">
      <Button basic color='black' animated='vertical'>
      <Button.Content visible >About</Button.Content>
      <Button.Content hidden ><Icon name='question' /></Button.Content>
      </Button></NavLink>

      {' '}
      <NavLink exact to="/departments">
      <Button basic color='black' animated='vertical'>
      <Button.Content visible>Departments</Button.Content>
      <Button.Content hidden><Icon name='book' /></Button.Content>
      </Button></NavLink>
      {' '}
      <Button
  
  animated='vertical'
  floated='right'
  basic color='black'
  // size='huge'
>
  <Button.Content visible>Coffee From</Button.Content>
  <Button.Content hidden>Middle Earth </Button.Content>
</Button>
    </nav>
  </div>
)


export default Navbar;