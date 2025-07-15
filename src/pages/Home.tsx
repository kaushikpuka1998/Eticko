// src/pages/Home.tsx
import Divider from "../components/Divider/Divider";
import LeftColumnBar from "../components/LeftColumnBar/LeftColumnBar";
import BannerCarousel from "../Carousel";
import FlashSalesPortion from "../components/FlashSalesPortion/FlashSalesPortion";
import BestSellingProductsPortion from "../components/BestSellingProductsPortion/BestSellingProductsPortion";
import Categoryortion from "../components/Categoryortion/Categoryortion";
import SalePromotionBannerortion from "../components/SalePromotionBannerortion/SalePromotionBannerortion";
import ExploreProductPortion from "../components/ExploreProductPortion/ExploreProductPortion";
import NewArrivalPortion from "../components/NewArrivalPortion/NewArrivalPortion";
import PromisePortion from "../components/PromisePortion/PromisePortion";

const Home = () => {
    return (
        <body>
        <div>
            <hr className="border-t border-gray-300 my-4"/>
            <div className="flex">
                <LeftColumnBar/>
                <Divider/>
                <div className="flex-1">
                    <BannerCarousel
                        images={[
                            "src/assets/images/frame1.jpg",
                            "src/assets/images/Frame2.jpg",
                            "src/assets/images/Frame3.png",
                            "src/assets/images/Frame4.jpg",
                        ]}
                    />
                </div>
            </div>
        </div>
        <hr className="border-t border-gray-300 my-4"/>
        <FlashSalesPortion/>
        <hr className="border-t border-gray-300 my-4"/>
        <BestSellingProductsPortion/>
        <hr className="border-t border-gray-300 my-4"/>
        <Categoryortion/>
        <hr className="border-t border-gray-300 my-4"/>
        <SalePromotionBannerortion/>
        <hr className="border-t border-gray-300 my-4"/>
        <ExploreProductPortion/>
        <hr className="border-t border-gray-300 my-4"/>
        <NewArrivalPortion/>
        <PromisePortion/>
        </body>
    );
};

export default Home;
