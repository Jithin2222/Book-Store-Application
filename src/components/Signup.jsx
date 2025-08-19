import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Form.css';

const Signup = () => {

    const[inputs, setInputs]=useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setInputs({...inputs, [inputName]:inputValue});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`user Name : ${inputs.useremail}, user Password : ${inputs.userpassword}`);
        alert(`Welcome ${inputs.useremail}!`);
        navigate('/home');
    }


    return(
        <>
            <Container className="content-login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="useremail" value={inputs.useremail || ""} onChange={handleChange} placeholder="Enter your email" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="userpassword" value={inputs.userpassword || ""} onChange={handleChange} placeholder="Enter your password"/>
                        <Button type="submit">Sign Up</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
};


export default Signup;