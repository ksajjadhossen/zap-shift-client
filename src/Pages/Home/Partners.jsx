import React from "react";
import Marquee from "react-fast-marquee"; // প্যাকেজটি ইমপোর্ট করুন

import casio from "../../assets/assets/brands/casio.png";
import amazon from "../../assets/assets/brands/amazon.png";
import moonstar from "../../assets/assets/brands/moonstar.png";
import star from "../../assets/assets/brands/star.png";
import startPeople from "../../assets/assets/brands/start_people.png";
import randstad from "../../assets/assets/brands/randstad.png";

const Partners = () => {
  const brands = [casio, amazon, moonstar, star, startPeople, randstad];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-bold text-gray-500 mb-10">
          We've helped thousands of sales teams
        </h3>

        {/* Marquee কম্পোনেন্ট ব্যবহার করা হয়েছে */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true} // হোভার করলে স্লাইড থেমে যাবে
          className="overflow-hidden"
        >
          <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index}`}
                className="h-8 md:h-10 object-contain opacity-70  hover:grayscale-0 transition-all duration-500 cursor-pointer"
              />
            ))}
          </div>
        </Marquee>

        <div className="border-b border-gray-200 mt-16 border-dashed"></div>
      </div>
    </div>
  );
};

export default Partners;
