import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Content from './Content';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Content.css'
import HeadingStyle from '../../extensions/HeadingStyle';

const ViewCv = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  // const handleButtonClick = () => {
  //   setButtonClicked(!isButtonClicked);
  // };

  // const [DataJsonProfile,setDataJsonProfile] = useState([]); 

  // useEffect(()=>{
  //   const storeProfileData = JSON.parse(localStorage.getItem("profileData")) || [];
  //   setDataJsonProfile(storeProfileData);
  //   console.log(storeProfileData);
  // },[]);

  
  return (
    <div>
    <HeadingStyle title="View CV" />
    <Row className='justify-items-center'>
    <Col md={3}></Col>
    {/* <Col md={3}>
          <Button variant="primary" onClick={handleButtonClick} className="mt-3">
            Change Color
          </Button>
    </Col> */}
    <Col md={5}></Col>
    </Row>
    <Container fluid  style={{ width: '60%' ,marginLeft:'20%'}}>
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
