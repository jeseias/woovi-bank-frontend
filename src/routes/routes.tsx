import { Routes as RouteWrapper } from "react-router-dom";
import { authRoutes } from "@/pages/auth/auth.routes";
import { dashboardRoutes } from "@/pages/dashboard/dashboard.routes";

export const AppRoutes = () => {
  return (
    <RouteWrapper>
      {authRoutes()}
      {dashboardRoutes()}
    </RouteWrapper>
  );
};
