import { Container, Header } from "semantic-ui-react";
import { AppContainer, } from './styles/AppStyles';


import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Lotr from './components/Lotr';
import Departments from './components/Departments';
import Department from './components/Department';
import DepartmentForm from './components/DepartmentForm';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import ReviewForm from './components/ReviewForm';
import Review from './components/Review';




const App = () => (
  <AppContainer>
    <Container>
      <Fragment>
        <br />
        <Header size='huge'
        textAlign='center'
        basic color='black'
        >
          Welcome
        </Header>

        <br />
        <Navbar />
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/lotr' component={Lotr} />
          <Route exact path='/about' component={About} />
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/departments/new' component={DepartmentForm} />
          <Route exact path='/departments/:id' component={Department} />
          <Route exact path='/departments/:id/edit' component={DepartmentForm} />
          <Route exact path="/departments/:id/items/new" component={ItemForm} />
          <Route exact path="/departments/:id/items/:itemId" component={Item} />
          <Route exact path="/departments/:id/items/:itemId/edit" component={ItemForm} />
          <Route exact path="/items/:itemId/reviews/new" component={ReviewForm} />
          <Route exact path="/items/:itemId/reviews/:reviewId" component={Review} />
          <Route exact path="/items/:itemId/reviews/:reviewId/edit" component={ReviewForm} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </Container>
  </AppContainer>
);

export default App;
