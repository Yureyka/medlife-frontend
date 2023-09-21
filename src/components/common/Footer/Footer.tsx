import React from "react";

import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

import logo from "assets/images/logo_short.png";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.legal}>
          <p>ООО «МЕДЛАЙФ»</p>
          <p>ИНН 9108125570 / КПП 910801001</p>
          <p>Дата государственной регистрации 08.02.2021 г.</p>
          <p>Учредитель Аблаева Диляра Абдурамановна</p>
          <p>Директор Франк Татьяна Петровна</p>
          <div className={styles.docs}>
            <Link to="https://roszdravnadzor.gov.ru/services/licenses/?downloadlic=756586&pdf=1">
              Лицензия ЛО41-01177-91/00327768 от 22.09.2021 г
            </Link>
            <Link
              target="_blank"
              to="src/assets/images/work.jpg"
            >
              Данные о результатах проведения специальной оценки условий труда
            </Link>
          </div>
        </div>
        <div className={styles.contacts}>
          <p className={styles.contactsTitle}>Телефоны:</p>
          <p>
            +7 (978) 604-16-00 <br />
            +7 (978) 604-16-01
          </p>
          <p className={styles.contactsTitle}>Наш адрес:</p>
          <p>
            298105, Крым Респ., г.Феодосия,
            <br />
            Симферопольское ш., д.41Б, корп.2
          </p>
          <p className={styles.contactsTitle}>Email:</p>
          <p>center@medlife-feo.ru</p>
          <p className={styles.contactsTitle}>Часы работы:</p>
          <p>Пн. – Сб. 08:00 - 18:00</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="MedLife" className={styles.logo} />
        </Link>
        <span>© {new Date().getFullYear()} МЕДЛАЙФ - Медицинский центр</span>
        <Link to="/" className={styles.privacyPolicy}>
          политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
