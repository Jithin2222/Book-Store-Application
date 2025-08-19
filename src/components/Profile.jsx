import React, { useEffect, useState } from "react";
import { Form, Container, Navbar, Button, Card, CardHeader, CardBody, CardFooter } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [users, setUsers] = useState(location.state?.users || []);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // push new user into array
    setUsers([...users, user]);
    // reset form
    setUser({
      userName: "",
      userEmail: "",
      userPassword: ""
    });
  };

  const handleClick = () => {
    navigate("/view", {
      state: {
        users: users // ✅ send users array to ViewProfile
      }
    });
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="glass-navbar py-2">
        <Container fluid className="px-3">
          <Navbar.Brand href="/home">
            <i className="bi bi-arrow-left"></i>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <Container>
        <h1 className="text-center my-5">Profile</h1>
        <Card>
          <CardHeader>
            <h1>Login</h1>
          </CardHeader>
          <Form onSubmit={handleSubmit}>
            <CardBody>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  value={user.userName || ""}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="userEmail"
                  value={user.userEmail || ""}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="userPassword"
                  value={user.userPassword || ""}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </Form.Group>
            </CardBody>
            <CardFooter>
              <Button type="submit" variant="outline-primary">
                Add User
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Container>

      <div className="text-center my-3">
        <Button onClick={handleClick}>View Profile</Button>
      </div>
    </>
  );
};

export default Profile;
