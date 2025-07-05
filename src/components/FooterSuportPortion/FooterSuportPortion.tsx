import type { FC } from 'react';
import styles from './FooterSuportPortion.module.scss';

interface FooterSuportPortionProps { }

const FooterSuportPortion: FC<FooterSuportPortionProps> = () => (
  <div className={styles.FooterSuportPortion}>
    <span className={styles.title}>Support</span>
    <div className={styles.details}>
      <p className={styles.text}>
        Kundalhalli, Bangalore,&nbsp;&nbsp;Karnataka-560037, India.
      </p>
      <span className={styles.text}>kaushikghosh199832@gmail.com</span>
      <span className={styles.text}>+91-xxxxxxxxxx</span>
    </div>
  </div>
);

export default FooterSuportPortion;
