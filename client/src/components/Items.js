import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';

class Items extends React.Component {
  state = { items: [], }
  
  componentDidMount() {
    axios.get(`/api/departments/${department.id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      }) 
  }

  renderItems = () => {
    return this.state.items.map(i => (
      <Link to={`/departments/${department.id}/items/${id}`}>
      <br />
        <Segment raised>
         {i.title}  
         {i.description}
         {i.price}
         </Segment>
      </Link>
    ));
  }


  render() {
    return (
      <div>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}


export default Items;