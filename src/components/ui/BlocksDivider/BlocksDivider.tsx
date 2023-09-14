import React from "react";
import { DividerProps } from "src/interfaces/ui";

export const Divider: React.FC<DividerProps> = ({ size = "140px" }) => {
  const dividerStyle: React.CSSProperties = {
    marginBottom: size,
  };

  return <div style={dividerStyle}></div>;
};
