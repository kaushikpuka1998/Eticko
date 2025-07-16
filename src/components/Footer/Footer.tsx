import type {FC} from 'react';
import styles from './Footer.module.scss';
import FooterExclusivePortion from '../FooterExclusivePortion/FooterExclusivePortion';
import FooterSuportPortion from '../FooterSuportPortion/FooterSuportPortion';
import FooterAccountPortion from '../FooterAccountPortion/FooterAccountPortion';
import FooterQuickLinkPortion from '../FooterQuickLinkPortion/FooterQuickLinkPortion';
import FooterDownloadAppSectionPortion from '../FooterDownloadAppSectionPortion/FooterDownloadAppSectionPortion';

type FooterProps = object

const Footer: FC<FooterProps> = () => (
    <div className={styles.Footer}>
        <FooterExclusivePortion/>
        <FooterSuportPortion/>
        <FooterAccountPortion/>
        <FooterQuickLinkPortion/>
        <FooterDownloadAppSectionPortion/>

    </div>
);

export default Footer;
