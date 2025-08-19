import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.png"; 
import "./Login.css";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.userpassword !== inputs.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(
      `User Email: ${inputs.useremail}, Password: ${inputs.userpassword}`
    );
    alert(`Welcome ${inputs.username || inputs.useremail}!`);
    navigate("/home");
  };

  return (
    <Container fluid className="signup-container p-0 m-0">
      <Row className="h-100 g-0">
        {/* Left image panel */}
        <Col md={8} className="signup-image">
          <img src={signupImg} alt="Signup" />
          <div className="overlay"></div>
        </Col>

        {/* Right form panel */}
        <Col md={4} className="signup-form">
          <div className="form-content">
            <h2 className="mb-4 text-center">Create an Account</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="useremail"
                  value={inputs.useremail || ""}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="userpassword"
                  value={inputs.userpassword || ""}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="confirmpassword"
                  value={inputs.confirmpassword || ""}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="Show password"
                onChange={() => setShowPassword(!showPassword)}
                className="mb-3"
              />

              <Button type="submit" variant="primary" className="w-100 mb-3">
                Sign Up
              </Button>

              <p className="text-center">
                Already have an account?{" "}
                <span
                  className="login-link"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;