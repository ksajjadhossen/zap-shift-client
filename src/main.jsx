import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./contests/AuthContests/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="urbanist-font">
      <AuthProvider>
        <RouterProvider router={router} />,
      </AuthProvider>
    </div>
  </StrictMode>,
);
