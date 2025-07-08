import React, { FC } from 'react';
import styles from './Sports.module.scss';

interface SportsProps {}

const Sports: FC<SportsProps> = () => (
  <div className={styles.Sports}>
    Sports Component
  </div>
);

export default Sports;
