import type { FC } from 'react';
import styles from './Divider.module.scss';

interface DividerProps { }

const Divider: FC<DividerProps> = () => (
  <div className={styles.Divider}>
    <div className={styles.vertical}></div>
  </div>
);

export default Divider;
