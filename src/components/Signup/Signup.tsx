import type {FC,} from 'react';
import styles from './Signup.module.scss';
import {useNavigate} from 'react-router-dom';

type SignupProps = object

const Signup: FC<SignupProps> = () => {

    const navigate = useNavigate();
    const onClick = (value: string) => {
        navigate(value);
    }

    return (
        <div className={styles.Signup}>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <span className={styles.title}>Create an account</span>
                    <span className={styles.subtitle}>Enter your details below</span>
                </div>

                <div className={styles.inputSection}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Name</label>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email or Phone Number</label>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <div className={styles.underline}></div>
                    </div>
                </div>

                <div className={styles.buttonSection}>
                    <div className={styles.createButton}>
                        <span>Create Account</span>
                    </div>

                    <div className={styles.googleWrapper}>
                        <div className={styles.googleButton}>
                            <img
                                src="src/assets/images/Icon-Google.png"
                                alt="Google Icon placeholder"
                            />
                            <span>Sign up with Google</span>
                        </div>

                        <div onClick={() => onClick("/login")} className={styles.loginLink}>
                            <span className={styles.already}>Already have account?</span>
                            <div className={styles.loginWrapper}>
                                <span className={styles.login}>Log in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
