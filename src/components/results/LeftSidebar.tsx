import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LeftSidebar: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ width: '30%', height: '100%', overflowY: 'scroll' }}>
      {children}
    </div>
  );
};

export default LeftSidebar;
