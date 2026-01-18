import React from "react";
import liveTracking from "../../assets/assets/live-tracking.png";
import safeDelivery from "../../assets/assets/safe-delivery.png";
import callCenter from "../../assets/assets/customer-top.png"; // Assuming this is support

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our advanced tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: liveTracking,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcel are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeDelivery,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns whenever you need us.",
      image: callCenter,
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 space-y-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 shadow-sm"
          >
            <div className="md:w-1/3 lg:w-1/4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-contain max-h-48"
              />
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <h3 className="text-2xl font-bold text-[#003C3C] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
