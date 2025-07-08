import { useState } from 'react';
import './App.css'
import HeadNavBar from './components/HeadNavBar/HeadNavBar'
import SalePortion from './components/SalePortion/SalePortion'
import Divider from './components/Divider/Divider'
import LeftColumnBar from './components/LeftColumnBar/LeftColumnBar'
import BannerCarousel from './Carousel'
import Categoryortion from './components/Categoryortion/Categoryortion'
import Footer from './components/Footer/Footer'
import FlashSalesPortion from './components/FlashSalesPortion/FlashSalesPortion';
import BestSellingProductsPortion from './components/BestSellingProductsPortion/BestSellingProductsPortion';


export const sampleProducts = [
  {
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: "120",
    originalPrice: "160",
    ratingCount: 88,
    discount: "-40%",
    imageUrl: "src/assets/images/playstation.png",
    rating: 3.9,
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/24/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/19/14" }
    ]
  },
  {
    title: "Logitech Wireless Mouse",
    currentPrice: "75",
    originalPrice: "99",
    ratingCount: 58,
    discount: "-25%",
    rating: 3.9,
    imageUrl: "src/assets/images/keyboard.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  },
  {
    title: "IPS LCD Gaming Monitor",
    currentPrice: "370",
    originalPrice: "400",
    ratingCount: 99,
    rating: 3.9,
    discount: "-30%",
    imageUrl: "src/assets/images/monitor.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  },
  {
    title: "S-Series Comfort Chair",
    currentPrice: "75",
    originalPrice: "99",
    ratingCount: 58,
    rating: 4.5,
    discount: "-25%",
    imageUrl: "src/assets/images/chair.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  },
  {
    title: "Logitech Wireless Mouse",
    currentPrice: "75",
    originalPrice: "99",
    ratingCount: 58,
    rating: 3.9,
    discount: "-25%",
    imageUrl: "src/assets/images/Mouse.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  },
  {
    title: "Apple IPhone 5S",
    currentPrice: "7500",
    originalPrice: "9900",
    ratingCount: 58,
    rating: 3.9,
    discount: "-25%",
    imageUrl: "src/assets/images/phone.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  },
  {
    title: "Sony Headphone",
    currentPrice: "75",
    originalPrice: "99",
    ratingCount: 58,
    rating: 3.9,
    discount: "-25%",
    imageUrl: "src/assets/images/headphone.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  },
  {
    title: "Playstation PS5",
    currentPrice: "75",
    originalPrice: "99",
    ratingCount: 58,
    rating: 3.9,
    discount: "-25%",
    imageUrl: "src/assets/images/gamestation.png",
    ratingImgUrl: "src/assets/images/Star.png",
    icons: [
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/25/24" },
      { bg: "https://picsum.photos/id/34/34", overlay: "https://picsum.photos/id/20/14" }
    ]
  }
];
function App() {

  return (
    <>
      <SalePortion />
      <div className="body">
        <HeadNavBar />
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex">
          <LeftColumnBar />
          <Divider />
          <div className="flex-1">
            <BannerCarousel images={["src/assets/images/frame1.jpg", "src/assets/images/Frame2.jpg", "src/assets/images/Frame3.png", "src/assets/images/Frame4.jpg"]} />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <FlashSalesPortion />
      <hr className="border-t border-gray-300 my-4" />
      <BestSellingProductsPortion />
      <Categoryortion />
      <Footer />
    </>
  )
}

export default App
