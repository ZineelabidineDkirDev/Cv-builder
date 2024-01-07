import React from 'react'
import {Row,Form, Button , Col } from 'react-bootstrap'
import { FaPhoneAlt, FaHome , FaPlus , FaMinus , FaSchool , FaCity , FaCalendar , FaBook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
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
    localStorage.setItem("educationData", JSON.stringify(educationData));
  }, [educationData]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("educationData")) || [];
    setEducationData(storedData);
  }, []);


  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...educationData];
    updatedData[index][name] = value;
    setEducationData(updatedData);
  };
  const handleClick = (e) => {
    e.preventDefault();
  
    try {
       // Check if educationData is not empty
      const hasNonEmptyData = educationData.every(item => Object.values(item).every(value => value !== ''));
      if (hasNonEmptyData) {
        const jsonData = JSON.stringify(educationData);
        console.log(jsonData);
     
      } else {
       alert('Please fill in all fields before proceeding to the next step .' )
      }
    } catch (error) {
      console.error('Error saving data to local file:', error);
    }
  };
  
  const handleAddEducation = () => {
    setEducationData([...educationData, initialEducationData]);
    setShowGoToFirstButton(true);
  };
  const handleGoToFirstEducation = () => {
    // Reset educationData to have only the first entry
    setEducationData([initialEducationData]);
    setShowGoToFirstButton(false);
  };

  
  return (
    <Form>
      {educationData.map((education, index) => (
     <div key={index} className={`fade-in ${education.fadeIn ? 'active' : ''}  ` } style={{  marginTop:'25px' , borderBlockEnd:'1.5px solid black ', paddingBottom:'20px' }} >
          <Form.Group className="mb-3" controlId={`degree-${index}`}>
            <Form.Label>  <FaBook style={{paddingRight:'5px'}}/> Degree  :</Form.Label>
            <Form.Control
              type="text"
              name="Degree"
              placeholder="Degree"
              value={education.Degree}
              onChange={(e) => handleChange(index, e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId={`dates-${index}`}>
            <Row>
              <Col>
                <Form.Label> <FaCalendar style={{paddingRight:'5px'}}  /> Start date:</Form.Label>
                <Form.Control
                  type="date"
                  name="Startdate"
                  value={education.Startdate}
                  onChange={(e) => handleChange(index, e)}
                />
              </Col>
              <Col>
                <Form.Label> <FaCalendar style={{paddingRight:'5px'}}  /> End date:</Form.Label>
                <Form.Control
                  type="date"
                  name="Enddate"
                  value={education.Enddate}
                  onChange={(e) => handleChange(index, e)}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId={`description-${index}`}  style={{marginBlockEnd:'10px'}}>
            <Form.Label>Description : </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Provide a description..."
              name="Description"
              value={education.Description}
              onChange={(e) => handleChange(index, e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId={`etablissment-${index}`}>
            <Form.Label><FaSchool style={{paddingRight:'5px'}}  /> Etablissment:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Etablissment"
              name="Etablissment"
              value={education.Etablissment}
              onChange={(e) => handleChange(index, e)}
            />
          </Form.Group>
          <Form.Group controlId={`city-${index}`}>
  <Form.Label><FaCity style={{paddingRight:'5px'}} />City:</Form.Label>
  <Form.Select
    name="City"
    value={education.City}
    onChange={(e) => handleChange(index, e)}
  >
    <option value="">Select...</option>
    {cityData.map(city => (
      <option key={city.id} value={city.ville}>
        {city.ville}
      </option>
    ))}
  </Form.Select>
</Form.Group>
        </div>
      ))}
      <Form.Group>
      <Button variant="outline" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"  style={{marginTop:'20px'}}>
          Periveus Step
        </Button>
        <Button variant="outline" className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"  style={{marginTop:'20px' , marginLeft:'10px'}} onClick={handleClick}>
          Next Step
        </Button>
        <Button  className="button-transition" variant="info" style={{marginTop:'20px', position:'absolute' , right:'200px' }} onClick={handleAddEducation}  >
        <FaPlus style={{marginRight:'5px'}} />
          Add Another Education
        </Button>

        {showGoToFirstButton && (
        <Button
        className="button-transition"
          variant="info"
          style={{ marginTop: '20px', position: 'absolute', right: '450px' }}
          onClick={handleGoToFirstEducation} >

          Back
        </Button>
        ) }
      </Form.Group>
    </Form>
  );
};



export default Educations