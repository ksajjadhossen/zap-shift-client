import React from "react";
import merchantBg from "../../assets/assets/be-a-merchant-bg.png";
import locationMerchant from "../../assets/assets/location-merchant.png";

const MerchantCTA = () => {
  return (
    <div className="py-20 container mx-auto px-4">
      <div
        className="rounded-3xl p-10 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between"
        style={{
          backgroundImage: `url(${merchantBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#003C3C",
        }}
      >
        <div className="relative z-10 lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Merchant and Customer Satisfaction <br className="hidden lg:block" />
            is Our First Priority
          </h2>
          <p className="text-gray-200 mb-10 max-w-xl text-lg leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your parcels in every
            corner of Bangladesh right on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-[#B6F01E] hover:bg-[#a3d61b] text-[#003C3C] border-none rounded-full px-8 py-3 h-auto font-bold text-base capitalize">
              Become a Merchant
            </button>
            <button className="btn btn-outline text-[#B6F01E] border-[#B6F01E] hover:bg-[#B6F01E] hover:text-[#003C3C] hover:border-[#B6F01E] rounded-full px-8 py-3 h-auto font-bold text-base capitalize">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        
        <div className="relative z-10 lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img 
            src={locationMerchant} 
            alt="Merchant Location" 
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantCTA;
