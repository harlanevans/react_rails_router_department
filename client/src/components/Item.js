import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, Icon, Rating, } from 'semantic-ui-react';
import SegmentReview from './SegmentReview';

class Item extends React.Component {
  state = { item: {}, reviews: [], };

  componentDidMount() {
    const { match: { params: { id, itemId } } } = this.props;
    axios.get(`/api/departments/${id}/items/${itemId}`)
      .then(res => this.setState({ item: res.data, }))

    axios.get(`/api/items/${itemId}/reviews`)
      .then(res => this.setState({ reviews: res.data, }))
  }

  renderReviews = () => {
    return this.state.reviews.map(r => (
      <SegmentReview key={r.reviewId} {...r} remove={this.removeReview} />
    )) 
  }

  removeReview = (reviewId) => {
    const remove = window.confirm("Are you sure you want to delete this item?");
    if (remove)
    axios.delete(`/api/items/${this.props.itemId}/reviews/${reviewId}`)
    .then(res => {
      const reviews = this.state.reviews.filter(r => {
        if (r.id !== reviewId)
        return r;
      })
      this.setState({reviews})
    })
  }

  render() {
    const { reviewId, title, description, price, } = this.state.item;
    return (
      <div>
        <Link to='/departments'>
          <Button basic color='black' animated='fade'>
            <Button.Content visible>Back to Department</Button.Content>
            <Button.Content hidden> <Icon name='arrow alternate circle left outline'></Icon> </Button.Content>
          </Button>
        </Link>

        <h1 style={{ textAlign: 'center' }}>Item</h1>

        <Segment basic color='black'>
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
        </Segment>
        <Segment basic>
          <h1 style={{ textAlign: "center" }}>Reviews</h1>
          <Link to={`/items/${reviewId}/reviews/new`}>
          <Button basic color='black' animated='fade'>
          <Button.Content visible>Leave a Review</Button.Content>
          <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
        </Button>
          </Link>
          <hr />
          {this.renderReviews()}

        </Segment>

      </div>
    )
  }
}

export default Item;