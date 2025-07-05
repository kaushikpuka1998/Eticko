import type { FC } from 'react';
import styles from './FooterExclusivePortion.module.scss';

interface FooterExclusivePortionProps { }

const FooterExclusivePortion: FC<FooterExclusivePortionProps> = () => (
  <div className={styles.FooterExclusivePortion}>
    <div className={styles.innerContainer}>
      <div className={styles.headingBlock}>
        <div className={styles.exclusiveBadge}>
          <span className={styles.exclusiveText}>Exclusive</span>
        </div>
        <span className={styles.subscribeText}>Subscribe</span>
      </div>
      <span className={styles.offerText}>Get 10% off your first order</span>
    </div>

    <div className={styles.inputBox}>
      <span className={styles.placeholder}>Enter your email</span>
      <div>
        <img src="src/assets/images/icon-send.png" alt="icon-send placeholder" />
      </div>
    </div>
  </div>
);

export default FooterExclusivePortion;
