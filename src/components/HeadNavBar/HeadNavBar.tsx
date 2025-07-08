import { useState } from 'react';
import type { FC } from 'react';
import styles from './HeadNavBar.module.scss';
import TopBarButton from '../TopBarButton/TopBarButton';
import InputBox from '../InputBox/InputBox';
import { useNavigate } from 'react-router-dom';


interface HeadNavBarProps { }

const HeadNavBar: FC<HeadNavBarProps> = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onClick = (value: string) => {
    navigate(value);
  }

  return (
    <div className={styles.HeadNavBar}>
      <div className={styles.ExecutiveButton}><TopBarButton>Exclusive</TopBarButton></div>
      <div className={styles.ButtonBox}>
        <TopBarButton onClick={() => onClick("/")}>Home</TopBarButton>

        <TopBarButton onClick={() => onClick("/contact")}>Contact</TopBarButton>
        <TopBarButton onClick={() => onClick("/about")}>About</TopBarButton>
        <TopBarButton onClick={() => onClick("/signup")}>Signup</TopBarButton>
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
          <div className={styles.WishList} onClick={() => onClick("/wishlist")}>
            <img src='src/assets/images/Wishlist.png' />
          </div>
          <div className={styles.Cart} onClick={() => onClick("/cart")}>
            <img src='src/assets/images/cart.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadNavBar;
