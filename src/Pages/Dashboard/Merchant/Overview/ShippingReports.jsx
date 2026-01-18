import React from "react";
import { BsThreeDotsVertical, BsFilter } from "react-icons/bs";
import { MdCalendarToday, MdEdit } from "react-icons/md";

const ShippingReports = () => {
  const reports = [
    {
      id: "#RQ21534",
      client: "Rasel Ahmed",
      date: "Jan 6, 2025",
      weight: "10 kg",
      shipper: "DHL",
      price: "4500.00",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: "#RQ21535",
      client: "Rakib Hossain",
      date: "Jan 8, 2025",
      weight: "15 kg",
      shipper: "Inpost",
      price: "9800.00",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: "#RQ21536",
      client: "Rakib",
      date: "12 Feb, 2025",
      weight: "5 kg",
      shipper: "Pathao",
      price: "2000.00",
      status: "Transit",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: "#RQ21537",
      client: "Abu Sufian",
      date: "06 Jan, 2025",
      weight: "7 kg",
      shipper: "Steadfast",
      price: "2700.00",
      status: "Waiting",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      id: "#RQ21538",
      client: "Rasel Ahmed",
      date: "Jan 5, 2025",
      weight: "15 kg",
      shipper: "UPS",
      price: "1500.00",
      status: "Transit",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: "#RQ21539",
      client: "Jhankar Mahbub",
      date: "22 Dec, 2024",
      weight: "10 kg",
      shipper: "DHL",
      price: "8500.00",
      status: "Pending",
      statusColor: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Shipping Reports</h3>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline border-gray-200 hover:bg-gray-50 text-gray-600 font-normal normal-case">
            <MdCalendarToday className="text-lg" />
            This Week
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <button className="btn btn-sm btn-circle btn-ghost border border-gray-200">
             <BsFilter />
          </button>
          <button className="btn btn-sm btn-circle btn-ghost border border-gray-200">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 font-medium text-xs uppercase">
              <th className="py-4">ID</th>
              <th className="py-4">Client</th>
              <th className="py-4">Date</th>
              <th className="py-4">Weight</th>
              <th className="py-4">Shipper</th>
              <th className="py-4">Price</th>
              <th className="py-4">Status</th>
              <th className="py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((row, index) => (
              <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="font-medium text-gray-500">{row.id}</td>
                <td className="font-bold text-gray-700">{row.client}</td>
                <td className="text-gray-500">{row.date}</td>
                <td className="text-gray-500">{row.weight}</td>
                <td className="text-gray-500">{row.shipper}</td>
                <td className="font-medium text-gray-700">{row.price}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
                <td className="flex items-center justify-end gap-2">
                    <button className="btn btn-xs btn-ghost text-gray-500 gap-1 font-normal">
                        <MdEdit /> Edit
                    </button>
                    <button className="btn btn-xs btn-circle btn-ghost text-gray-400">
                        <BsThreeDotsVertical />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
          <button className="btn btn-sm btn-outline border-gray-200 font-normal normal-case">
              ← Previous
          </button>
          
          <div className="join">
            <button className="join-item btn btn-sm bg-[#B6F01E] border-none text-black hover:bg-[#a3d61b]">1</button>
            <button className="join-item btn btn-sm btn-ghost">2</button>
            <button className="join-item btn btn-sm btn-ghost">3</button>
            <button className="join-item btn btn-sm btn-ghost">...</button>
            <button className="join-item btn btn-sm btn-ghost">8</button>
            <button className="join-item btn btn-sm btn-ghost">9</button>
            <button className="join-item btn btn-sm btn-ghost">10</button>
          </div>

          <button className="btn btn-sm btn-outline border-gray-200 font-normal normal-case">
              Next →
          </button>
      </div>
    </div>
  );
};

export default ShippingReports;
