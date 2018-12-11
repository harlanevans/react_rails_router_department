import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import {  Segment, } from "semantic-ui-react";
// import { HeaderText } from "./styles/AppStyles";
class Items extends React.Component {
  state = { 
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
        <Segment raised>
        <h3> 
          Title: 
        {i.title} 
        </h3> 
         <br />
         <h5> 
           Description: 
         <br />
         {i.description}
         </h5>
         <br />
         <h5>
         {i.price}
         </h5>
         </Segment>
         </div>
    ));
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
    let {departmentName} = this.state;
    return (
      <div>
        <h1>
          {departmentName}
          </h1>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}


export default Items;