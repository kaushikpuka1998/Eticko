import React, { useRef, useState, type FC } from 'react';
import styles from './ExploreProductPortion.module.scss';
import { sampleProducts } from '../../App';
import ItemBoxPortion from '../ItemBoxPortion/ItemBoxPortion';

interface ExploreProductPortionProps { }

const ExploreProductPortion: FC<ExploreProductPortionProps> = () => {
  const itemsPerPage = 8; // 4 per row × 2 rows
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(sampleProducts.length / itemsPerPage);

  const paginatedProducts = sampleProducts.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && page > 0) {
      setPage((prev) => prev - 1);
    } else if (direction === 'right' && page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.ExploreProductPortion}>
      <div className={styles.portion1}>
        <div className={styles.Rectangle} />
        <div className={styles.CategoriesText}>Our Products</div>
      </div>

      <div className={styles.BrowserStyleWithArrow}>
        <div className={styles.BrowseByCategory}>Explore Our Products</div>
        <div className={styles.OnlyButton}>
          <div className={styles.arrow} onClick={() => handleScroll('left')}>
            <img src='src/assets/images/Fill with Left Arrow.png' />
          </div>
          <div className={styles.arrow} onClick={() => handleScroll('right')}>
            <img src='src/assets/images/Fill with Right Arrow.png' />
          </div>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        {paginatedProducts.map((product, index) => (
          <ItemBoxPortion key={index} {...product} />
        ))}
      </div>

      <div className={styles.centerWrapper}>
        <div className={styles.viewAllProductsBtn}>
          <span className={styles.viewAllText}>View All Products</span>
        </div>
      </div>



    </div>
  );
};


export default ExploreProductPortion;
