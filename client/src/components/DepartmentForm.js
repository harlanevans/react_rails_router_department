import React from 'react';
import axios from "axios";
import { Button, Form, Icon } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id)
      axios.get(`/api/departments/${id} `)
        .then(res => {
          const { name, } = res.data;
          this.setState({ name, });
        })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = { ...this.state };
    const { id } = this.props.match.params;
    if (id) {
      axios.put(`/api/departments/${id}`, name)
        .then(res => {
          this.props.history.push(`/departments/${id}`)
        })
    } else {
      axios.post("/api/departments", name)
        .then(res => {
          this.props.history.push('/departments')
        })
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`/api/departments`, { ...this.state })
  //     .then( res => this.props.history.push(`/departments/${res.data.id}`))
  // }


  render() {
    const { name, } = this.state;
    return (
      <div>
        <h1>Add Department</h1>
        <Form onSubmit={this.handleSubmit}>
          <br />
          <Form.Input
            name="name"
            placeholder="Name"
            label="Name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <br />
          <Button basic inverted color='white' animated='fade'>
            <Button.Content visible>Submit </Button.Content>
            <Button.Content hidden> <Icon name='check' /> </Button.Content>
          </Button>
        </Form>
      </div>
    )
  }
}


export default DepartmentForm;
