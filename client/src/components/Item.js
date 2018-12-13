import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, Icon, Grid } from 'semantic-ui-react';

class Item extends React.Component {
  state = { item: {}, reviews: [], };

  componentDidMount() {
    const { url, } = this.props.match
    axios.get(`/api/${url}`)
      .then(res => this.setState({ item: res.data }))
  }

  render() {
    const { title, description, price, } = this.state.item;
    return (

      <Grid rows={2}>
        <Grid.Column>
          <Button color="black" animated='fade'>
            <Button.Content visible>Leave a Review</Button.Content>
            <Button.Content hidden> <Icon name='edit'></Icon> </Button.Content>
          </Button>
          <Link to=''>
            <Button color="black" animated='fade'>
              <Button.Content visible>Back to Department</Button.Content>
              <Button.Content hidden> <Icon name='arrow alternate circle left outline'></Icon> </Button.Content>
            </Button>
          </Link>

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
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Item;