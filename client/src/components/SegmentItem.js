import React from "react";
import { Link, } from "react-router-dom";
import { Segment, Header, Button, Icon } from "semantic-ui-react";


const SegmentItem = ({ id, title, description, price, remove, department_id}) => (
  <Segment.Group >
    <Segment raised
    color='black'>
      <Header as='h3'>
        Title:
     <br />
        <i>
          {title}
        </i>
      </Header>
      <Header.Subheader>
        Description:
     <br />
        <i>
          {description}
        </i>
      </Header.Subheader>
      <br />
      <p><i>
        ${price}
      </i>
      </p>
      <Segment basic clearing>
      <Link to={`/departments/${id}/items/new`}>
    <Button basic color='black' floated='right' animated='fade'>
        <Button.Content visible>New </Button.Content>
        <Button.Content hidden> <Icon name='add'></Icon> </Button.Content>
    </Button>
      </Link>
      <Link to={`/departments/${department_id}/items/${id}/`} >
      <Button basic color='black' animated='fade' floated='left'>
        <Button.Content visible>View </Button.Content>
        <Button.Content hidden> <Icon name='book'></Icon> </Button.Content>
      </Button>
      </Link>
      <Button basic color='black' animated='fade' onClick={() => remove(id)}>
        <Button.Content visible>Delete </Button.Content>
        <Button.Content hidden> <Icon name='trash'></Icon> </Button.Content>
      </Button>
      <Link to={`/departments/${department_id}/items/${id}/edit`}>
      <Button basic color='black' animated='fade' floated='right'>
        <Button.Content visible>Edit </Button.Content>
        <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
      </Button>
      </Link>
    </Segment>
  </Segment>
  </Segment.Group>
)

export default SegmentItem;