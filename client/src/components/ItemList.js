import React from 'react';
import axios from 'axios';
import Item from './components/Item';


class ItemList extends React.Component {
  state= {
    items: []
  }

  componentDidMount() {
    let {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
    .then(res => {
      this.setState({ items: res.data, });
    })
  }

  addItem = (title, description, price, ) => {
    let {id} = this.props.match.params
    axios.post(`/api.departments/${id}/items`, { title, description, price })
    .then( res => {
      const { items, } = this.state;
      this.setState({ items: [...items, red.data] })
    })
  }
  
  // updateLocation = (id) => {
  //   let {trip_id} = this.props.match.params
  //   axios.put(`/api/trips/${trip_id}/locations/${id}`)
  //     .then(res => {
  //       const locations = this.state.locations.map(t => {
  //         if (t.id === id)
  //           return res.data;
  //         return t
  //       })
  //       this.setState({ locations, });
  //     })
  // }
  // deleteLocation = (id) => {
  //   let {trip_id} = this.props.match.params
  //   axios.delete(`/api/trips/${trip_id}/locations/${id}`)
  //     .then(res => {
  //       const { locations, } = this.state;
  //       this.setState({ locations: locations.filter(t => t.id !== id) })
  //     })
  // }

  render() {
    let { items } = this.state;
    return (
      <div>
          {items.map(item => (
              <Item
                key={item.id}
                {...item}
              />
            ))
          }
        </div>
  
    )
  }
}

export default ItemList;
