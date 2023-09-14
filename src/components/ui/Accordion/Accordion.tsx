import React, { useState } from "react";
import cn from "classnames";
import { Button } from "ui";
import { Plus } from "icons";

import styles from "./Accordion.module.scss";
import { IAccordion } from "interfaces";

export const Accordion: React.FC<IAccordion> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={styles.accordion}>
      <div
        className={cn(styles.accordionTitle, {
          [styles.expanded]: expanded,
        })}
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <Button className={styles.plusButton} onlyIcon icon={<Plus />} />
      </div>
      <div
        className={cn(styles.accordionContent, {
          [styles.expanded]: expanded,
        })}
      >
        {content}
      </div>
    </div>
  );
};
