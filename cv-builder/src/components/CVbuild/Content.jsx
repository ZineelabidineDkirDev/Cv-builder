import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Content.css';

const Content = () => {
  // Experiences
  const [expData, setExperienceData] = useState([]);
  useEffect(() => {
    const storeExpData = JSON.parse(localStorage.getItem("experienceData")) || [];
    setExperienceData(storeExpData);
    console.log("Experience Data", storeExpData);
  }, []);

  if (!Array.isArray(expData)) {
    console.error("Experience data is not an array:", expData);
    return null;
  }

  // Profiles
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
    setProfileData(storeProfileData);
    console.log("Profile Data", storeProfileData);
  }, []);

  

 // Education Data
  const [educateData, setEducationData] = useState([]);
  useEffect(() => {
    const storeEducationData = JSON.parse(localStorage.getItem("educationData")) || [];
    setEducationData(storeEducationData);
    console.log("Education Data", storeEducationData);
  }, []);

  if (!Array.isArray(educateData)) {
    console.error("Education Data:", educateData);
    return null;
  }
 

  



  return (
    <Container fluid="lg" className="justify-content-md-center model-content">
      <Row>
        <h1>Developpeur full Stack</h1>
        <Col>
          <h3 className='title-cv'>Profils</h3>
            <Row style={{ marginLeft: '10px', flexWrap: 'wrap' }}>
              <p>
                {profileData.description}
              </p>
            </Row>
        </Col>
      </Row>

      <h3 className='title-cv '>Educations & degrees</h3>

      <Row>
            <Col>
                {educateData.length<=2 && educateData.map((education, id) => (
                <Row key={id} >
                    <Col className='card-model-content'>
                    <p>{education.Startdate}</p>
                    <span className='hr-model'></span>
                    <p>{education.Enddate}</p>
                    </Col>
                    <Col className='card-model'>
                    <Card>
                        <Card.Body>
                        <div className="blockquote mb-0">
                            <h3 className='h5'>{education.Degree}</h3>
                            <p className='small'>
                            {' '}
                            {education.Description}
                            {' '}
                            </p>
                            <span className="blockquote-footer">
                            {education.Etablissement} <cite title="Source Title">| {education.City}</cite>
                            </span>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                ))}
            </Col>
            </Row>

      <br />

      <h3 className='title-cv'>Professional Experiences</h3>
      <Row className='card-flex'>
        {expData.map((exp, id) => (
          <Col key={id} className='model-exp'>
            <Card className='card-model-exp'>
              <Card.Body>
                <blockquote className="blockquote-exp mb-0">
                  <h3>{exp.jobTitle}</h3>
                  <Card.Title>
                    <p>{exp.startDate}</p>
                    <span className='hr-model'>-</span>
                    <p>{exp.endDate}</p>
                  </Card.Title>
                  <p>
                    {' '}
                    {exp.description}
                    {' '}
                  </p>
                  <br></br>
                  <span className="blockquote-footer">
                    {exp.companyName} <cite title="Source Title">| {exp.city}</cite>
                  </span>
                </blockquote>
              </Card.Body>

              <Card.Footer>
                <span className='tag-content'>
                  {exp.toolsTechnologies.join(' / ')}
                </span>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Content;
