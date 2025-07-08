import React, { type FC } from 'react';
import styles from './Wishlist.module.scss';

interface WishlistProps { }

const Wishlist: FC<WishlistProps> = () => (
  <div className={styles.Wishlist}>
    Wishlist Component
  </div>
);

export default Wishlist;
