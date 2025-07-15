import type {FC} from 'react';
import styles from './About.module.scss';

type AboutProps = object

const About: FC<AboutProps> = () => (
    <div className={styles.About}>
        About Component
    </div>
);

export default About;
