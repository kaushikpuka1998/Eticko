import {type FC} from 'react';
import styles from './LoginPage.module.scss';

type LoginPageProps = object

const LoginPage: FC<LoginPageProps> = () => (
    <div className={styles.LoginPage}>
        <div className={styles.contentWrapper}>
            <div className={styles.header}>
                <span className={styles.title}>Log in to Exclusive</span>
                <span className={styles.subtitle}>Enter your details below</span>
            </div>

            <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                    <span className={styles.label}>Email or Phone Number</span>
                    <input type="text" className={styles.inputBox}/>
                </div>

                <div className={styles.inputField}>
                    <span className={styles.label}>Password</span>
                    <input type="password" className={styles.inputBox}/>
                </div>
            </div>

        </div>

        <div className={styles.footer}>
            <div className={styles.buttonWrapper}>
                <div className={styles.loginButton}>
                    <span className={styles.loginButtonText}>Log In</span>
                </div>
            </div>
            <span className={styles.forgetPassword}>Forget Password?</span>
        </div>

    </div>
);

export default LoginPage;
