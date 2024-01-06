import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import {Container, Row, Col} from 'react-bootstrap'

const ViewCv = () => {
  return (
      <Container fluid  style={{width:'60%'}}>
      <Row>
        <Col md={4} className="sidebar p-0">
          <SideBar />
        </Col>
        <Col md={8} className="content p-0">
          <Content />
        </Col>
      </Row>
    </Container>

  )
}

export default ViewCv