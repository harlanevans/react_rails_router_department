import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Button, Icon } from 'semantic-ui-react';

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => this.setState({ departments: res.data, }));
  }

  renderDepartments = () => {
    return this.state.departments.map(d => (
      <Link to={`/departments/${d.id}`}>
        <br />
        <Segment
        raised
        color='black'
        >
          {d.name}
        </Segment>
      </Link>
    ))
  }


  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Departments
        </h1>
        <br />
        <Link to="/departments/new">
          <Button basic color='black' animated='fade' >
          <Button.Content visible>New Department </Button.Content>
              <Button.Content hidden> <Icon name='add' /> </Button.Content>
            </Button>
        </Link>
        <ul>
          {this.renderDepartments()}
        </ul>
      </div>
    )
  }
}



export default Departments;