import { type FC } from 'react';
import styles from './NewArrivalPortion.module.scss';

interface NewArrivalPortionProps { }

const NewArrivalPortion: FC<NewArrivalPortionProps> = () => {
  return (
    <div className={styles.container}>

      <div className={styles.portion1}>
        <div className={styles.Rectangle} />
        <div className={styles.CategoriesText}>Featured</div>
      </div>

      <div className={styles.HeadLine}>New Arrival</div>


      <div className={styles.contentBlock}>
        {/* PlayStation 5 Block */}
        <div className={styles.ps5Block}>
          <img
            className={styles.ps5Image}
            src="src/assets/images/ps5total.png"    //image size should be always 767 × 767 and transparent
            alt="PS5"
          />
          <div className={styles.ps5Text}>
            <div className={styles.textGroup}>
              <span className={styles.itemTitle}>PlayStation 5</span>
              <p className={styles.itemDesc}>
                Black and White version of the PS5 coming out on sale.
              </p>
            </div>
            <div className={styles.shopNow}>
              <span>Shop Now</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Women's Collection */}
          <div className={styles.womenBlock}>
            <img
              className={styles.womenImage}
              src="src/assets/images/women-hat.png" //image size should be always	428 × 284 px and transparent  
              alt="Women Collection"
            />
            <div className={styles.womenText}>
              <div className={styles.textGroup}>
                <span className={styles.itemTitle}>Women’s Collections</span>
                <p className={styles.itemDesc}>
                  Featured woman collections that give you another vibe.
                </p>
              </div>
              <div className={styles.shopNow}>
                <span>Shop Now</span>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className={styles.bottomCards}>
            {/* Speakers */}
            <div className={styles.bottomcard}>
              <img
                className={styles.productImg}
                src="src/assets/images/amazon-echo.png"    //image size should be always 285 × 332 px and transparent
                alt="Speaker Background"
              />

              <div className={styles.cardText}>
                <div className={styles.textGroup}>
                  <span className={styles.itemTitle}>Speakers</span>
                  <p className={styles.itemDesc}>Amazon wireless speakers</p>
                </div>
                <div className={styles.shopNow}>
                  <span>Shop Now</span>
                  <div className={styles.underline}></div>
                </div>
              </div>
            </div>

            {/* Perfume */}
            <div className={styles.bottomcard}>
              <img
                className={styles.productImg}
                src="src/assets/images/gucci.png"   //image size should be always 302 × 305 px and transparent
                alt="Speaker"
              />
              <div className={styles.cardText}>
                <div className={styles.textGroup}>
                  <span className={styles.itemTitle}>Perfume</span>
                  <p className={styles.itemDesc}>GUCCI INTENSE OUD EDP</p>
                </div>
                <div className={styles.shopNow}>
                  <span>Shop Now</span>
                  <div className={styles.underline}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalPortion;
