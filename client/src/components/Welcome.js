import React from 'react';
import { Segment, Button } from "semantic-ui-react"

const welcomeBar = () => (

  <Button
    animated='fade'
    floated='right'
    color='black'
    size='massive'
  >
    <Button.Content visible>Welcome</Button.Content>
    <Button.Content hidden>To Middle Earth </Button.Content>
  </Button>

)

export default welcomeBar;