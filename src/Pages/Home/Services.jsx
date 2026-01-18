import React from "react";
import serviceIcon from "../../assets/assets/service.png";
import servicesData from "../../assets/data/services.json";

const Services = () => {
  // Map JSON data to component structure, adding IDs and highlight logic
  const services = servicesData.map((service, index) => ({
    ...service,
    id: index + 1,
    // Highlight "Nationwide Delivery" or the second item to match previous design
    highlight: service.title.includes("Nationwide") || index === 1,
  }));

  return (
    <div className="py-20 bg-[#003C3C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-3xl text-center transition-transform hover:-translate-y-1 ${
                service.highlight
                  ? "bg-[#B6F01E] text-black"
                  : "bg-white text-black"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
                {/* Using the service icon or a placeholder */}
                <img
                  src={serviceIcon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p
                className={`text-sm ${service.highlight ? "text-gray-800" : "text-gray-500"}`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
