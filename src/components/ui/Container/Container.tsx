import React, { HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Container.module.scss";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  small?: boolean;
  large?: boolean;
  fullWidth?: boolean;
  onlyIcon?: boolean;
}

export const Container: React.FC<IContainer> = ({
  small,
  large,
  fullWidth,
  onlyIcon,
  ...rest
}) => {
  return (
    <div
      className={cn(styles.container)}
      {...rest}
    >
      {rest.children}
    </div>
  );
};
