import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Cards = (props) => {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="outline-dark" className='border border-light-subtle rounded-5 px-4 py-2'>
            {props.link}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Cards