import React, { useEffect, useLayoutEffect, useState } from "react";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown } from "ui";

import styles from "./Header.module.scss";

import logo from "assets/images/logo.png";
import { Phone } from "icons";
import { IHeader } from "interfaces";

const PATIENT_LINKS = [
  <NavLink to="/for_patient/gov">
    Органы власти по надзору в сфере здравоохранения
  </NavLink>,
  <NavLink to="/for_patient/initial_appointment">
    Правила записи на первичный прием
  </NavLink>,
  <NavLink to="/for_patient/internal_order">
    Правила внутреннего распорядка для потребителей услуг
  </NavLink>,
  <NavLink to="/for_patient/law">
    Правила предоставления платных медицинских услуг
  </NavLink>,
  <NavLink to="/for_patient/vaccine">Национальный календарь прививок</NavLink>,
  <NavLink to="/for_patient/citizen">
    Обеспечение прав граждан в сфере охраны здоровья
  </NavLink>,
];

export const Header: React.FC<IHeader> = ({ isMainPage }) => {
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
    <Container>
      <header className={styles.header}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="MedLife" className={styles.logo} />
        </Link>

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
            className={cn(styles.nav, {
              [styles.isMainPage]: isMainPage,
              [styles.isMobile]: isMobile,
              [styles.isOpened]: isMobileMenuOpen,
            })}
          >
            <div className={styles.navItem}>
              <NavLink className={styles.navLink} to="/services">
                услуги
              </NavLink>
            </div>
            <div className={styles.navItem}>
              <NavLink className={styles.navLink} to="/prices">
                цены
              </NavLink>
            </div>
            <div className={styles.navItem}>
              <NavLink className={styles.navLink} to="/team">
                команда
              </NavLink>
            </div>
            <div className={styles.navItem}>
              <NavLink className={styles.navLink} to="/gallery">
                фотогалерея
              </NavLink>
            </div>
            <div className={styles.navItem}>
              <Dropdown options={PATIENT_LINKS}>
                <NavLink
                  to="/for_patient"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className={styles.dropdownTarget}
                >
                  пациенту
                </NavLink>
              </Dropdown>
            </div>
            <div className={styles.navItem}>
              <NavLink className={styles.navLink} to="/contacts">
                контакты
              </NavLink>
            </div>
            {isMobile ? (
              <div className={styles.callNumbers}>
                <a href="tel:+79786041600">+7 (978) 604-16-00</a>
                <a href="tel:+79786041601"> +7 (978) 604-16-01</a>
              </div>
            ) : (
              <div className={styles.callButton}>
                <Button
                  onlyIcon
                  icon={<Phone />}
                  linkButton
                  href="tel:+79786041600"
                />
              </div>
            )}
          </nav>
        </>
      </header>
    </Container>
  );
};
