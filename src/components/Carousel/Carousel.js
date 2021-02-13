import React from "react";
import Carousel from "react-bootstrap/Carousel";
import rockClimber from "../../img/rock-climber.jpg";
import hiker from "../../img/hiker.jpg";
import paddleBoard from "../../img/paddleboard.jpg";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rockClimber}
          alt="Silhouette of a person climbing a large rock while the sun is setting"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hiker}
          alt="Person hiking to the peak of a mountain."
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={paddleBoard}
          alt="Two people on paddleboards in the middle of a lake surrounded by mountains."
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
