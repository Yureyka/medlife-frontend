import React from "react";
import { Footer, Header } from "common";
import { Container, Divider, PageHeading } from "ui";
import { FeedbackForm } from "blocks";

interface IPageLayout {
  title: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayout> = ({ title, children }) => (
  <>
    <Header />
    <PageHeading title={title} />
    <Divider />
    {children}
    <Divider />
    <FeedbackForm />
    <Divider />
    <Footer />
  </>
);
