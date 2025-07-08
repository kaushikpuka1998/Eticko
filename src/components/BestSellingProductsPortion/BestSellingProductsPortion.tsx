import { useRef, useState, type FC } from 'react';
import styles from './BestSellingProductsPortion.module.scss';
import { sampleProducts } from '../../App';
import ItemBoxPortion from '../ItemBoxPortion/ItemBoxPortion';

interface BestSellingProductsPortionProps { }

const BestSellingProductsPortion: FC<BestSellingProductsPortionProps> = () => {

  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.BestSellingProductsPortion}>


      <div className={styles.portion1}>
        <div className={styles.Rectangle} />
        <div className={styles.CategoriesText}>This Month</div>
      </div>
      <div className={styles.header}>
        <h2>Best Selling Products</h2>
        <div onClick={() => setShowAll(true)} className={styles.viewAllBtn}>
          View All
        </div>
      </div>

      <div className={styles.sliderContainer}>
        {sampleProducts.slice(0, 5).map((product, index) => (
          <ItemBoxPortion key={index} {...product} />
        ))}
      </div>

      {showAll && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button onClick={() => setShowAll(false)} className={styles.closeBtn}>Close</button>
            <div className={styles.allItemsGrid}>
              {sampleProducts.map((product, index) => (
                <ItemBoxPortion key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

};


export default BestSellingProductsPortion;
