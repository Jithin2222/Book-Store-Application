import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons (Leaflet bug with React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const shops = [
  {
    name: "Scriptora Bookstore - Downtown",
    address: "123 Main Street, City Center",
    hours: "Mon - Sat: 9 AM - 9 PM",
    phone: "123-456-7890",
    mapLink: "https://goo.gl/maps/example1",
    image:
      "https://images.unsplash.com/photo-1744748208244-79bc6420d29f?w=800&auto=format&fit=crop&q=60",
    coords: [28.6139, 77.209], // Example: Delhi
  },
  {
    name: "Scriptora Bookstore - Uptown",
    address: "456 Elm Street, Uptown Area",
    hours: "Mon - Sat: 9 AM - 9 PM",
    phone: "987-654-3210",
    mapLink: "https://goo.gl/maps/example2",
    image:
      "https://images.unsplash.com/photo-1737205788121-4932d3b7c533?w=800&auto=format&fit=crop&q=60",
    coords: [28.7041, 77.1025], // Example: Delhi NCR
  },
  {
    name: "Scriptora Bookstore - Suburbs",
    address: "789 Oak Street, Suburbs Area",
    hours: "Mon - Sat: 9 AM - 9 PM",
    phone: "555-555-5555",
    mapLink: "https://goo.gl/maps/example3",
    image:
      "https://images.unsplash.com/photo-1670163448961-0899321af9bf?w=800&auto=format&fit=crop&q=60",
    coords: [28.4595, 77.0266], // Example: Gurgaon
  },
];

//to control map fly
const FlyToShop = ({shop}) => {
    const map = useMap();
    if(shop){
        map.flyTo(shop.coords, 14, {duration: 1.5 });
    }
    return null;
};

const Shops = () => {

    const[selectedShop, setSelectedShop]=useState(null);

  return (
    <Container className="my-5">
      <h1
        className="text-center fw-bold mb-5"
        style={{
          background: "linear-gradient(to right, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "2.5rem",
        }}
      >
        Our Shops & Locations
      </h1>

      {/* Shop Cards */}
      <Row>
        {shops.map((shop, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card
              className="shadow-lg h-100 border-0"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={()=> setSelectedShop(shop)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Img
                variant="top"
                src={shop.image}
                alt={shop.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold mb-3">{shop.name}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                  📍 {shop.address} <br />
                  🕒 {shop.hours} <br />
                  ☎️ {shop.phone}
                </Card.Text>
                <Button
                  variant="outline-dark"
                  size="sm"
                  href={shop.mapLink}
                  target="_blank"
                  style={{ borderRadius: "25px", padding: "6px 16px" }}
                >
                  View on Google Maps
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Interactive Map */}
      <h2 className="text-center mt-5 mb-3">Find Us on the Map</h2>
      <MapContainer
        center={[28.6139, 77.209]} // Default center (Delhi)
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "450px", borderRadius: "15px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((shop, idx) => (
          <Marker key={idx} position={shop.coords}>
            <Popup>
              <b>{shop.name}</b>
              <br />
              {shop.address}
              <br />
              <a href={shop.mapLink} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </Popup>
          </Marker>
        ))}
        <FlyToShop shop={selectedShop}/>
      </MapContainer>
    </Container>
  );
};

export default Shops;
