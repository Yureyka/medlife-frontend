import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./ScrollToTop.module.scss";
import { Button } from "ui";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      className={cn(styles.button, {
        [styles.visible]: isVisible,
      })}
      onClick={scrollToTop}
      ariaLabel="Прокрутить вверх страницы"
      onlyIcon
    />
  );
};
