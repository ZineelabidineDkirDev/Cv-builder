import React from 'react'
import {Row, Col, Tabs, Tab, Container} from 'react-bootstrap'
import cv from '../../components/ExportData'
import './Builder.css'
import HeadingStyle from '../../extensions/HeadingStyle'

const Builder = () => {
  return (
    <Container className="d-flex justify-content-center">

   <Row className='container-fluid model-builder mt-5 '>
    <HeadingStyle title="Builder your CV" />
    <Col className='justify-content-center ml-5'>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 nav nav-tabs"
      justify
    >
      <Tab  eventKey="profile" className='model-link' title="Profile Information">
        <cv.Profiles />
      </Tab>        
      <Tab eventKey="education" className='model-link' title="Formation/Education" >
        <cv.Educations />
      </Tab>
      <Tab eventKey="experiences" className='model-link' title="Experiences">
        <cv.Experiences />
      </Tab>
      <Tab eventKey="skills" className='model-link' title="Skills" >
        <cv.Skills />
      </Tab>
    </Tabs>
    </Col>
   </Row>
   </Container>

  )
}

export default Builder