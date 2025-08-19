// src/components/CarouselComponent.jsx
import { Carousel } from "react-bootstrap";
import cover01 from "../assets/images/cover01.png";
import cover02 from "../assets/images/cover02.png";
import cover03 from "../assets/images/cover03.png";
import cover04 from "../assets/images/cover04.png";

const CarouselComponent = () => {
  return (
    <Carousel className="mt-0">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover02}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover03}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover04}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
