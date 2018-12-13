import React from "react";
import { Link, } from "react-router-dom";
import { Segment, Header, Button, Icon } from "semantic-ui-react";


const SegmentItem = ({ id, title, description, price, remove, department_id}) => (
  <Segment.Group inverted >
    <Segment inverted>
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
      <Link to={`/departments/${department_id}/items/${id}/`} >
      <Button inverted color="white" animated='fade'>
        <Button.Content visible>View </Button.Content>
        <Button.Content hidden> <Icon name='view'></Icon> </Button.Content>
      </Button>
      </Link>
      <Button inverted color="white" animated='fade' onClick={() => remove(id)}>
        <Button.Content visible>Delete </Button.Content>
        <Button.Content hidden> <Icon name='trash'></Icon> </Button.Content>
      </Button>
      <Link to={`/departments/${department_id}/items/${id}/edit`}>
      <Button inverted color="white" animated='fade'>
        <Button.Content visible>Edit </Button.Content>
        <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
      </Button>
      </Link>
    </Segment>
  </Segment.Group>
)

export default SegmentItem;