// TopBarButton.tsx

import React from 'react';
import styles from './TopBarButton.module.scss';

type TopBarButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const TopBarButton: React.FC<TopBarButtonProps> = ({ children, onClick }) => {
  return (
    <div className={styles.buttonName} onClick={onClick}>
      {children}
    </div>
  );
};

export default TopBarButton;
