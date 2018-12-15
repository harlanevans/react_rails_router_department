import React from 'react';
import axios from 'axios';
import { Form, Button, Icon, } from "semantic-ui-react";

class ReviewForm extends React.Component {
  state = { title: "", body: "", author: "", rating: "", };

  componentDidMount() {
    const { itemId, reviewId } = this.props.match.params;
    if (reviewId)
      axios.get(`api/items/${itemId}/reviews/${reviewId}`)
        .then(res => this.setState({ ...res.data }))
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e)  => {
    e.preventDefault();
    const {match: {params: {itemId, id } }, history: {push, } } = this.props;
    if (id) {
      axios.put(`/api/items/${itemId}/reviews/${id}`, {...this.state})
      .then( res => push(`/items/${itemId}`))
    } else {
      axios.post(`/api/items/${itemId}/reviews`, {...this.state})
      .then(res => push(`/items/${itemId}`))
    }}


  render() {
    const { title, body, author, rating, } = this.state;
    
    return (
      <div> TEST FORM
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
              </Form.Group>
              <Form.Group widths='equal'>
            <Form.Field
              name="body"
              placeholder="Body"
              label="Body"
              required
              value={body}
              onChange={this.handleChange}
            />
            <Form.Input
              name="author"
              placeholder="Author"
              label="Author"
              required
              value={author}
              onChange={this.handleChange}
              />
            <Form.Rating
              name="rating"
              placeholder="Rating"
              label="Rating"
              value={rating}
              onChange={this.handleChange}
              />
          </Form.Group>
          <Button basic inverted color='white' animated='fade'>
            <Button.Content visible>
              Submit
          </Button.Content>
            <Button.Content hidden>
              <Icon name='check' />
            </Button.Content>
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReviewForm;