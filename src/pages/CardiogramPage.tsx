import React from "react";
import { Cardiogram } from "blocks";
import { PageLayout } from "./PageLayout";

export const CardiogramPage: React.FC = () => (
  <PageLayout title="Электрокардиограф">
    <Cardiogram />
  </PageLayout>
);
