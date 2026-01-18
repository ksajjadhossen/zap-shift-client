import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCalendarToday } from "react-icons/md";

const data = [
  { name: "Mon", value: 11000 },
  { name: "Tue", value: 16000 },
  { name: "Wed", value: 8000 },
  { name: "Thu", value: 4500 },
  { name: "Fri", value: 16000 },
  { name: "Sat", value: 12000 },
  { name: "Sun", value: 20000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
        <p className="text-xs text-gray-500 mb-1">Sun, Jul 13, 2025</p>
        <p className="text-sm font-bold text-[#B6F01E] flex items-center gap-1">
           <span className="w-2 h-2 rounded-full bg-[#B6F01E]"></span>
           ${payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const OverallStatistics = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Overall Statistics</h3>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline border-gray-200 hover:bg-gray-50 text-gray-600 font-normal normal-case">
            <MdCalendarToday className="text-lg" />
            This Week
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <button className="btn btn-sm btn-circle btn-ghost">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B6F01E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#B6F01E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                dy={10}
            />
            <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#B6F01E', strokeWidth: 1, strokeDasharray: '5 5' }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#B6F01E"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverallStatistics;
