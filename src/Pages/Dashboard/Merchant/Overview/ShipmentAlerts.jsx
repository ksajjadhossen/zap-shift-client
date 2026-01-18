import React from "react";
import { MdInfoOutline, MdOutlineInventory2 } from "react-icons/md";

const ShipmentAlerts = () => {
  const alerts = [
    {
      type: "Damaged",
      id: "#SP11251C",
      time: "2 Hours ago",
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-100",
    },
    {
      type: "Damaged",
      id: "#SP11251C",
      time: "2 Hours ago",
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      type: "Damaged",
      id: "#SP11251C",
      time: "2 Hours ago",
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-100",
    },
    {
      type: "Damaged",
      id: "#SP11251C",
      time: "2 Hours ago",
      iconColor: "text-gray-500",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Shipment Alerts</h3>
        <button className="btn btn-sm bg-[#B6F01E] border-none text-black hover:bg-[#a3d61b] font-medium normal-case rounded-full px-4">
            View All Invoices
        </button>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 flex mb-6">
          <div className="flex-1 text-center border-r border-gray-200">
              <h4 className="text-xl font-bold text-gray-800">2</h4>
              <p className="text-xs text-gray-500">Damaged</p>
          </div>
          <div className="flex-1 text-center">
              <h4 className="text-xl font-bold text-gray-800">10</h4>
              <p className="text-xs text-gray-500">Weather Delays</p>
          </div>
      </div>

      <div className="flex-1 space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${alert.bgColor} ${alert.iconColor} flex-shrink-0`}>
                <MdInfoOutline className="text-xl" />
            </div>
            <div className="flex-1">
                <h5 className="font-bold text-gray-800 text-sm">{alert.type}</h5>
                <p className="text-xs text-gray-500 mt-1">
                    Shipment <span className="font-bold text-gray-700">{alert.id}</span> • {alert.time}
                </p>
            </div>
            <button className="btn btn-xs btn-square btn-ghost text-gray-400">
                <MdOutlineInventory2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentAlerts;
