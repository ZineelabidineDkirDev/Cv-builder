import React from 'react'
import {Row,Form, Button , Col, Container } from 'react-bootstrap'
import { FaPhoneAlt, FaHome , FaPlus , FaMinus , FaSchool , FaCity , FaCalendar , FaBook, FaFile } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import cityData from '../../CityLoader/CityData.json';
import './Education.css'


const Educations = () => {
 
  const initialEducationData = {
    Degree: '',
    Startdate: '',
    Enddate: '',
    Description: '',
    Etablissment: '',
    City: ''
  };

  const [educationData, setEducationData] = useState([initialEducationData]);
  const [showGoToFirstButton, setShowGoToFirstButton] = useState(false);

  useEffect(() => {
    localStorage.setItem('educationData', JSON.stringify(educationData));
  }, [educationData]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('educationData')) || [];
    setEducationData(storedData);
  }, []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...educationData];
    updatedData[index][name] = value;
    setEducationData(updatedData);
  };

  const handleAddEducation = () => {
    setEducationData([...educationData, initialEducationData]);
    setShowGoToFirstButton(true);
  };

  const handleGoToFirstEducation = () => {
    setEducationData([initialEducationData]);
    setShowGoToFirstButton(false);
  };


  
  return (
    <Container>
    <Form>
      {educationData.map((education, index) => (
     <div key={index} className={`fade-in ${education.fadeIn ? 'active' : ''}  ` } style={{  marginTop:'25px' , borderBlockEnd:'1.5px solid black ', paddingBottom:'20px' }} >
         <Form>
         <Col>
          <Form.Group className="mb-3" controlId={`degree-${index}`}>
            <FaBook style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
            <Form.Control
              type="text"
              name="Degree"
              style={{paddingLeft:'2.5rem'}}
              placeholder="Degree"
              value={education.Degree}
              onChange={(e) => handleChange(index, e)}
            />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId={`etablissment-${index}`}>
            <FaSchool style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
            <Form.Control
              style={{paddingLeft:'2.5rem'}}
              type="text"
              placeholder="Etablissment"
              name="Etablissment"
              value={education.Etablissment}
              onChange={(e) => handleChange(index, e)}
            />
          </Form.Group>
          </Col>
         </Form>
          <Form.Group className="mb-3" controlId={`dates-${index}`}>
            <Row>
              <Col className='col-3'>
                <Form.Label> </Form.Label>
                <Form.Control
                  type="date"
                  name="Startdate"
                  value={education.Startdate}
                  onChange={(e) => handleChange(index, e)}
                />
              </Col>
              <Col className='col-3'>
                <Form.Label> </Form.Label>
                <Form.Control
                  type="date"
                  name="Enddate"
                  value={education.Enddate}
                  onChange={(e) => handleChange(index, e)}
                />
              </Col>
              <Col controlId={`city-${index}`}>
              <FaCity style={{paddingRight:'5px',position:'relative',top:'30px',fontSize:'20px'
            ,left:'10px',color:'#666'}}  /> 
            <Form.Select
              name="City"
              value={education.City}
              style={{paddingLeft:'2.5rem'}}
              onChange={(e) => handleChange(index, e)}
            >
              <option value="">Select City...</option>
              {cityData.map(city => (
                <option key={city.id} value={city.ville}>
                  {city.ville}
                </option>
              ))}
            </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId={`description-${index}`}  style={{marginBlockEnd:'10px'}}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Provide a description ...Max 150 words"
              name="Description"
              value={education.Description}
              onChange={(e) => handleChange(index, e)}
            />
          </Form.Group>
         
          <Form.Group controlId={`city-${index}`}>
            
          </Form.Group>
        </div>
      ))}
      <Form.Group>

        <Button  className="button-transitio rounded-5" variant="outline-dark"
         style={{marginTop:'20px',marginLeft:'75%' , right:'200px' }} onClick={handleAddEducation}  >
        <FaPlus style={{marginRight:'5px'}} />
          Add Another Education
        </Button>

        {showGoToFirstButton && (
        <Button
        className="button-transition"
          variant="outline-dark"
          style={{ marginTop: '-69px',marginLeft:'65%' }}
          onClick={handleGoToFirstEducation} >

          Back
        </Button>
        ) }
      </Form.Group>
    </Form>
    </Container>
  );
};



export default Educations





