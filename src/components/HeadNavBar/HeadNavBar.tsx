import React, { FC } from 'react';
import styles from './HeadNavBar.module.scss';
import TopBarButton from '../TopBarButton/TopBarButton';

interface HeadNavBarProps {}

const HeadNavBar: FC<HeadNavBarProps> = () => (
  <div className={styles.HeadNavBar}>
       <TopBarButton>Exclusive</TopBarButton>
      <div className={styles.ButtonBox}>
          <TopBarButton>Home</TopBarButton>
          <TopBarButton>Contact</TopBarButton>
          <TopBarButton>About</TopBarButton>
          <TopBarButton>Signup</TopBarButton>
      </div>
  </div>
);

export default HeadNavBar;
