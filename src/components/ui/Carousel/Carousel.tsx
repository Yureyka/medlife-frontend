import React from "react";
import Slider, { Settings } from "react-slick";

import { Container } from "../Container/Container";

import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import { ICarousel } from "interfaces";

export const Carousel: React.FC<ICarousel> = ({ children }) => {
  const settings: Settings = {
    dots: true,
    infinite: children.length > 2,
    arrows: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: false,
    // swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};
