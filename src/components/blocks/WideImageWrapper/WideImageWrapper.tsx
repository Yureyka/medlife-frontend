import React from "react";
import { Container } from "ui";

import styles from "./WideImageWrapper.module.scss";

interface IWideImageWrapper {
  img: string;
}

export const WideImageWrapper: React.FC<IWideImageWrapper> = ({ img }) => {
  return (
    <Container>
      <div className={styles.wideWrapper}>
        <img src={img} alt="Картинка-разделитель" />
      </div>
    </Container>
  );
};
