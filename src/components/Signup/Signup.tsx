import React, { FC } from 'react';
import styles from './Signup.module.scss';

interface SignupProps {}

const Signup: FC<SignupProps> = () => (
  <div className={styles.Signup}>
    Signup Component
  </div>
);

export default Signup;
