import React from "react";
import { Contacts } from "blocks";
import { PageLayout } from "./PageLayout";

export const ContactsPage: React.FC = () => (
  <PageLayout withMap title="Контакты">
    <Contacts />
  </PageLayout>
);
