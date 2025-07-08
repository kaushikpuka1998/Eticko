import React, { FC } from 'react';
import styles from './Electronics.module.scss';

interface ElectronicsProps {}

const Electronics: FC<ElectronicsProps> = () => (
  <div className={styles.Electronics}>
    Electronics Component
  </div>
);

export default Electronics;
