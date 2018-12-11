import React from 'react';
import axios from 'axios';
import { Link, } from "react-router-dom";
import { Segment, } from "semantic-ui-react";

class Department extends React.Component {
  state = { department: {} };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then(res => {
        this.setState({ department: res.data, });
      })
  }

  render() {
    const { name } = this.state.department;

    return (
      <div>
        <h1>
          {name}
        </h1>
      <br />
      {/* I'll need to render some Items here */}
      </div >
    )
  }
}

export default Department;