import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import {  Segment, Button } from "semantic-ui-react";
// import { HeaderText } from "./styles/AppStyles";
class Items extends React.Component {
  state = { 
    departments: [],
    items: [], 
    departmentName: "", 
  };
  
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      }) 
      .catch(err => {
        console.log(err);
      })
      this.getDepartment();
  }

  renderItems = () => {
    return this.state.items.map(i => (
      <div>
      <br />
        <Segment inverted raised>
        <h3> 
          Title: 
         <br />
        {i.title} 
        </h3> 
         <h5> 
           Description: 
         <br />
         {i.description}
         </h5>
         <br />
         <h5>
         ${i.price}
         </h5>
         </Segment>
         </div>
    ));
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments");
      })
  }

  getDepartment = () => {
    let {id} = this.props.match.params;
    axios.get(`/api/departments/${id}`)
    .then(res => {
      this.setState({
        departmentName: res.data.name
      })
    })
  }


  render() {
    let { id, departmentName} = this.state;
    return (
      <div>
        <h1>
          {departmentName}
          </h1>
          <Link to={`/departments/${id}/items/edit`}>
          <Button color="black">Edit Department</Button>
        </Link>
        <Link to={`/api/departments/${id}/items`}></Link>
       <Button color="black" onClick={this.handleDelete}>Delete</Button>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}


export default Items;