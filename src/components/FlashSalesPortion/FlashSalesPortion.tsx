import { useRef, type FC } from 'react';
import styles from './FlashSalesPortion.module.scss';
import ItemBoxPortion from '../ItemBoxPortion/ItemBoxPortion';
import CountdownTimer from '../CountDownTime/CountDownTime';

import {sampleProducts} from "../../pages/SampleProducts.tsx";


interface FlashSalesPortionProps { }

const FlashSalesPortion: FC<FlashSalesPortionProps> = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.FlashSalesPortion}>

      <div className={styles.portion1}>
        <div className={styles.Rectangle} />
        <div className={styles.CategoriesText}>Today's</div>
      </div>
      <div className={styles.BrowserStyleWithArrow}>
        <div className={styles.BrowseByCategoryWithTimer}>
          <div className={styles.BrowseByCategory}>Flash Sales</div>
          <div className={styles.CountDown}>
            <CountdownTimer targetDate="2025-12-31T23:59:59" />
          </div>
        </div>

        <div className={styles.OnlyButton}>
          <div className={styles.arrow} onClick={() => scroll('left')}>
            <img src='src/assets/images/Fill with Left Arrow.png' />
          </div>
          <div className={styles.arrow} onClick={() => scroll('right')}>
            <img src='src/assets/images/Fill with Right Arrow.png' />
          </div>
        </div>
      </div>

      <div className={styles.sliderContainer} ref={scrollRef}>

        {sampleProducts.map((product, index) => (
          <ItemBoxPortion key={index} {...product} />
        ))}
      </div>


    </div>
  );
};

export default FlashSalesPortion;
