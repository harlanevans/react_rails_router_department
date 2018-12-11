import React from 'react';
import axios from 'axios';

import { Link, } from "react-router-dom";
import { Button, } from "semantic-ui-react";

class Department extends React.Component {
  state = { department: {} };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then(res => {
        this.setState({ department: res.data, });
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
    const { id, name,  } = this.state.department;
    let { title,  } = this.props;


    return (
      <div>
        <h1>
          {name}
        </h1>
      <br />
      <Link to={`/departments/${id}/edit`}>
          <Button basic >Edit Department</Button>
        </Link>
        <Link to={{pathname: `/api/departments/${id}/items`, state: {item: title} }}> </Link>
       <Button basic onClick={this.handleDelete}>Delete</Button>
      </div >
    )
  }
}

// render () {
//   let {name, id, start, end} = this.props;
//   return (
//     <>
//       <Link to={{pathname: `/trips/${id}/locations`, state: {location: name} }}>
//           <div className="trip">
//               <h3>{name}</h3>
//               <hr />
//               <div className="dates">
//                 <p>Start: {start}</p>
//                 <p>End: {end}</p>
//               </div>
//           </div>
//       </Link>

export default Department;