import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register } from "../pages/index";
import {
  AllJobs,
  Device,
  Profile,
  SharedLayout,
  Stats,
} from "../pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="device" element={<Device />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
