import { type FC } from 'react';
import styles from './SalePromotionBannerortion.module.scss';
import CountdownTimer from '../CountDownTime/CountDownTime';

interface SalePromotionBannerortionProps { }

const SalePromotionBannerortion: FC<SalePromotionBannerortionProps> = () => (
  <div className={styles.bannerContainer}>
    <span className={styles.categoriesText}>Categories</span>

    <p className={styles.headingText}>Enhance Your Music Experience</p>
    <div className={styles.timerGroup}>
      <CountdownTimer targetDate="2025-12-31T23:59:59" />
    </div>


    <div className={styles.buyNowButton}>
      <span>Buy Now!</span>
    </div>

    <div className={styles.productImage}>
      <img src="src/assets/images/jbl-jukebox.png" alt="Frame 694" />
    </div>
  </div>
);

export default SalePromotionBannerortion;
