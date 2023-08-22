import React from "react";
import Slider, { Settings } from "react-slick";

import { Container } from "../Container/Container";

import "./Carousel.scss";
import "slick-carousel/slick/slick.css";

interface ICarousel {
  children: React.ReactNode[];
}

const settings: Settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 4000,
};

export const Carousel: React.FC<ICarousel> = ({ children }) => {
  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};
