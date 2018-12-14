import React from 'react';
import axios from 'axios';
import { Link, } from "react-router-dom";
import { Button, Segment, Icon } from "semantic-ui-react";
import SegmentItem from './SegmentItem';

class Department extends React.Component {
  state = { dep: {}, items: [], };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then(res => this.setState({ dep: res.data, }))
    axios.get(`/api/departments/${id}/items`)
      .then(res => this.setState({ items: res.data, }))
  }

  handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to delete this department?")
    if (remove)
      axios.put(`/api/departments/${id}`)
        .then(res => this.props.history.push("/departments"))
  }
  
  removeItem = (id) => {
    const remove = window.confirm("Are you sure you want to delete this item?");
    const dId = this.props.match.params.id;
    if (remove)
      axios.delete(`/api/departments/${dId}/items/${id}`)
      .then(res => {
        const items = this.state.items.filter(i => {
            if (i.id !== id)
            return i;
          })
          this.setState({ items, });
        })
      }
      
      renderItems = () => {
        return this.state.items.map(i => (
          <SegmentItem key={i.id} {...i} remove={this.removeItem} />
        ))
      }

  render() {
    const { dep: { id, name, }, } = this.state;
    return (
      <div>
        <Button basic color='black' animated='fade' onClick={() => this.handleDelete(id)}>
        <Button.Content visible>Delete Department</Button.Content>
              <Button.Content hidden> <Icon name='trash' /> </Button.Content>
            </Button>
        <Link to={`/departments/${id}/edit`}>
          
          <Button basic color='black' animated='fade'>
          <Button.Content visible>Edit Department </Button.Content>
              <Button.Content hidden> <Icon name='edit' /> </Button.Content>
            </Button>
        </Link>
        <h1>
          {name}
        </h1>
        <Link to={`/departments/${id}/items/new`}>
        <Button  
        basic color='black'
        animated='fade'>
        <Button.Content visible>New Item</Button.Content>
        <Button.Content hidden><Icon name='add' />
        </Button.Content>
        </Button>
        </Link>
        <ul>
          {this.renderItems()}
        </ul>
        <br />
      </div >
    )
  }
}

export default Department;