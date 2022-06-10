import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivateRoute() {
  // Add your own authentication on the below line.
  const { isLogin } = useSelector((state) => state.user);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
