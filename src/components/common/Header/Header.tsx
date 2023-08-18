import React from "react";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown } from "ui";

import styles from "./Header.module.scss";

import logo from "assets/images/logo.png";
import { Phone } from "icons";

interface IHeader {
  isMainPage?: boolean;
}

const PATIENT_LINKS = [
  <NavLink to="/for_patient/gov">
    Органы власти по надзору в сфере здравоохранения
  </NavLink>,
  <NavLink to="/for_patient/first">Правила записи на первичный прием</NavLink>,
  <NavLink to="/for_patient/rule">
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
  return (
    <Container>
      <header className={styles.header}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="MedLife" className={styles.logo} />
        </Link>

        <>
          <nav className={cn(styles.nav, { [styles.isMainPage]: isMainPage })}>
            <div className={styles.navItem}>
              <NavLink to="/services">услуги</NavLink>
            </div>
            <div className={styles.navItem}>
              <NavLink to="/prices">цены</NavLink>
            </div>
            <div className={styles.navItem}>
              <NavLink to="/team">команда</NavLink>
            </div>
            <div className={styles.navItem}>
              <NavLink to="/gallery">фотогалерея</NavLink>
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
              <NavLink to="/contacts">контакты</NavLink>
            </div>
            <div className={styles.callButton}>
              <Button
                onlyIcon
                icon={<Phone />}
                linkButton
                href="tel:+777777777777"
              />
            </div>
          </nav>
        </>
      </header>
    </Container>
  );
};
