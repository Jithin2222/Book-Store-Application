import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import CarouselComponent from './Carousel';
import CategoriesHome from './CategoriesHome';
import FeaturedCollections from './FeaturedCollections';
import DiscountBanner from './DiscountBanner';
import AuthorSpotlight from './AuthorSpotLight';
import Testimonials from './Testimonials';
import { useState } from 'react';
import Cart from './Cart';
import Shops from './Shops';
import Footer from './Footer';

const Home = () => {

  const[showCart, setShowCart]=useState(false);
  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="glass-navbar py-2">
        <Container fluid className="px-3">

          {/* Brand */}
          <Navbar.Brand href="/home" className="fw-bold animated-gradient-text">SCRIPTORA</Navbar.Brand>

          {/* Search bar just after brand */}
          <Form className="d-flex ms-5">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ minWidth: '200px' }}
            />
            <Button variant="outline-success" className="ms-2">
              Search
            </Button>
          </Form>

          {/* Mobile toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

          {/* Nav links pushed to the right */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/market">Market</Nav.Link>
              <Nav.Link href="#services">Categories</Nav.Link>
              <Nav.Link href="#services">Best Sellers</Nav.Link>
              
              <NavDropdown title="Support" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Price</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Author</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Rating</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Membership</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Track Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Offers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Gift Cards</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/profile"><i className="bi bi-person-circle"></i>Account</Nav.Link>
              <Button variant='outline-warning' onClick={handleShow}><i className="bi bi-cart-check-fill"></i></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CarouselComponent/>
      <CategoriesHome/>
      <FeaturedCollections/>
      <DiscountBanner/>
      <AuthorSpotlight/>
      <hr/>
      <Shops/>
      <Testimonials/>
      <Footer/>

      <Cart show={showCart} handleClose={handleClose} />
    </>
  );
};

export default Home;
