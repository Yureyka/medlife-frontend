import React from "react";
import { Gastroscopy } from "blocks";
import { PageLayout } from "./PageLayout";

export const GastroscopyPage: React.FC = () => (
  <PageLayout title="Гастроскопия">
    <Gastroscopy />
  </PageLayout>
);
