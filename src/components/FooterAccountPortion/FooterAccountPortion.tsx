import type { FC } from 'react';
import styles from './FooterAccountPortion.module.scss';

interface FooterAccountPortionProps { }

const FooterAccountPortion: FC<FooterAccountPortionProps> = () => (
  <div className={styles.FooterAccountPortion}>
    <span className={styles.title}>Account</span>
    <span className={styles.item}>My Account</span>
    <span className={styles.item}>Login / Register</span>
    <span className={styles.item}>Cart</span>
    <span className={styles.item}>Wishlist</span>
    <span className={styles.item}>Shop</span>
  </div>
);

export default FooterAccountPortion;
