import { DashboardPage } from "@/pages/dashboard/dashboard-page";
import { LoginPage } from "@/pages/login/login-page";
import { Routes as RouteWrapper, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <RouteWrapper>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </RouteWrapper>
  );
};
