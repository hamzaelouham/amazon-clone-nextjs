import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

function Banner() {
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
          <img src={image1} alt="1" />
        </div>
        <div>
          <img src={image2} alt="2" />
        </div>
        <div>
          <img src={image3} alt="3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
