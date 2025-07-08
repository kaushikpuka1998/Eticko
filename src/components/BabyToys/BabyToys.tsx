import React, { FC } from 'react';
import styles from './BabyToys.module.scss';

interface BabyToysProps {}

const BabyToys: FC<BabyToysProps> = () => (
  <div className={styles.BabyToys}>
    BabyToys Component
  </div>
);

export default BabyToys;
