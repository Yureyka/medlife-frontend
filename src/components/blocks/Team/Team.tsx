import React from "react";
import { Container, Button } from "ui";

import styles from "./Team.module.scss";

import { useQuery } from "@tanstack/react-query";
import { TeamApi } from "api";
import { BACKEND_URL } from "helpers";

export const Team: React.FC = () => {
  const { data } = useQuery(["getTeam"], TeamApi.getTeam);

  return (
    <Container>
      <section className={styles.team}>
        {data?.map(({ _id, fullName, position, image }) => (
          <div key={fullName + Math.random()} className={styles.employeeCard}>
            <div>
              <div className={styles.imageWrapper}>
                <img
                  src={`${BACKEND_URL}/${image}`}
                  alt={`${position} ${fullName}`}
                />
              </div>
              <div className={styles.content}>
                <h5 className={styles.fullName}>{fullName}</h5>
                <span className={styles.position}>{position}</span>
              </div>
            </div>
            <Button
              className={styles.button}
              onlyIcon
              linkButton
              href={`/team/${_id}`}
            />
          </div>
        ))}
      </section>
    </Container>
  );
};
