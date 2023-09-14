import React, { useEffect } from "react";
import { Footer, Header } from "common";
import { Divider, PageHeading } from "ui";
import { FeedbackForm } from "blocks";
import { IPageLayout } from "interfaces";

export const PageLayout: React.FC<IPageLayout> = ({
  title,
  withMap = false,
  children,
}) => {
  useEffect(() => {
    window.scrollTo({
      top: -1,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Header />
      <PageHeading title={title} />
      <Divider />
      {children}
      <Divider />
      <FeedbackForm withMap={withMap} />
      <Divider />
      <Footer />
    </>
  );
};
