import React, { useEffect, useState } from 'react'
import {Container, Button,CardText} from 'react-bootstrap';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CvNavbar = () => {
  const [email,setEmail]=useState('');
  const [Display,setDisplay]=useState('none')
  const [on,setON]=useState(false)
  useEffect(()=>{
    setEmail(localStorage.getItem("connected"))
  },[localStorage.getItem("connected")])

  const showlogout=()=>{
    setON(!on)
    if(on){
      setDisplay('none')
    }
    else{
      setDisplay('')
    }
  }

  const logout=()=>{
    localStorage.setItem("connected","")
  }
  return (
    <Navbar expand="lg" className="navbar bg-color-style fixed-top" data-bs-theme="dark" >
      <Container className='content'>
        <Navbar.Brand href="/" style={{color:'#333'}}>CV Builder </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="/">Home</Nav.Link>
            <Nav.Link className='text-dark' href="/service">Service</Nav.Link>
            <Nav.Link className='text-dark' href="/contact">View CV</Nav.Link>
          </Nav>
          <Nav className='me'>
            <Button variant="white" style={{color:"black"}} onClick={showlogout}>
              {email} {" "}
            </Button>
              <Button style={{display:Display,padding:"3px",margin:0,fontSize:'13px',background:"#1b227a",border:0}} onClick={logout}>
                <a href='/' style={{textDecoration:"none",color:"white"}}>Log out</a>
              </Button>
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