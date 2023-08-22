import React from "react";
import { Container, Button } from "ui";
import { declencion } from "helpers";

import styles from "./EmployeeInfo.module.scss";

interface IEmployeeInfo {
  experienceYears: number;
  experience: string[];
  image: string;
}

export const EmployeeInfo: React.FC<IEmployeeInfo> = ({experienceYears, experience, image}) => {
  return (
    <section className={styles.employeeInfo}>
      <div className={styles.experience}>
        <h3 className={styles.experienceTitle}>{`Стаж работы — ${
          experienceYears
        } ${declencion(experienceYears, ["год", "года", "лет"])}`}</h3>
        <ul className={styles.expirienceList}>
          {experience.map((item: string) => (
            <li className={styles.experienceItem}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.portraitWrapper}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};
