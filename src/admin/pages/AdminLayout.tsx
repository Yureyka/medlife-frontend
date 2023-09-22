import React, { useEffect } from "react";
import { Navbar } from "../components";

import styles from "./AdminLayout.module.scss";

interface IAdminLayout {
  children?: React.ReactNode;
}

export const AdminLayout: React.FC<IAdminLayout> = ({ children }) => {
  useEffect(() => {
    document.getElementById("root")!.style.height = "100%";

    () => {
      document.getElementById("root")!.style.height = "";
    };
  }, []);

  return (
    <div className={styles.admin}>
      <Navbar />
      <div className={styles.mainContainer}>{children}</div>
    </div>
  );
};
