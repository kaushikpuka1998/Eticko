import React from 'react';
import styles from './InputBox.module.scss';

type InputBoxProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const InputBox = ({ label, placeholder, value, onChange, type = 'text' }: InputBoxProps) => {
  return (


    <div className={styles.inputGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <div className={styles.search}>
        <img src='src/assets/images/search.png' />
      </div>
    </div>



  );
};

export default InputBox;
