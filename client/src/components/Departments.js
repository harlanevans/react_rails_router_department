import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';
import styled from "styled-components";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      }) 
  }

  renderDepartments = () => {
    return this.state.departments.map(d => (
      <Link to={`/departments/${d.id}/items`}>
      <br />
        <Segment as ={Transparent}
        raised> 
        {d.name} 
        </Segment>
      </Link>
    ));
  }


  render() {
    return (
      <div>
        <h1>
          Departments
        </h1>
        <br />
        <Link to="/departments/new">
          <Button basic >New Department</Button>
        </Link>
        <ul>
          {this.renderDepartments()}
        </ul>
      </div>
    )
  }
}

const Transparent = styled.div`
  background: transparent !important;
`;

export default Departments;