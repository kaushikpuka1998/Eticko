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

      <div className={styles.sliderContainer}>
        <div className={styles.ListName} ref={scrollRef}>
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
            <img src='src/assets/images/Category-CellPhone.png' />
            <div className={styles.Property}>Phones</div>
          </div>
          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>


          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>

          <div className={styles.Contact}>
            <img src='src/assets/images/Category-Gamepad.png' />
            <div className={styles.Property}>Gaming</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoryortion;