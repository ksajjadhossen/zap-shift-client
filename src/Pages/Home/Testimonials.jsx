import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./TestimonialCard";
import deliveryVan from "../../assets/assets/delivery-van.png"; // Placeholder for illustration if needed
import reviewsData from "../../assets/data/reviews.json";

const Testimonials = () => {
  // Map the JSON data to the structure expected by TestimonialCard
  // If designation is missing in JSON, provide a default
  const reviews = reviewsData.map((review) => ({
    ...review,
    designation: review.designation || "Verified Customer",
  }));

  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 opacity-80">
              <img
                src={deliveryVan}
                alt="Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003C3C] mb-4">
            What our customers are saying
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        <div className="testimonial-carousel-wrapper">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            centerMode={true}
            centerSlidePercentage={33}
            swipeable={true}
            emulateTouch={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute z-10 top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 text-[#003C3C] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute z-10 top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 bg-[#B6F01E] rounded-full p-3 shadow-lg hover:bg-[#a3d61b] text-black transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    className="inline-block mx-1 w-2 h-2 rounded-full bg-[#003C3C]"
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  className="inline-block mx-1 w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                  title={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="p-4 h-full">
                <TestimonialCard review={review} />
              </div>
            ))}
          </Carousel>
        </div>

        <style>{`
        .testimonial-carousel-wrapper .carousel .slide {
            background: transparent;
            text-align: left;
        }
        @media (max-width: 768px) {
            .testimonial-carousel-wrapper .carousel .slide {
                min-width: 100%; /* Force single slide on mobile if centerMode messes up */
            }
        }
      `}</style>
      </div>
    </div>
  );
};

export default Testimonials;
