import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    text: "One of the best book platforms I've ever used! The recommendations feel personalized and spot on.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael K.",
    text: "Great collection of books. The UI is clean and easy to navigate. Found my favorite author instantly.",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily R.",
    text: "I love the offers and discounts! Definitely my go-to place for book shopping online.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/46.jpg",
    date: "3 weeks ago",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<BsStarFill key={i} className="text-warning" />);
    } else if (rating >= i - 0.5) {
      stars.push(<BsStarHalf key={i} className="text-warning" />);
    } else {
      stars.push(<BsStar key={i} className="text-warning" />);
    }
  }
  return stars;
};

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2
        className="text-center mb-4 fw-bold"
        style={{
          background: "linear-gradient(90deg, #0072ff, #00c6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What Our Readers Say
      </h2>

      <Carousel interval={4000} indicators={false}>
        {testimonials.map((t) => (
          <Carousel.Item key={t.id}>
            <Card className="shadow-lg p-4 text-center mx-auto" style={{ maxWidth: "600px" }}>
              <img
                src={t.img}
                alt={t.name}
                className="rounded-circle mx-auto mb-3"
                width="80"
                height="80"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text className="mb-3">“{t.text}”</Card.Text>
                <div className="mb-2">{renderStars(t.rating)}</div>
                <h6 className="fw-bold">{t.name}</h6>
                <small className="text-muted">{t.date}</small>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
