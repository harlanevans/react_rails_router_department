import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

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
      <Link to={`/departments/${d.id}`}>
      <br />
        <Segment raised> {d.name} </Segment>
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
          <Button raised >New Department</Button>
        </Link>
        <ul>
          {this.renderDepartments()}
        </ul>
      </div>
    )
  }
}
export default Departments;