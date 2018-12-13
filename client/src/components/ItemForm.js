import React from "react";
import axios from "axios";
import { Form, Button, Icon } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { title: "", description: "", price: "", };
  
  componentDidMount() {
    const {id, itemId} = this.props.match.params;
    if (itemId)
    axios.get(`/api/departments/${id}/items/${itemId}`)
    .then(res => this.setState({ ...res.data, }))
  }


  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const { id, itemId } = this.props.match.params;
    // const { push } = this.props.history;
    const { match: { params: {id, itemId } }, history: { push, } }= this.props;


    if (itemId) {
      axios.put(`/api/departments/${id}/items/${itemId}`, {...this.state})
      .then(res => push(`/departments/${id}`))
  } else {
    axios.post(`/api/departments/${id}/items`, { ...this.state })
      .then( res => push(`/departments/${id}`))
  }}

  
  render() {
    const { title, description, price } = this.state;
    const { itemId } = this.props.match.params;

    return (
      <div>
        <h1>{itemId ? "Edit Item" : "Add Item"}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              name="title"
              placeholder="Title"
              label="Title"
              required
              value={title}
              onChange={this.handleChange}
            />
            <Form.Input 
              name="description"
              placeholder="Description"
              label="Description"
              required
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input 
              name="price"
              placeholder="Price"
              label="Price"
              required
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button color="black" animated='fade'>
          <Button.Content visible>
            Submit
          </Button.Content>
          <Button.Content hidden>
            <Icon name='check'/>
          </Button.Content>
          </Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;