import React, { useState } from "react";
import "./login.css"
import { Form,Button,Card } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
const Signup =()=>{
    const navigate=useNavigate()
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [emailBorder,setEmailBorder]= useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [PasswordBorder,setPasswordBorder]= useState('');
    const [isCorrect, setIsCorrect] = useState(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex=/^(.{7,})$/;
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        const isValidemail = emailRegex.test(e.target.value);
        setIsValidEmail(isValidemail);
        if(isValidEmail){
            setEmailBorder("0 0 4px 1px white")
        }else{
            setEmailBorder("0 0 12px 1px red")
        }

    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        const isValidpassword = passwordRegex.test(e.target.value);
        if(password.length>6){
            setIsValidPassword(true);
            setPasswordBorder("0 0 4px 1px white")
        }else{
            setPasswordBorder("0 0 12px 1px red")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(email,password)
        navigate('/login')
      };

    return(
        <div className="loginPage">
            <Form onSubmit={handleSubmit}>
            <h1 className="title">Create your account</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" style={{boxShadow:emailBorder,width: '400px'}} value={email} onChange={handleEmail}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" style={{boxShadow:PasswordBorder,width: '400px'}} value={password} onChange={handlePassword}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label style={{color:"red"}} hidden={isCorrect}>Password or email incorrect</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Have an account? <a href="/login">Log in now</a></Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit"  disabled={!isValidEmail || !isValidPassword}>
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default Signup