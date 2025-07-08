import { type FC } from 'react';
import styles from './PromisePortion.module.scss';

interface PromisePortionProps { }


const infoItems = [
  {
    title: "FREE AND FAST DELIVERY",
    subtitle: "Free delivery for all orders over $140",
    iconImg: "src/assets/images/fnfDelivery.png",
    altText: "icon-delivery",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    subtitle: "Friendly 24/7 customer support",
    iconImg: "src/assets/images/helpdesk.png",
    altText: "Icon-Customer service",
  },
  {
    title: "MONEY BACK GUARANTEE",
    subtitle: "We return money within 30 days",
    iconImg: "src/assets/images/MoneyBack.png",
    altText: "shield-tick",
  },
];
const PromisePortion: FC<PromisePortionProps> = () => {


  return (
    <div className={styles.PromisePortion}>
      {infoItems.map((item, index) => (
        <div className={styles.infoBox} key={index}>
          <div className={styles.imageWrapper}>
            <div className={styles.iconOverlay}>
              <img src={item.iconImg} alt={item.altText} className={styles.iconImg} />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.subtitle}>{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );

}

export default PromisePortion;
