import React from 'react';
import type { FC } from 'react';
import styles from './LeftColumnBar.module.scss';
import LeftColumnButton from '../LeftColumnButton/LeftColumnButton';

interface LeftColumnBarProps { }

const LeftColumnBar: FC<LeftColumnBarProps> = () => (
  <div className={styles.LeftColumnBar}>
    <LeftColumnButton>Women's Fashion</LeftColumnButton>
    <LeftColumnButton>Men's Fashion</LeftColumnButton>
    <LeftColumnButton>Electronics</LeftColumnButton>
    <LeftColumnButton>Home & lifestyle</LeftColumnButton>
    <LeftColumnButton>Medicine</LeftColumnButton>
    <LeftColumnButton>Sports & Outdoor</LeftColumnButton>
    <LeftColumnButton>Baby’s & Toys</LeftColumnButton>
    <LeftColumnButton>Groceries & Pets</LeftColumnButton>
    <LeftColumnButton>Health & Beauty</LeftColumnButton>
  </div>
);

export default LeftColumnBar;
