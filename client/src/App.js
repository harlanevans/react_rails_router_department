import { Container, } from "semantic-ui-react";
import React, { Component, Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import Department from './components/Department';

const App = () => (

  <Container>
    <Fragment>
      <br />
      <Navbar />
      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/:id' component={Department} />
      </Switch>
    </Fragment>
  </Container>
);

export default App;
