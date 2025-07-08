import React, { FC } from 'react';
import styles from './Groceries.module.scss';

interface GroceriesProps {}

const Groceries: FC<GroceriesProps> = () => (
  <div className={styles.Groceries}>
    Groceries Component
  </div>
);

export default Groceries;
