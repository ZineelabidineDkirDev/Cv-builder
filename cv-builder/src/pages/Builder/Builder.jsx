import React from 'react'
import {Row, Col, Tabs, Tab} from 'react-bootstrap'
import cv from '../../components/ExportData'
import './Builder.css'

const Builder = () => {
  return (
   <Row className='container-fluid model-builder'>
    <h1 className='mb-5'>CV Builder</h1>
    <Col>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 nav nav-tabs"
      justify
    >
      <Tab eventKey="profile" className='model-link' title="Profile Information">
        <cv.Profiles />
      </Tab>
      <Tab eventKey="education" className='model-link' title="Formation/Education" disabled>
        <cv.Educations />
      </Tab>
      <Tab eventKey="experiences" className='model-link' title="Experiences" disabled>
        <cv.Experiences />
      </Tab>
      <Tab eventKey="skills" className='model-link' title="Skills" >
        <cv.Skills />
      </Tab>
    </Tabs>
    </Col>
   </Row>
  )
}

export default Builder