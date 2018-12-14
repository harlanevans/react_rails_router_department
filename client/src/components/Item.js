import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, Icon, Rating, } from 'semantic-ui-react';

class Item extends React.Component {
  state = { item: {}, reviews: [], };

  componentDidMount() {
    const {match: { params: { id, itemId } }} = this.props;
    axios.get(`/api/departments/${id}/items/${itemId}`)
      .then( res => this.setState({ item: res.data, }))

    axios.get(`/api/items/${itemId}/reviews`)
      .then( res => this.setState({ reviews: res.data, }))
      debugger
  }

  renderReviews = () => {
    return this.state.reviews.map( r => (
      <Segment> 
          {/* <Rating maxRating={5} icon="star"/> */}
          <Header as='h3'>
          Title:
          { r.title }
          </Header>
          <Header.Subheader>{ r.author }</Header.Subheader>
          <p><i>
            { r.body }
            </i></p>
      </Segment>
    ))
  }

  render() {
    const { title, description, price, } = this.state.item;
    return (
      <div>
              <Button basic color='black' animated='fade'>
                <Button.Content visible>Leave a Review</Button.Content>
                <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
              </Button>
              <Link to='/departments'>
                <Button basic color='black' animated='fade'>
                  <Button.Content visible>Back to Department</Button.Content>
                  <Button.Content hidden> <Icon name='arrow alternate circle left outline'></Icon> </Button.Content>
                </Button>
              </Link>

              <h1>Item</h1>
        
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
                <hr />
                { this.renderReviews() }
                  <Link to='' >
                  <Button basic color='black' animated='fade'>
                  <Button.Content visible>Delete Review</Button.Content>
                  <Button.Content hidden> <Icon name='delete'></Icon> </Button.Content>
                </Button>
                  </Link>
                  <Link to='' >
                  <Button floated='right' basic color='black' animated='fade'>
                  <Button.Content visible>Edit Review</Button.Content>
                  <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
                </Button>
                  </Link>
              </Segment>

      </div>
    )
  }
}

export default Item;