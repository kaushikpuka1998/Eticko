import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './FooterAccountPortion.module.scss';

type FooterAccountPortionProps = object;

const FooterAccountPortion: FC<FooterAccountPortionProps> = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.FooterAccountPortion}>
            <span
                className={styles.title}>Account</span>
            <span
                className={styles.item}>My Account</span>
            <span
                className={styles.item}
                onClick={() => navigate('/signup')}
            >Login / Register
            </span>
            <span
                className={styles.item}
                onClick={() => navigate('/cart')}>Cart</span>
            <span
                className={styles.item}
                onClick={() => navigate('/wishlist')}>Wishlist</span>
            <span
                className={styles.item}>Shop</span>
        </div>
    );
};

export default FooterAccountPortion;