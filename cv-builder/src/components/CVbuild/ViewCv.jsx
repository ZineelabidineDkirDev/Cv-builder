import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Content from './Content';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Content.css'
import HeadingStyle from '../../extensions/HeadingStyle';


const ViewCv = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);

    const handlePrint = () => {
      window.print();
    };

  return (
    <div>
    <HeadingStyle title="View CV" />
    <div>
    <button
            type="button"
            onClick={handlePrint}
            className="btn btn-outline-dark border-dark rounded-5 px-4 py-2 d-flex align-items-center justify-content-center"
            style={{ marginTop: '20px', marginLeft: '45%' }}
          >
            Print your Cv
          </button>
    </div>
    <Row className='justify-items-center'>
    <Col md={3}></Col>
    {/* <Col md={3}>
          <Button variant="primary" onClick={handleButtonClick} className="mt-3">
            Change Color
          </Button>
    </Col> */}
    <Col md={5}></Col>
    </Row>
    <Container id="cv-hd" fluid  style={{ width: '60%' ,marginLeft:'20%',height: '100%'}}>
      <Row>
        <Col md={4} className='p-0'>
          <SideBar className={`sidebar-card p-0 ${isButtonClicked ? 'clicked' : ''}`} />
        </Col>
        <Col md={8} className='p-0'>
          <Content className={`content-card p-0 ${isButtonClicked ? 'clicked' : ''}`}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ViewCv;
