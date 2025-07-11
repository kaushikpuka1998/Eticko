import { useRef } from 'react';
import type { FC } from 'react';
import styles from './Categoryortion.module.scss';

interface CategoryortionProps { }

const Categoryortion: FC<CategoryortionProps> = () => {
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
    <div className={styles.Categoryortion}>
      <div className={styles.portion1}>
        <div className={styles.Rectangle} />
        <div className={styles.CategoriesText}>Categories</div>
      </div>

      <div className={styles.BrowserStyleWithArrow}>
        <div className={styles.BrowseByCategory}>Browse By Category</div>
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
        <div className={styles.ListName} >
          <div className={styles.Contact}>
            <img src='src/assets/images/Category-CellPhone.png' />
            <div className={styles.Property}>Phones</div>
          </div>
          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Computer.png' />
            <div className={styles.Property}>Computers</div>
          </div>
          <div className={styles.Contact}>
            <img src='src/assets/images/Category-SmartWatch.png' />
            <div className={styles.Property}>Smartwatches</div>
          </div>
          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Headphone.png' />
            <div className={styles.Property}>Headphones</div>
          </div>
          <div className={styles.Contact}>
            <img src='src/assets/images/microwave.png' />
            <div className={styles.Property}>Microwave</div>
          </div>
          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/fashion.png' />
            <div className={styles.Property}>Fashion</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/smart-tv.png' />
            <div className={styles.Property}>TV</div>
          </div>


          <div className={styles.Contact}>
            <img src='src/assets/images/sound-system.png' />
            <div className={styles.Property}>Music</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/bulb.png' />
            <div className={styles.Property}>SmartBulb</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/fridge.png' />
            <div className={styles.Property}>Fridge</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoryortion;