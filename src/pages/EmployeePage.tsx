import React from "react";
import { EmployeeInfo } from "blocks";
import { PageLayout } from "./PageLayout";

import testImage from "assets/images/x-ray.jpg";

const INFO = {
  name: "Тромбачева Эвелина Фоминична",
  experienceYears: 24,
  experience: [
    "1997 - окончила Крымский медицинский институт им. С.И.Георгиевского по специальности «Лечебное дело» и получила квалификацию врача;",
    "1999 - получила специальность врач-специалист по специальности «Акушерство и гинекология»;",
    "2007 - получила специальность врач-специалист по специальности «Ультразвуковая диагностика»;",
    "2012 - присвоение второй уровень квалификации по специальности «УЗД»;",
    "2015 - прошла повышение квалификации по специальности «Акушерство и гинекология» и»УЗД»;",
    "2020 - прошла повышение квалификации по специальности «УЗД».",
  ],
  image: testImage,
};

export const EmployeePage: React.FC = () => (
  <PageLayout title={INFO.name}>
    <EmployeeInfo
      experienceYears={INFO.experienceYears}
      experience={INFO.experience}
      image={INFO.image}
    />
  </PageLayout>
);
