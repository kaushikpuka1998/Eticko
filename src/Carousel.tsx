import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface BannerCarouselProps {
  images: string[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ images }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={500}
      showArrows={false}
      swipeable
    >
      {images.map((img, index) => (
        <div key={index} className="w-full">
          <img src={img} className="w-full object-cover h-[500px]" alt={`banner-${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
