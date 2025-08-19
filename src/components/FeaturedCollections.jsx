import React, { useState } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import featured01 from '../assets/images/featured01.png';
import featured02 from '../assets/images/featured02.png';
import featured03 from '../assets/images/featured03.png';
import new01 from '../assets/images/new01.png';
import new02 from '../assets/images/new02.png';
import new03 from '../assets/images/new03.png';
import special01 from '../assets/images/special01.png';
import special02 from '../assets/images/special02.png';
import special03 from '../assets/images/special03.png';
import BestSeller01 from '../assets/images/BestSeller01.png';
import BestSeller02 from '../assets/images/BestSeller02.png';
import BestSeller03 from '../assets/images/BestSeller03.png';

const FeaturedCollections = () => {
  const [activeTab, setActiveTab] = useState("featured");

  // Data for each tab
  const productData = {
    featured: [
      { image: featured01 ,title: "Featured Product 1", text: "Details about featured product 1." },
      { image: featured02 ,title: "Featured Product 2", text: "Details about featured product 2." },
      { image: featured03 ,title: "Featured Product 3", text: "Details about featured product 3." },
    ],
    new: [
      { image: new01 ,title: "New Arrival 1", text: "Details about new arrival 1." },
      { image: new02 ,title: "New Arrival 2", text: "Details about new arrival 2." },
      { image: new03 ,title: "New Arrival 2", text: "Details about new arrival 2." },
    ],
    specials: [
      { image: special01 ,title: "Special Offer 1", text: "Details about special offer 1." },
      { image: special02 ,title: "Special Offer 2", text: "Details about special offer 2." },
      { image: special03 ,title: "Special Offer 2", text: "Details about special offer 2." },
    ],
    bestSeller: [
        {image: BestSeller01 ,title: "Special Offer 1", text: "Details about special offer 1."},
        {image: BestSeller02 ,title: "Special Offer 1", text: "Details about special offer 1."},
        {image: BestSeller03 ,title: "Special Offer 1", text: "Details about special offer 1."},
    ]
  };

//   const handleAddToCart = (product) => {
//     console.log(`Added to cart: ${product.title}`);
//     // Later: integrate with cart state / backend API
//   };

  return (
    <>
      <Container>
        <h1 className="animated-gradient-text text-center mb-2">NEW ARRIVALS</h1>
      </Container>

      <Container className="mt-3 mb-5 g-2">
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
          className="justify-content-center"
        >
          <Nav.Item>
            <Nav.Link eventKey="featured">Featured</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="new">New Arrivals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="specials">Specials</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="bestSeller">Best Seller</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Coming Soon
            </Nav.Link>
        </Nav.Item>
        </Nav>
      </Container>

      <Container className="mt-4 mb-5 g-4">
        <Row xs={1} sm={2} md={3} className="g-4">
          {productData[activeTab].map((product, index) => (
            <Col key={index}>
              <Card>
                <Card.Img src={product.image}/>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-success">Add To Cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FeaturedCollections;
