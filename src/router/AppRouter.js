import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";//TODO: implement redux state
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register } from "../pages/index";

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route //TODO: implement private route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route> */}
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
