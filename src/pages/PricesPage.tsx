import React from "react";
import { Prices } from "blocks";
import { PageLayout } from "./PageLayout";

export const PricesPage: React.FC = () => (
  <PageLayout title="Цены">
    <Prices />
  </PageLayout>
);
