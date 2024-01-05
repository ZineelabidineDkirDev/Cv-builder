import React from 'react'
import {Row,Form, Button} from 'react-bootstrap'
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Profiles = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><IoMail /> Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><FaPhoneAlt /> Phone Number </Form.Label>
        <Form.Control type="email" placeholder="XX XXXXXX" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><FaHome /> Address</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group>
      <Button variant='outline' className='btn btn-outline-dark border-dark rounded-5 px-4 py-2'>
           Next Step
      </Button>
      </Form.Group>
    </Form>
  )
}

export default Profiles