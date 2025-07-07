import type { FC } from 'react';
import styles from './ItemBoxPortion.module.scss';


type IconType = {
  bg: string;
  overlay: string;
};

export interface ItemBoxPortionProps {
  title: string;
  currentPrice: string;
  originalPrice: string;
  ratingCount: number;
  discount?: string;
  imageUrl: string;
  ratingImgUrl: string;
  rating: number;
  icons?: IconType[];
}

const MAX_STARS = 5;

const getStarIcons = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
  const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

  // Filled stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={`full-${i}`} src="src/assets/images/Star.png" alt="full star" className={styles.starIcon} />);
  }

  // Half star
  if (hasHalfStar) {
    stars.push(<img key="half" src="src/assets/images/star-half-filled.png" alt="half star" className={styles.starIcon} />);
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={`empty-${i}`} src="src/assets/images/empty-star.png" alt="empty star" className={styles.starIcon} />);
  }

  return stars;
};


const ItemBoxPortion: FC<ItemBoxPortionProps> = ({
  title,
  currentPrice,
  originalPrice,
  ratingCount,
  discount,
  imageUrl,
  rating
}) => (
  <div className={styles.productCardWrapper}>

    <div className={styles.productCard}>
      <div className={styles.topIcon}>
        {discount && (
          <div className={styles.discountBadge}>
            <span>{discount}</span>
          </div>
        )}

        <div>
          <div className={styles.img1}>
            <img src="src/assets/images/Heart.png" />
          </div>

          <div className={styles.img1}>
            <img src="src/assets/images/Eye.png" />
          </div>
        </div>
      </div>

      <div className={styles.addToCartWrapper}>
        <div className={styles.addToCartButton}>Add to Cart</div>
      </div>
      <div className={styles.productImage}>
        <img src={imageUrl} alt={title} />
      </div>



    </div>



    <div className={styles.productInfo}>
      <span className={styles.productTitle}>{title}</span>
      <div className={styles.priceWrapper}>
        <span className={styles.priceCurrent}>&#36;{currentPrice}</span>
        <span className={styles.priceOriginal}>&#36;{originalPrice}</span>
      </div>
      <div className={styles.ratingWrapper}>
        <span className={styles.ratingCount}>{getStarIcons(rating)}</span>
        <span className={styles.ratingCount}>({ratingCount})</span>
      </div>
    </div>
  </div>
);

export default ItemBoxPortion;
