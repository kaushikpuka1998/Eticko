import type { FC } from 'react';
import styles from './FooterDownloadAppSectionPortion.module.scss';

interface FooterDownloadAppSectionPortionProps { }

const FooterDownloadAppSectionPortion: FC<FooterDownloadAppSectionPortionProps> = () => (
  <div className={styles.FooterDownloadAppSectionPortion}>
    <div className={styles.textBlock}>
      <span className={styles.title}>Download App</span>
      <div className={styles.subBlock}>
        <span className={styles.subtitle}>
          Download App from Play Store
        </span>
        <div className={styles.qrAndStores}>
          <div>
            <img
              src="src/assets/images/Qr Code.png"
              alt="QR Code"
            />
          </div>
          <div className={styles.storeButtons}>
            <div>
              <img
                src="src/assets/images/GooglePlay.png"
                alt="Google Play"
              />
            </div>
            <div>
              <img
                src="src/assets/images/AppStore.png"
                alt="App Store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.socialIcons}>
      <div>
        <img src="src/assets/images/Icon-Facebook.png" alt="Facebook" />
      </div>
      <div className={styles.iconWrapper}>
        <img src="src/assets/images/Icon-Twitter.png" alt="Twitter" />
      </div>
      <div className={styles.iconWrapperSmall}>
        <img src="src/assets/images/icon-instagram.png" alt="Instagram" />
      </div>
      <div>
        <img src="src/assets/images/Icon-Linkedin.png" alt="LinkedIn" />
      </div>
    </div>
  </div>
);

export default FooterDownloadAppSectionPortion;
