import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

import logo from "assets/images/logo.png";

const NAVIGATION = [
  { to: "/admin/services", label: "Услуги" },
  { to: "/admin/team", label: "Команда" },
  { to: "/admin/gallery", label: "Галерея" },
  { to: "/admin/call-requests", label: "Обратные звонки" },
  { to: "/admin/appointment", label: "Заявки на прием" },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={styles.navList}>
        {NAVIGATION.map((item, index) => (
          <li
            key={index}
            className={`${styles.navItem} ${
              location.pathname === item.to ? styles.active : ""
            }`}
          >
            <Link to={item.to} className={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
