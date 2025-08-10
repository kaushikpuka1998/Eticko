import {type FC} from 'react';
import styles from './FormContainer.module.scss';

type FormContainerProps = object

const FormContainer: FC<FormContainerProps> = () => {
    return (
        <div className={styles.FormContainer}>
            <div className={styles.formContent}>
                <div className={styles.inputRow}>
                    <div className={styles.inputBox}>
                        <div className={styles.inputBackground}></div>
                        <span className={styles.placeholder}>
              <span className={styles.text}>Your Name</span>
              <span className={styles.required}>*</span>
            </span>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.inputBackground}></div>
                        <span className={styles.placeholder}>
              <span className={styles.text}>Your Email</span>
              <span className={styles.required}>*</span>
            </span>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.inputBackground}></div>
                        <span className={styles.placeholder}>
              <span className={styles.text}>Your Phone</span>
              <span className={styles.required}>*</span>
            </span>
                    </div>
                </div>
                <div className={styles.messageBox}>
                    <div className={styles.messageBackground}></div>
                    <span className={styles.messagePlaceholder}>Your Message</span>
                </div>

                {/* Submit Button */}
                <div className={styles.submitButton}>
                    <span className={styles.buttonText}>Send Message</span>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
