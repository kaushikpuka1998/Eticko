import type {FC} from 'react';
import styles from './SalePortion.module.scss';

type SalePortionProps = object

const SalePortion: FC<SalePortionProps> = () => (
    <div className={styles.SalePortion}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    </div>
);

export default SalePortion;
