import { type FC } from 'react';
import styles from './WomenFashion.module.scss';

interface WomenFashionProps { }

const WomenFashion: FC<WomenFashionProps> = () => (
  <div className={styles.WomenFashion}>
    WomenFashion Component
  </div>
);

export default WomenFashion;
