import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Author01 from "../assets/images/Author01.png"; // replace with your author image
import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import './AuthorSpotLight.css';

const AuthorSpotlight = () => {
  return (
    <Container className="my-5 author-spotlight">
      <h2 className="text-center mb-4 ">📚 Author Spotlight</h2>
      <Row className="align-items-center">
        {/* Author Image */}
        <Col md={4} className="text-center">
          <img
            src={Author01}
            alt="Author"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "250px" }}
          />
        </Col>

        {/* Author Info */}
        <Col md={8}>
          <h3>Ruskin Bond</h3>
          <p className="text-muted">
            Known for his heartwarming tales set in the hills of India, Ruskin Bond’s
            works blend nostalgia, simplicity, and timeless storytelling. His words
            have charmed readers across generations.
          </p>
          <h5 className="mt-4">Featured Books:</h5>

          {/* Book Recommendations */}
          <Row className="g-3 mt-2">
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src={book1} />
                <Card.Body>
                  <Card.Title>The Blue Umbrella</Card.Title>
                  <Button variant="primary" size="sm">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src={book2} />
                <Card.Body>
                  <Card.Title>Time Stops at Shamli</Card.Title>
                  <Button variant="primary" size="sm">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src={book3} />
                <Card.Body>
                  <Card.Title>Our Trees Still Grow</Card.Title>
                  <Button variant="primary" size="sm">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorSpotlight;
