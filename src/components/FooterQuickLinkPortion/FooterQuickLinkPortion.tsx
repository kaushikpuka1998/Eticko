import type { FC } from 'react';
import styles from './FooterQuickLinkPortion.module.scss';

interface FooterQuickLinkPortionProps { }

const FooterQuickLinkPortion: FC<FooterQuickLinkPortionProps> = () => (
  <div className={styles.FooterQuickLinkPortion}>
    <span className={styles.title}>Quick Link</span>
    <div className={styles.linkGroup}>
      <span className={styles.link}>Privacy Policy</span>
      <span className={styles.link}>Terms Of Use</span>
      <span className={styles.link}>FAQ</span>
      <span className={styles.link}>Contact</span>
    </div>
  </div>
);

export default FooterQuickLinkPortion;
