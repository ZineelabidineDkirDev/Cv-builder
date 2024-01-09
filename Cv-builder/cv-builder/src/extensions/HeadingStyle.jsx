import React from 'react'
import {Row} from 'react-bootstrap'

const HeadingStyle = (props) => {
  return (
    <Row className='justify-content-center mt-5 text-center mb-5'>
      <h1 className='mt-5 display-4'>{props.title}</h1>
    </Row>
  )
}

export default HeadingStyle