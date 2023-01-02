import React from "react";

interface Props {
  children: React.ReactNode;
}

const RightSidebar: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        width: "30%",
        height: "100%",
        position: "absolute",
        right: 0,
        overflowY: "scroll",
      }}
    >
      {children}
    </div>
  );
};

export default RightSidebar;
