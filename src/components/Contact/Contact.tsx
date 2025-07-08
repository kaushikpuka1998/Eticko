import React, { FC } from 'react';
import styles from './Contact.module.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <div className={styles.Contact}>
    Contact Component
  </div>
);

export default Contact;
