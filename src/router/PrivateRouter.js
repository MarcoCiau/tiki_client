import React from "react";
// import { useSelector } from "react-redux";//TODO: implement state
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const {uid} = useSelector(state => state.auth);//TODO: handle state
  return true ? children : <Navigate to="/login" />;
};
