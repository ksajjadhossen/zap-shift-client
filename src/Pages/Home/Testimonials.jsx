import React from "react";
import reviewsData from "../../assets/data/reviews.json";
import quoteIcon from "../../assets/assets/reviewQuote.png";

const Testimonials = () => {
  // Filter for high rated reviews and take 3
  const topReviews = reviewsData
    .filter((review) => review.ratings >= 4)
    .slice(0, 3);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6">
             {/* Using illustration from design if available, otherwise just text */}
             {/* <img src={someIllustration} /> */}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003C3C] mb-4">
            What our customers are saying
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover positive, real, and inspiring stories from our customers.
            Their trust drives our passion for excellence every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <img
                src={quoteIcon}
                alt="Quote"
                className="w-8 h-8 opacity-20 mb-4"
              />
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src={review.user_photoURL} alt={review.userName} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#003C3C]">{review.userName}</h4>
                  <p className="text-xs text-gray-400">Verified Customer</p>
                </div>
              </div>
              
               {/* Rating Stars */}
               <div className="absolute top-8 right-8 flex text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(review.ratings))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
