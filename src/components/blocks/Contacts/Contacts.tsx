import React from "react";
import { Container } from "ui";

import styles from "./Contacts.module.scss";

import { MapPoint, VK, Telegram, PhoneHollow, Mail, Clock } from "icons";
import { Link } from "react-router-dom";

const CONTACTS = [
  {
    icon: MapPoint,
    info: "298105, Крым Респ., г. Феодосия, Симферопольское ш., д. 41Б, корп. 2",
    title: "Адрес",
    href: "",
  },
  {
    icon: VK,
    info: "Медицинский центр «МЕДЛАЙФ»",
    title: "Группа Вконтакте",
    href: "",
  },
  { icon: Telegram, info: "@medlifefeo", title: "Telegram", href: "" },
  {
    icon: PhoneHollow,
    info: (
      <span>
        +7 (978) 604-16-00 <br /> +7 (978) 604-16-01
      </span>
    ),
    title: "Телефоны",
    href: "",
  },
  { icon: Mail, info: "center@medlife-feo.ru", title: "Email", href: "" },
  { icon: Clock, info: "Пн-Сб 08:00-18:00", title: "Часы работы", href: "" },
];

export const Contacts: React.FC = () => {
  return (
    <Container>
      <section className={styles.contacts}>
        {CONTACTS.map((contact) => (
          <Link
            to={contact.href}
            key={contact.title}
            className={styles.contact}
          >
            <p>{contact.icon()}</p>
            <p className={styles.info}>{contact.info}</p>
            <p className={styles.title}>{contact.title}</p>
          </Link>
        ))}
      </section>
    </Container>
  );
};
