import React from "react";
import { Gallery } from "blocks";
import { PageLayout } from "./PageLayout";

export const GalleryPage: React.FC = () => (
  <PageLayout title="Фотогаллерея">
    <Gallery />
  </PageLayout>
);
