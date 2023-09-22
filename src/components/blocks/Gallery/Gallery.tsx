import React from "react";
import cn from "classnames";
import { Container } from "ui";
import FsLightbox from "fslightbox-react";

import styles from "./Gallery.module.scss";

import { useQuery } from "@tanstack/react-query";
import { GalleryApi } from "api";
import { BACKEND_URL } from "helpers";

export const Gallery: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(0);

  const { data } = useQuery(["getGallery"], GalleryApi.getGallery);

  return (
    <Container>
      {data?.length === 0 ? (
        <p className={styles.emptyInfo}>Фотографий пока нет</p>
      ) : (
        <section className={styles.gallery}>
          {data?.map(({ image, name }, index) => (
            <div
              key={name + index}
              onClick={() => {
                setVisible(!visible);
                setActiveImage(index);
              }}
              className={cn(
                styles.galleryItem,
                styles[`galleryItem-${(index + 1) % 12}`]
              )}
            >
              <img src={`${BACKEND_URL}/${image}`} alt={name} />
            </div>
          ))}
          <FsLightbox
            toggler={visible}
            sources={data?.map(({ image }) => `${BACKEND_URL}/${image}`)}
            sourceIndex={activeImage}
          />
        </section>
      )}
    </Container>
  );
};
