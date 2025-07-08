import React, { FC } from 'react';
import styles from './MenFashion.module.scss';

interface MenFashionProps {}

const MenFashion: FC<MenFashionProps> = () => (
  <div className={styles.MenFashion}>
    MenFashion Component
  </div>
);

export default MenFashion;
