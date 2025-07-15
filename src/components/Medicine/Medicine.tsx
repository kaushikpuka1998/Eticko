import {type FC } from 'react';
import styles from './Medicine.module.scss';

type MedicineProps = object

const Medicine: FC<MedicineProps> = () => (
  <div className={styles.Medicine}>
    Medicine Component
  </div>
);

export default Medicine;
