import React from "react";
import cn from "classnames";

import styles from "./Container.module.scss";
import { IContainer } from "interfaces";

export const Container: React.FC<IContainer> = ({
  small,
  large,
  fullWidth,
  onlyIcon,
  ...rest
}) => {
  return (
    <div className={cn(styles.container)} {...rest}>
      {rest.children}
    </div>
  );
};
