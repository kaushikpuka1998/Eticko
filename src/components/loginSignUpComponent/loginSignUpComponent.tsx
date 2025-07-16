import type {FC} from 'react';
import styles from './loginSignUpComponent.module.scss';

type loginSignUpComponentProps = object

const loginSignUpComponent: FC<loginSignUpComponentProps> = () => (
    <div className={styles.loginSignUpComponent}>
        loginSignUpComponent Component
    </div>
);

export default loginSignUpComponent;
