import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Form, Card, CardHeader, CardFooter, CardBody, Row, Col } from "react-bootstrap";
import { fakerEN } from "@faker-js/faker";

const Market = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // generate 10 fake books
    const books = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: fakerEN.commerce.productName(),
      author: fakerEN.person.fullName(),
      description: fakerEN.commerce.productDescription(),
      // 👇 faker built-in image
      cover: fakerEN.image.urlPicsumPhotos({ width: 400, height: 600 })
    }));
    setDatas(books);
  }, []);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="glass-navbar py-2">
        <Container fluid className="px-3">
          <Navbar.Brand href="/home"><i className="bi bi-arrow-left"></i></Navbar.Brand>
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
        <h1>Market</h1>
        <Row>
          {datas.map(data => (
            <Col key={data.id} sm={12} md={6} lg={4} className="g4 mb-4">
              <Card style={{ width: "18rem" }}>
                <CardHeader>
                  <img src={data.cover} alt={data.title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                </CardHeader>
                <CardBody>
                  <h4>{data.title}</h4>
                  <p><b>Author:</b> {data.author}</p>
                  <p>{data.description}</p>
                </CardBody>
                <CardFooter>
                  <Button variant="primary">Buy</Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Market;
