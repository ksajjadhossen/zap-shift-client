import React from "react";
import { Outlet, NavLink } from "react-router";
import {
  MdDashboard,
  MdLocalShipping,
  MdLockOutline,
  MdHelpOutline,
  MdLogout,
  MdMenu,
} from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { FaStore, FaMapMarkedAlt, FaUserCircle } from "react-icons/fa";
import { IoPricetagOutline, IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import ZapShiftLogo from "../Pages/Shared/ZapShiftLogo";

const DashboardLayout = () => {
  const menuItems = [
    { path: "/dashboard", icon: <MdDashboard />, label: "Dashboard" },
    { path: "/dashboard/deliveries", icon: <MdLocalShipping />, label: "Deliveries" },
    { path: "/dashboard/invoices", icon: <TbFileInvoice />, label: "Invoices" },
    { path: "/dashboard/stores", icon: <FaStore />, label: "Stores" },
    { path: "/dashboard/pricing", icon: <IoPricetagOutline />, label: "Pricing Plan" },
    { path: "/dashboard/coverage", icon: <FaMapMarkedAlt />, label: "Coverage Area" },
  ];

  const generalItems = [
    { path: "/dashboard/settings", icon: <IoSettingsOutline />, label: "Settings" },
    { path: "/dashboard/password", icon: <MdLockOutline />, label: "Change Password" },
    { path: "/dashboard/help", icon: <MdHelpOutline />, label: "Help" },
  ];

  return (
    <div className="drawer lg:drawer-open bg-[#F3F4F6] min-h-screen font-urbanist">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Top Bar */}
        <div className="w-full navbar bg-white shadow-sm px-6 sticky top-0 z-10">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <MdMenu className="text-2xl" />
            </label>
          </div>
          <div className="flex-1">
            {/* Breadcrumb or Title could go here */}
          </div>
          <div className="flex-none gap-4">
            <button className="btn btn-ghost btn-circle">
              <IoNotificationsOutline className="text-2xl text-gray-600" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-800">Zahid Hossain</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <div className="avatar">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                   {/* Placeholder for user image */}
                   <FaUserCircle className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-white text-base-content flex flex-col justify-between">
          {/* Logo & Menu */}
          <div>
            <div className="mb-8 pl-4">
               <ZapShiftLogo />
            </div>
            
            <div className="mb-2 pl-4 text-xs font-bold text-gray-400 uppercase">Menu</div>
            {menuItems.map((item) => (
              <li key={item.path} className="mb-1">
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                      isActive
                        ? "bg-[#B6F01E] text-black"
                        : "text-gray-500 hover:bg-gray-50 hover:text-black"
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}

            <div className="mt-8 mb-2 pl-4 text-xs font-bold text-gray-400 uppercase">General</div>
            {generalItems.map((item) => (
              <li key={item.path} className="mb-1">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                      isActive
                        ? "bg-[#B6F01E] text-black"
                        : "text-gray-500 hover:bg-gray-50 hover:text-black"
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </div>

          {/* Logout */}
          <div className="mb-4">
            <li>
              <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-500 font-medium w-full">
                <MdLogout className="text-xl" />
                Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
