import React, { FC } from 'react';
import styles from './Medicine.module.scss';

interface MedicineProps {}

const Medicine: FC<MedicineProps> = () => (
  <div className={styles.Medicine}>
    Medicine Component
  </div>
);

export default Medicine;
