import React from "react";
import { IEmployeeInfo } from "interfaces";
import { declencion } from "helpers";

import styles from "./EmployeeInfo.module.scss";

export const EmployeeInfo: React.FC<IEmployeeInfo> = ({
  experienceYears,
  experience,
  image,
}) => {
  return (
    <section className={styles.employeeInfo}>
      <div className={styles.experience}>
        <h3
          className={styles.experienceTitle}
        >{`Стаж работы — ${experienceYears} ${declencion(experienceYears, [
          "год",
          "года",
          "лет",
        ])}`}</h3>
        <ul className={styles.expirienceList}>
          {experience?.map(({ year, description }) => (
            <li
              className={styles.experienceItem}
            >{`${year} — ${description}`}</li>
          ))}
        </ul>
      </div>
      <div className={styles.portraitWrapper}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};
