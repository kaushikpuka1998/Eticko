import {type FC} from 'react';
import styles from './LoginPage.module.scss';

type LoginPageProps = object

const LoginPage: FC<LoginPageProps> = () => (
    <div className={styles.LoginPage}>
        LoginPage Component
    </div>
);

export default LoginPage;
