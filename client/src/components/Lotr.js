import React from 'react';
import { Header, Segment, Icon } from "semantic-ui-react"

const Lotr = () => (
  <div >
    <Header
      as='h1'
      textAlign='center'
      >
      Welcome to Lord of the Rings Coffee Shop!
    </Header>
    <Segment vertical basic textAlign='center'>
      <Header as='h2'
      textAlign='center'>
        Phone
        <Header.Subheader><Icon name='phone'/>1-800-THE-RING</Header.Subheader>
      </Header>
    </Segment>
    <Segment vertical basic textAlign='center'>
      <Header as='h2'>
        Email
        <Header.Subheader><Icon name='mail'/>contact@mordor.com</Header.Subheader>
      </Header>
    </Segment>
  </div>
)

export default Lotr;