import type {FC} from 'react';
import styles from './About.module.scss';
import PromisePortion from "../PromisePortion/PromisePortion.tsx";
import StatsSection from "../StatsSection/StatsSection.tsx";
import ImageCarousel from "../ImageCarousel/ImageCarousel.tsx";

type AboutProps = object

const About: FC<AboutProps> = () => {

    const person = [{
        img: "src/assets/images/user1.png",
        name: "John Doe",
        instagramUrl: "https://instagram.com/johndoe",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        designation: "Chief Executor Offcier"
    },
        {
            img: "src/assets/images/user2.png",
            name: "R Simth",
            instagramUrl: "https://instagram.com/johndoe",
            linkedinUrl: "https://linkedin.com/in/johndoe",
            designation: "Managing Director"
        },
        {
            img: "src/assets/images/user3.png",
            name: "G Taylor",
            instagramUrl: "https://instagram.com/johndoe",
            linkedinUrl: "https://linkedin.com/in/johndoe",
            designation: "Chief Finance Officer"
        }];
    return (<div className={styles.About}>
            <div className={styles.container}>
                <div className={styles.ourStoryLeft}>
                    <span className={styles.heading}>Our Story</span>
                    <div className={styles.contentWrapper}>
                        <p className={styles.text}>
                            Launched in 2015, Exclusive is South Asia’s premier online shopping
                            marketplace with an active presence in Bangladesh. Supported by a wide
                            range of tailored marketing, data, and service solutions, Exclusive has
                            10,500 sellers and 300 brands and serves 3 million customers across
                            the region.
                        </p>
                        <p className={styles.text}>
                            Exclusive has more than 1 Million products to offer, growing very fast.
                            Exclusive offers a diverse assortment in categories ranging from
                            consumer.
                        </p>
                    </div>
                </div>
                <img src="src/assets/images/about-page.png" alt="User"/>
            </div>
            <div className={styles.marginTop50}></div>
            <StatsSection/>
            <div className={styles.carouselWrapper}>
                <ImageCarousel items={person}/>
            </div>

            <PromisePortion/>
        </div>
    );
};

export default About;
