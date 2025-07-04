import React from 'react';
import type { FC } from 'react';
import styles from './LeftColumnButton.module.scss';

type LeftColumnButton = {
  children: React.ReactNode;
  onClick?: () => void;
};

const LeftColumnButton: FC<LeftColumnButton> = ({ children, onClick }) => {
  return (
    <div className={styles.buttonName} onClick={onClick}>
      {children}
    </div>
  );
};

export default LeftColumnButton;

