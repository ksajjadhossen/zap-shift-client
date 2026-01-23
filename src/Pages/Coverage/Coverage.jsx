import React from "react";
import BangladeshMap from "./BangladeshMap";
import { FiSearch } from "react-icons/fi";

const Coverage = () => {
  return (
    <div className="bg-[#F8FDF5] min-h-screen py-10 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#002D2D] mb-8">
            We are available in 64 districts
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <div className="flex items-center bg-[#F3F4F6] rounded-full p-2 pl-6">
              <FiSearch className="text-gray-400 text-xl mr-3" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent flex-grow outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#C1F04C] hover:bg-[#b0e03c] text-[#002D2D] font-semibold px-8 py-2 rounded-full transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-2xl font-bold text-[#002D2D] mb-6">
              We deliver almost all over Bangladesh
            </h2>
          </div>

          {/* Map Component */}
          <BangladeshMap />
        </div>
      </div>
    </div>
  );
};

export default Coverage;
