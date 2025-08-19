import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#111",
        color: "#ccc",
        padding: "40px 0 20px",
        marginTop: "60px",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col xs={12} md={4}>
            <h4 style={{ color: "#fff", fontWeight: "bold" }}>Scriptora Bookstore</h4>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              Discover your next adventure with us.  
              Books that inspire, locations that welcome.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <h5 style={{ color: "#fff" }}>Quick Links</h5>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: "2",
              }}
            >
              <li>
                <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: "#ccc", textDecoration: "none" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/shops" style={{ color: "#ccc", textDecoration: "none" }}>
                  Shops
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: "#ccc", textDecoration: "none" }}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col xs={12} md={4}>
            <h5 style={{ color: "#fff" }}>Follow Us</h5>
            <div style={{ fontSize: "1.5rem", display: "flex", gap: "15px" }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Text */}
        <p className="text-center mt-3" style={{ fontSize: "0.85rem", color: "#888" }}>
          © {new Date().getFullYear()} Scriptora Bookstore. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
