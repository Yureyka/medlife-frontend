import React from "react";
import { DividerProps } from "src/interfaces/ui";
import "./BlocksDivider.scss";

export const Divider: React.FC<DividerProps> = ({ size = "140px" }) => {
  const dividerStyle: React.CSSProperties = {
    marginBottom: size,
  };

  return <div className="blocksDivider" style={dividerStyle}></div>;
};
