import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import MerchantDashboard from "../Pages/Dashboard/Merchant/MerchantDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: MerchantDashboard,
      },
    ],
  },
]);
