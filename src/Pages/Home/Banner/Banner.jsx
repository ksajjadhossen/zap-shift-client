import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/assets/banner/banner1.png";
import banner2 from "../../../assets/assets/banner/banner2.png";
import banner3 from "../../../assets/assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true} // স্লাইড বোঝার জন্য নিচে ছোট ডট রাখতে পারেন, না চাইলে false করে দিন
        showThumbs={false}
        showArrows={true} // ফুল ব্যানারে অ্যারো থাকলে ইউজার নেভিগেট করতে পারে
        interval={4000}
        stopOnHover={true}
      >
        {/* স্লাইড ১ */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-full object-cover" // object-cover ব্যবহার করলে ইমেজ পুরো এরিয়া জুড়ে থাকবে
          />
        </div>

        {/* স্লাইড ২ */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* স্লাইড ৩ */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
