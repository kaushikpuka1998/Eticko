import { useState } from 'react';
import type { FC } from 'react';
import styles from './HeadNavBar.module.scss';
import TopBarButton from '../TopBarButton/TopBarButton';
import InputBox from '../InputBox/InputBox';


interface HeadNavBarProps { }

const HeadNavBar: FC<HeadNavBarProps> = () => {

  const [email, setEmail] = useState("");

  return (
    <div className={styles.HeadNavBar}>
      <div className={styles.ExecutiveButton}><TopBarButton>Exclusive</TopBarButton></div>
      <div className={styles.ButtonBox}>
        <TopBarButton>Home</TopBarButton>
        <TopBarButton>Contact</TopBarButton>
        <TopBarButton>About</TopBarButton>
        <TopBarButton>Signup</TopBarButton>
      </div>
      <div className={styles.RightSide}>
        <div className={styles.searchBar}>
          <InputBox
            label=""
            placeholder="What are you looking for?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

        </div>

        <div className={styles.imgGrid}>
          <div className={styles.WishList}>
            <img src='src/assets/images/Wishlist.png' />
          </div>
          <div className={styles.Cart}>
            <img src='src/assets/images/cart.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadNavBar;
