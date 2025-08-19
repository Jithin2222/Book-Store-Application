import React from "react";
import { Container, Button } from "react-bootstrap";
import "./OfferBanner.css";

function DiscountBanner() {
  return (
    <div className="offer-banner">
      <Container className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
        <span className="badge text-bg-light rounded-pill fw-semibold">Limited Time</span>

        <div className="d-flex align-items-center gap-2">
          <span className="offer-emoji" aria-hidden>📚</span>
          <span className="offer-text">
            Special Offer on Books — <strong>Up to 50% Off</strong>
          </span>
        </div>

        <div className="divider d-none d-md-block" />

        <span className="small m-0 text-white-50">
          Free shipping on orders over ₹499
        </span>

        <Button
          size="sm"
          variant="outline-light"
          className="cta-btn"
          onClick={() => window.alert("Shop Books")}
        >
          Shop Now
        </Button>
      </Container>
    </div>
  );
}

export default DiscountBanner;
