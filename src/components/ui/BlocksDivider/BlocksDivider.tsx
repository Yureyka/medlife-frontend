import React from "react";

interface DividerProps {
  size?: string;
}

export const Divider: React.FC<DividerProps> = ({ size = "140px" }) => {
  const dividerStyle: React.CSSProperties = {
    marginBottom: size,
  };

  return <div style={dividerStyle}></div>;
};
