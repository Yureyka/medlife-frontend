import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Slider from "react-slick";

import styles from "./Carousel.module.scss";

interface ICarousel {
  children: React.ReactNode[];
}

export const Carousel: React.FC<ICarousel> = ({ children }) => {
  const ref: any = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleWheel = (event: React.WheelEvent | any) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      ref.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <div ref={ref} className={styles.slideContainer}>
        <div
          className={styles.slides}
          style={{
            transform: `translateX(-${currentIndex * 15}%)`,
          }}
        >
          {React.Children.map(children, (child) => (
            <div className={styles.slide}>{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
