import React from 'react';
import axios from 'axios';
import { Link, } from "react-router-dom";
import { Button, } from "semantic-ui-react";

class Department extends React.Component {
  state = { department: {}, items: [] };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then(res => {
        this.setState({ department: res.data,  });
      })
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments");
      })
  }

  
  render() {
    const { id, name, } = this.state.department;
    return (
      <div>
        <h1>
          {name}
        </h1>
      <br />
      <Link to={`/departments/${id}/edit`}>
          <Button basic >Edit Department</Button>
        </Link>
        <Link to={`/api/departments/${id}/items`}></Link>
       <Button basic onClick={this.handleDelete}>Delete</Button>
      </div >
    )
  }
}

export default Department;