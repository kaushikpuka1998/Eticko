import type {FC} from 'react';
import styles from './loginSignUpComponent.module.scss';
import Signup from "../Signup/Signup.tsx";
import LoginPage from "../LoginPage/LoginPage.tsx";

interface LoginSignUpComponentProps {
    signup?: boolean;
}

const LoginSignUpComponent: FC<LoginSignUpComponentProps> = ({signup}) => {
    return (
        <div className={styles.loginSignUpComponent}>
            <div className={styles.Signup}>
                <div>
                    <img
                        src="src/assets/images/login-signuppage.png"
                        alt="Side Image placeholder"
                    />
                </div>
                <div>
                    {signup ? <Signup/> : <LoginPage/>}
                </div>
            </div>
        </div>
    );
};

export default LoginSignUpComponent;
