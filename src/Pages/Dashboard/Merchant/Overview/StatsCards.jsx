import React from "react";
import { MdLocalShipping, MdCheckCircleOutline } from "react-icons/md";
import { FaTruckMoving, FaBoxOpen } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const StatsCards = () => {
  const stats = [
    {
      label: "To Pay",
      value: "129",
      icon: <TbCurrencyTaka className="text-2xl" />,
    },
    {
      label: "Ready Pick UP",
      value: "1,325",
      icon: <FaBoxOpen className="text-2xl" />,
    },
    {
      label: "In Transit",
      value: "50",
      icon: <FaTruckMoving className="text-2xl" />,
    },
    {
      label: "Ready to Deliver",
      value: "50",
      icon: <MdLocalShipping className="text-2xl" />,
    },
    {
      label: "Delivered",
      value: "50",
      icon: <MdCheckCircleOutline className="text-2xl" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-100">
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
