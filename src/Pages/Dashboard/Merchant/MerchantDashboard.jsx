import React from "react";
import { MdAdd } from "react-icons/md";
import StatsCards from "./Overview/StatsCards";
import OverallStatistics from "./Overview/OverallStatistics";
import ShippingReports from "./Overview/ShippingReports";
import LateInvoices from "./Overview/LateInvoices";
import ShipmentAlerts from "./Overview/ShipmentAlerts";

const MerchantDashboard = () => {
  return (
    <div className="pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">
            You can access all your data and information from anywhere.
          </p>
        </div>
        <button className="btn bg-[#B6F01E] hover:bg-[#a3d61b] text-black border-none rounded-lg px-6 font-bold flex items-center gap-2">
          <MdAdd className="text-xl" />
          Add Parcel
        </button>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts & Reports */}
      <div className="space-y-8">
        <OverallStatistics />
        <ShippingReports />
      </div>

      {/* Bottom Section: Late Invoices & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="h-full">
            <LateInvoices />
        </div>
        <div className="h-full">
            <ShipmentAlerts />
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
