import React, { FC } from 'react';
import styles from './HealthBeauty.module.scss';

interface HealthBeautyProps {}

const HealthBeauty: FC<HealthBeautyProps> = () => (
  <div className={styles.HealthBeauty}>
    HealthBeauty Component
  </div>
);

export default HealthBeauty;
