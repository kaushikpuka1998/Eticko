import type {FC} from 'react';
import styles from './NotExitPage.module.scss';
import {Link} from 'react-router-dom';

type NotExitPageProps = object

const NotExitPage: FC<NotExitPageProps> = () => (
    <div className={styles.NotExitPage}>
        <div className={styles.container}>
            <span className={styles.errorText}>404 Not Found</span>
            <span className={styles.message}>
          Your visited page not found. You may go home page.
        </span>
        </div>

        <Link to="/" className={styles.backButton}>
            <span>Back to home page</span>
        </Link>
    </div>
);

export default NotExitPage;
