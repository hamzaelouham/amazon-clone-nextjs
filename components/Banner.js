import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src="/images/1.jpg" />
        </div>
        <div>
          <img src="/images/2.jpg" />
        </div>
        <div>
          <img src="/images/3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
