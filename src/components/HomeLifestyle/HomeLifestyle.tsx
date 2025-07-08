import React, { FC } from 'react';
import styles from './HomeLifestyle.module.scss';

interface HomeLifestyleProps {}

const HomeLifestyle: FC<HomeLifestyleProps> = () => (
  <div className={styles.HomeLifestyle}>
    HomeLifestyle Component
  </div>
);

export default HomeLifestyle;
