import React from 'react';
import type { FC } from 'react';
import styles from './LeftColumnBar.module.scss';
import LeftColumnButton from '../LeftColumnButton/LeftColumnButton';
import { useNavigate } from 'react-router-dom';

interface LeftColumnBarProps { }

const LeftColumnBar: FC<LeftColumnBarProps> = () => {

  const navigate = useNavigate();

  const onClick = (value: string) => {
    navigate(value);
  }
  return (
    <div className={styles.LeftColumnBar}>
      <LeftColumnButton onClick={() => onClick("/women-fashion")}>Women's Fashion</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/men-fashion")}>Men's Fashion</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("electronics")}>Electronics</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/home-lifestyle")}>Home & lifestyle</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/medicine")}>Medicine</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/sports")}>Sports & Outdoor</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/baby-toye")}>Baby’s & Toys</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/groceries")}>Groceries & Pets</LeftColumnButton>
      <LeftColumnButton onClick={() => onClick("/health")}>Health & Beauty</LeftColumnButton>
    </div>
  );
};

export default LeftColumnBar;
