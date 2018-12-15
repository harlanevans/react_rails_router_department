import React from "react";
import { Link, } from "react-router-dom";
import { Segment, Header, Button, Icon, Rating} from "semantic-ui-react";


const SegmentReview = ({ reviewId, title, author, body, rating, remove, item_id }) => (
  <Segment raised>
    <Header as='h2' dividing>
      {title}
    </Header>
    <Header as='h3'>{author}:</Header>
    <Header.Subheader>
      {body}
    </Header.Subheader>
    <Rating floated='right' defaultRating={rating} maxRating={5} icon="star" />
    <hr />
      <Button basic color='black' animated='fade' onClick={() => remove(reviewId)}>
        <Button.Content visible>Delete Review</Button.Content>
        <Button.Content hidden> <Icon name='delete'></Icon> </Button.Content>
      </Button>
    <Link to={`/items/${item_id}/reviews/${reviewId}/edit`} >
      <Button floated='right' basic color='black' animated='fade'>
        <Button.Content visible>Edit Review</Button.Content>
        <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
      </Button>
    </Link>
  </Segment>



)

export default SegmentReview;