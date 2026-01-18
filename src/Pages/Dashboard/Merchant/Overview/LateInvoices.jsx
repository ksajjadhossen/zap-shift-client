import React from "react";
import { BsThreeDotsVertical, BsFilter } from "react-icons/bs";

const LateInvoices = () => {
  const invoices = [
    {
      no: "#PTD 145142547",
      price: "4500.00",
      date: "10 day ago",
    },
    {
      no: "#PTD 145142547",
      price: "9800.00",
      date: "1 day ago",
    },
    {
      no: "#PTD 145142547",
      price: "2000.00",
      date: "1h ago",
    },
    {
      no: "#PTD 145142547",
      price: "2700.00",
      date: "2h ago",
    },
    {
      no: "#PTD 145142547",
      price: "1500.00",
      date: "3h ago",
    },
    {
      no: "#PTD 145142547",
      price: "8500.00",
      date: "4h ago",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Late Invoices</h3>
        <div className="flex gap-2">
            <button className="btn btn-sm bg-[#B6F01E] border-none text-black hover:bg-[#a3d61b] font-medium normal-case rounded-full px-4">
                View All Invoices
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
              <th className="py-3 pl-0">No</th>
              <th className="py-3">Price</th>
              <th className="py-3">Date</th>
              <th className="py-3 text-right pr-0">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, index) => (
              <tr key={index} className="border-b border-gray-50 last:border-none">
                <td className="font-medium text-gray-500 pl-0 text-xs">{inv.no}</td>
                <td className="font-bold text-gray-700 text-sm">{inv.price}</td>
                <td className="text-gray-500 text-sm">{inv.date}</td>
                <td className="text-right pr-0">
                    <button className="btn btn-xs btn-circle btn-ghost text-gray-400">
                        <BsThreeDotsVertical />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LateInvoices;
