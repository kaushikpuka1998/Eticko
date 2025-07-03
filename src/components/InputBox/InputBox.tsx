import React from 'react';
import type { FC } from 'react';
import styles from './InputBox.module.scss';
import PropTypes from 'prop-types';

interface InputBoxProps {}

const InputBox = ({ label, placeholder, value, onChange, type = 'text' }) => {
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

      <div className={styles.WishList}>
            <img src='src/assets/images/search.png'/>
        </div>
    </div>

      
  
  );
};
InputBox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputBox;
