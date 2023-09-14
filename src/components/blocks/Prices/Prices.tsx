import React from "react";
import { utils, writeFile } from "xlsx";
import { useQuery } from "@tanstack/react-query";
import { Container, Button, Accordion } from "ui";
import { ServicesApi, IService } from "api";

import styles from "./Prices.module.scss";
import axios from "axios";

export const Prices: React.FC = () => {
  const { data } = useQuery(["serviceGroupsAll"], ServicesApi.getGroupsWithServices);

  if (!data) {
    return null;
  }

  const prepareServices = (services: IService[]) => {
    return services.map((service, index) => (
      <div key={service.name + index} className={styles.serviceItem}>
        <span className={styles.serviceName}>{service.name}</span>
        <span className={styles.servicePrice}>{`${service.price} ₽`}</span>
      </div>
    ));
  };

  const handleFetchTable = async () => {
    ServicesApi.getServicesTable({
      responseType: "arraybuffer",
    }).then((res) => {
      const blob = new Blob([res], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Medlife_services.xlsx";
      link.click();
    });
  };

  return (
    <section className={styles.prices}>
      <Container>
        <div className={styles.header}>
          <h3 className={styles.title}>Прайс-лист</h3>
          <Button onClick={handleFetchTable}>загрузить в XLS</Button>
        </div>
        {data.map((group) => (
          <Accordion
            key={group.name}
            title={group.name}
            content={prepareServices(group.services)}
          />
        ))}
      </Container>
    </section>
  );
};