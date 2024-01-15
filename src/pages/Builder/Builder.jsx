import React, { useState } from 'react';
import { Row, Col, Tabs, Tab, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import cv from '../../components/ExportData';
import './Builder.css';
import HeadingStyle from '../../extensions/HeadingStyle';


const Builder = () => {
  const Navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const isLastTab = activeTab === 'skills';

  const handleNextStep = () => {
    // Handle any logic related to the "Next Step" button click

    switch (activeTab) {
      case 'profile':
        break;
      case 'education':
        break;
      case 'experiences':
        break;
      case 'skills':
        break;
      default:
        
        
      
        
    };
    if (isLastTab) {
      Navigate("/contact")
    }
    

    // Switch to the next tab
    const tabs = ['profile', 'education', 'experiences', 'skills'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex !== -1 && currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      setActiveTab(nextTab);
    }
  };

  const handleBack = () => {
    // Switch to the previous tab
    const tabs = ['profile', 'education', 'experiences', 'skills'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      const prevTab = tabs[currentIndex - 1];
      setActiveTab(prevTab);
    }
  };

  return (
    <Container className="d-flex justify-content-center ">
      <Row className='container-fluid model-builder mt-5 '>
        <HeadingStyle title="Build your CV" />
        <Col className='justify-content-center ml-5'>
          <Tabs
            activeKey={activeTab}
            onSelect={handleTabSelect}
            id="justify-tab-example"
            className="mb-3 nav nav-tabs"
            justify
          >
            <Tab eventKey="profile" className='model-link' title="Contact Information" disabled>
              <cv.Profiles />
            </Tab>
            <Tab eventKey="education" className='model-link' id="educations" title="Degrees/Educations" disabled>
              <cv.Educations />
            </Tab>
            <Tab eventKey="experiences" className='model-link' title="Experiences" disabled>
              <cv.Experiences />
            </Tab>
            <Tab eventKey="skills" className='model-link' title="Skills / Languages" disabled>
              <cv.Skills />
            </Tab>
          </Tabs>
          <button
            type="button"
            className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"
            style={{ marginTop: '20px', marginLeft: '10px' }}
            onClick={handleBack}
            hidden={activeTab === 'profile'} // Disable the button if on the first tab
          >
            Previous Step
          </button>
          {<button
            type="button"
            className="btn btn-outline-dark border-dark rounded-5 px-4 py-2"
            style={{ marginTop: '20px', marginLeft: '10px' }}
            onClick={handleNextStep}
          >
            {isLastTab ? 'Generate your CV' : 'Next Step' }
          </button>}
        </Col>
      </Row>
    </Container>
  );
};

export default Builder;