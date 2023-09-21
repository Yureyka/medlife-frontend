import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import cn from "classnames";

import logo from "assets/images/logo.png";

const NAVIGATION = [
  { to: "/admin/appointment", label: "Заявки на прием" },
  { to: "/admin/call-requests", label: "Обратные звонки" },
  { to: "/admin/services", label: "Услуги" },
  { to: "/admin/groups", label: "Группы услуг" },
  { to: "/admin/team", label: "Команда" },
  { to: "/admin/gallery", label: "Галерея" },
  { to: "/admin/news", label: "Новости" },
  { to: "/admin/comments", label: "Отзывы" },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setIsMobile(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobile ? (
        <div
          className={cn(styles.mobileMenuButton, {
            [styles.isButtonActive]: isMobileMenuOpen,
          })}
          onClick={toggleMobileMenu}
        >
          <div />
          <div />
          <div />
        </div>
      ) : null}
      <nav
        className={cn(styles.navbar, {
          [styles.isMobile]: isMobile,
          [styles.isOpened]: isMobileMenuOpen,
        })}
      >
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
    </>
  );
};
