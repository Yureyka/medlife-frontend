import React from "react";
import {
  MainBanner,
  AboutInfo,
  Diagnostics,
  WideImageWrapper,
  Advantages,
  Reviews,
  FeedbackForm,
} from "blocks";
import { Divider } from "ui";
import { Footer } from "common";

import dividerImg from "assets/images/kt.jpg";

export const HomePage: React.FC = () => (
  <>
    <MainBanner></MainBanner>
    <Divider />
    <AboutInfo></AboutInfo>
    <Divider />
    <Diagnostics></Diagnostics>
    <Divider />
    <WideImageWrapper img={dividerImg} />
    <Divider />
    <Advantages />
    <Divider />
    <Reviews />
    <Divider />
    <FeedbackForm withMap />
    <Divider />
    <Footer />
  </>
);
