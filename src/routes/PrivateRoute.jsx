import React from "react";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
