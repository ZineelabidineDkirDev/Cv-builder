import React from 'react'
import {Container, Button} from 'react-bootstrap';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CvNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar bg-color-style fixed-top" data-bs-theme="dark" >
      <Container className='content'>
        <Navbar.Brand href="/" style={{color:'#333'}}>CV Builder </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="/">Home</Nav.Link>
            <Nav.Link className='text-dark' href="/service">Service</Nav.Link>
            <Nav.Link className='text-dark' href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className='me'>
            <Button variant="dark" className='rounded-5 hover-text-dark px-4 py-0'>
              <Nav.Link href="/builder" className='text-light'>Build CV Now</Nav.Link>  
            </Button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CvNavbar