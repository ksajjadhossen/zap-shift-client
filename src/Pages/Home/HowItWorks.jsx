import React from "react";
import bookingIcon from "../../assets/assets/bookingIcon.png";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Booking / Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: bookingIcon,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: bookingIcon, // Placeholder
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: bookingIcon, // Placeholder
    },
    {
      id: 4,
      title: "Booking (Intl & Corporate)",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: bookingIcon, // Placeholder
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#003C3C] mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#003C3C] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
