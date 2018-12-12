import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';
import styled from "styled-components";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then(res => {
        this.setState({ departments: res.data, });
      })
  }

  renderDepartments = () => {
    return this.state.departments.map(d => (
      <Link to={`/departments/${d.id}/items`}>
        <br />
        <Segment inverted>
          {d.name}
        </Segment>
      </Link>
    ));
  }


  render() {
    const { id } = this.state.departments;
    return (
      <div>
        <h1>
          Departments
        </h1>
        <br />
        <Link to="/departments/new">
          <Button color="black" >New Department</Button>
        </Link>
        <ul>
          {this.renderDepartments()}
        </ul>
      </div>
    )
  }
}



export default Departments;