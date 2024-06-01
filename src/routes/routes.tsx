import { DashboardPage } from "@/pages/dashboard/dashboard-page";
import { Routes as RouteWrapper, Route } from "react-router-dom";
import { authRoutes } from "@/pages/auth/auth.routes";

export const AppRoutes = () => {
  return (
    <RouteWrapper>
      {authRoutes()}
      <Route path="/" element={<DashboardPage />} />
    </RouteWrapper>
  );
};
