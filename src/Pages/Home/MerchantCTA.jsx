import React from "react";
import merchantBg from "../../assets/assets/be-a-merchant-bg.png";

const MerchantCTA = () => {
  return (
    <div className="py-20 container mx-auto px-4">
      <div
        className="rounded-3xl p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between"
        style={{
          backgroundImage: `url(${merchantBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#003C3C", // Fallback
        }}
      >
        {/* Overlay for better text readability if needed, though design seems to have dark bg built-in */}
        <div className="absolute inset-0 bg-[#003C3C] opacity-90 z-0"></div>

        <div className="relative z-10 lg:w-2/3">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl">
            We offer the lowest delivery charge within the highest value along
            with 100% safety of your product. Putting courier delivery into
            operation one's source of transport save on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-[#B6F01E] hover:bg-[#a3d61b] text-black border-none rounded-full px-8 font-bold">
              Become a Merchant
            </button>
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black rounded-full px-8 font-bold">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        
        {/* Illustration/Boxes - Assuming it's part of the background or a separate image */}
        {/* If separate image is needed: */}
        {/* <div className="relative z-10 lg:w-1/3 mt-10 lg:mt-0">
             <img src={boxesImage} alt="Boxes" />
        </div> */}
      </div>
    </div>
  );
};

export default MerchantCTA;
