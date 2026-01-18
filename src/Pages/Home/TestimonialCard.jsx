import React from "react";
import quoteIcon from "../../assets/assets/reviewQuote.png";

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 relative text-left h-full border border-gray-100 flex flex-col justify-between">
      <div>
        <img src={quoteIcon} alt="Quote" className="w-10 h-10 opacity-30 mb-6" />
        <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
          {review.review}
        </p>
      </div>

      <div>
        <div className="border-t border-dashed border-gray-200 my-6"></div>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-offset-2 ring-[#003C3C]/10">
              <img src={review.user_photoURL} alt={review.userName} />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#003C3C] text-lg">
              {review.userName}
            .</h4>
            <p className="text-xs text-gray-500 font-medium">
              {review.designation || "Customer"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
