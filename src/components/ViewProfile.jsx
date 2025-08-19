import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, Container, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ViewProfile = () => {
  const location = useLocation();
  const [users, setUsers] = useState(location.state?.users || []);
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(-1);
  const [selectedUser, setSelectedUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: ""
  });

  const handleBack = () => {
    navigate("/", {
      state: {
        users: users
      }
    });
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleSelect = (id) => {
    setSelectedId(id);
    setSelectedUser(users[id]); // simpler than filter
  };

  const handleChange = (event) => {
    setSelectedUser({ ...selectedUser, [event.target.name]: event.target.value });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setSelectedId(-1);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const updatedUsers = users.map((user, index) =>
      index === selectedId ? selectedUser : user
    );
    setUsers(updatedUsers);
    setSelectedId(-1);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((_, index) => index !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <h1>
        <i
          className="bi bi-arrow-left-circle-fill btn btn-primary"
          style={{
            borderRadius: "20px",
            width: "50px",
            padding: "5px",
            margin: "10px",
            fontSize: "1.5rem"
          }}
          onClick={handleBack}
        ></i>
        View
      </h1>

      <Container>
        {users.map((data, index) => (
          <Card key={index} className="mb-3">
            <CardHeader>
              <h2>ID {index + 1}</h2>
            </CardHeader>
            <CardBody>
              <Card.Text>
                <h4>
                  Name:{" "}
                  {selectedId === index ? (
                    <Form.Control
                      type="text"
                      name="userName"
                      value={selectedUser.userName || ""}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  ) : (
                    data.userName
                  )}
                </h4>
                <h5>
                  Email:{" "}
                  {selectedId === index ? (
                    <Form.Control
                      type="email"
                      name="userEmail"
                      value={selectedUser.userEmail || ""}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  ) : (
                    data.userEmail
                  )}
                </h5>
                <h6>
                  Password:{" "}
                  {selectedId === index ? (
                    <Form.Control
                      type="password"
                      name="userPassword"
                      value={selectedUser.userPassword || ""}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  ) : (
                    data.userPassword
                  )}
                </h6>
              </Card.Text>
            </CardBody>
            <CardFooter>
              {selectedId === index ? (
                <>
                  <Button variant="primary" onClick={handleSave}>
                    Save
                  </Button>{" "}
                  <Button variant="warning" onClick={handleCancel}>
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button className="btn-success" onClick={() => handleSelect(index)}>
                    Edit
                  </Button>{" "}
                  <Button className="btn-danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ViewProfile;
