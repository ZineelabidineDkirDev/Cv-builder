import React, { useState, useEffect } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { Form,Button } from "react-bootstrap";
const Login =()=>{
    const navigate = useNavigate()
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [username, setUsername] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [emailBorder,setEmailBorder]= useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [PasswordBorder,setPasswordBorder]= useState('');
    const [isCorrect, setIsCorrect] = useState(true);
    const [href,setHref]=useState("")
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
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
        
        if(password.length>6){
            setPasswordBorder("0 0 4px 1px white")
            setIsValidPassword(true)
        }else{
            setIsValidPassword(false)
            setPasswordBorder("0 0 12px 1px red")
        }
        setPassword(e.target.value)
    }
     
    
    useEffect(() => {
        const storedUsername = localStorage.getItem('username') || '';
        const storedPassword = localStorage.getItem('password') || '';
        setUsername(storedUsername);
        setPassword(storedPassword);
      }, []);

    const handleSubmit = (e) => {
    e.preventDefault();



        if(localStorage.getItem(email)==password){
            localStorage.setItem('connected',setUsername(localStorage.getItem('userename')));
            navigate('/')
            window.location.reload();
        }
        else{
            setIsCorrect(false)
        }
      };

      

    return(
        <div className="loginPage">
            <Form onSubmit={handleSubmit}>
                <h1 className="title">Log in to your account {username}</h1>
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
                    <Form.Label>Don't have an account? <a href="/signup">Sign Up</a></Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit"  disabled={!isValidEmail || !isValidPassword}>
                    Log in
                </Button>   
            </Form>
        </div>
    )
}

export default Login