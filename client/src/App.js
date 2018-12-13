import { Container, } from "semantic-ui-react";
import { AppContainer, } from './styles/AppStyles';


import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Departments from './components/Departments';
import Department from './components/Department';
import DepartmentForm from './components/DepartmentForm';
import ItemForm from './components/ItemForm';
import Item from './components/Item';




const App = () => (
  <AppContainer>
    <Container>
      <Fragment>
        <br />
        <Welcome />
        <br />
        <Navbar />
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/departments/new' component={DepartmentForm} />
          <Route exact path='/departments/:id' component={Department} />
          <Route exact path='/departments/:id/edit' component={DepartmentForm} />
          <Route exact path="/departments/:id/items/new" component={ItemForm} />
          <Route exact path="/departments/:id/items/:itemId" component={Item} />
          <Route exact path="/departments/:id/items/:itemId/edit" component={ItemForm} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </Container>
  </AppContainer>
);

export default App;
