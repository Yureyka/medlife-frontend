import React from "react";
import cn from "classnames";

import styles from "./Button.module.scss";
import { ArrowDiagonal } from "icons";
import { Link } from "react-router-dom";
import { IButton } from "interfaces";

export const Button: React.FC<IButton> = ({
  disabled,
  size,
  fullWidth,
  onlyIcon,
  icon,
  linkButton,
  href,
  className,
  ...rest
}) => {
  const classNames = cn(styles.button, className, {
    [styles.size]: size,
    [styles.fullWidth]: fullWidth,
    [styles.onlyIcon]: onlyIcon,
    [styles.disabled]: disabled,
  });

  const buttonContent = (
    <>
      {!onlyIcon ? rest.children : null}
      <div className={styles.buttonIcon}>
        {onlyIcon && icon ? icon : <ArrowDiagonal />}
      </div>
    </>
  );

  return linkButton ? (
    <Link className={classNames} to={href || "/"} {...rest}>
      {buttonContent}
    </Link>
  ) : (
    <button className={classNames} {...rest}>
      {buttonContent}
    </button>
  );
};
