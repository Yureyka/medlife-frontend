import React from "react";
import cn from "classnames";
import { Container, Button } from "ui";

import styles from "./Gallery.module.scss";

import testImage from "assets/images/x-ray.jpg";

const MOCK = [
  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },
  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },
  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },

  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },
  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },
  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },
  {
    name: "картинка",
    description: "картинка",
    image: "https://random.imagecdn.app/500/150",
  },
];

export const Gallery: React.FC = () => {
  return (
    <Container>
      <section className={styles.gallery}>
        {new Array(64).fill(undefined).map((elem, index) => (
          <div
            className={cn(
              styles.galleryItem,
              styles[`galleryItem-${(index + 1) % 12}`]
            )}
          >
            <img
              src={"https://random.imagecdn.app/1280/720" + "?a" + index}
              alt=""
            />
          </div>
        ))}
      </section>
    </Container>
  );
};
