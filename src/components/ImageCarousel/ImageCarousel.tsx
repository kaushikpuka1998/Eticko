import {type FC} from 'react';
import {FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from './ImageCarousel.module.scss';

type CarouselItem = {
    img: string;
    name: string;
    designation: string;
    instagramUrl?: string;
    linkedinUrl?: string;
};

type ImageCarouselProps = {
    items: CarouselItem[],
    images?: { img: string; linkedinUrl: string; name: string; instagramUrl: string; designation: string }[]
};

const ImageCarousel: FC<ImageCarouselProps> = ({items}) => (
    <div className={styles.carousel}>
        {items.map((item, idx) => (
            <div key={idx} className={styles.imageContainer}>
                <img src={item.img} alt={item.name} className={styles.image}/>
                <div className={styles.iconOverlay}>
                    <a href={item.instagramUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <FaInstagram/>
                    </a>
                    <a href={item.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.name}>{item.designation}</div>
            </div>
        ))}
    </div>
);

export default ImageCarousel;